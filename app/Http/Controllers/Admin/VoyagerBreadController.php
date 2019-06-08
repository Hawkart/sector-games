<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use TCG\Voyager\Database\Schema\SchemaManager;
use TCG\Voyager\Events\BreadDataAdded;
use TCG\Voyager\Events\BreadDataDeleted;
use TCG\Voyager\Events\BreadDataUpdated;
use TCG\Voyager\Events\BreadImagesDeleted;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Http\Controllers\Traits\BreadRelationshipParser;
use TCG\Voyager\Http\Controllers\VoyagerBreadController as Controller;
use App\Http\Controllers\TournamentController;
use App\Models\Tournament;

class VoyagerBreadController extends Controller
{
    // POST BR(E)AD
    public function update(Request $request, $id)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        // Compatibility with Model binding.
        $id = $id instanceof Model ? $id->{$id->getKeyName()} : $id;

        $data = call_user_func([$dataType->model_name, 'findOrFail'], $id);

        // Check permission
        $this->authorize('edit', $data);

        // Validate fields with ajax
        $val = $this->validateBread($request->all(), $dataType->editRows);

        if ($val->fails()) {
            return response()->json(['errors' => $val->messages()]);
        }

        if (!$request->ajax()) {
            $this->insertUpdateData($request, $slug, $dataType->editRows, $data);

            //check is multiple tournament && create copies
            if($dataType->name=='tournaments' && $request->get('is_multiple')=='on')
            {
                TournamentController::modifyMultiple($id);
            }

            event(new BreadDataUpdated($dataType, $data));

            return redirect()
                ->route("voyager.{$dataType->slug}.index")
                ->with([
                    'message'    => __('voyager.generic.successfully_updated')." {$dataType->display_name_singular}",
                    'alert-type' => 'success',
                ]);
        }
    }

    /**
     * POST BRE(A)D - Store data.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        // Check permission
        $this->authorize('add', app($dataType->model_name));

        // Validate fields with ajax
        $val = $this->validateBread($request->all(), $dataType->addRows);

        if ($val->fails()) {
            return response()->json(['errors' => $val->messages()]);
        }
        
        if($dataType->name=='tournaments')
        {
            $errors = [];
            $fieldsDisplay = [];
            
            
            foreach($dataType->addRows as $arRow)
            {
                $fieldsDisplay[$arRow['field']] = $arRow['display_name'];
            } 
            
            if($request->get('is_multiple')=='on')
            {
                $checkFields = ['contract_end_at', 'contract_start_at', 'period', 'period_final_at', 'period_start_at', 'winners_part'];
            }else{
                $checkFields = ['start_at', 'register_start', 'final_at'];
            }
            
            foreach($checkFields as $field)
            {
                if(empty($request->get($field)))
                {
                    $errors[$fieldsDisplay[$field]][] = 'Please fill the field.';
                }
            }
            
            if(!empty($request->get('winners_part')))
            {
                $winner_parts = explode(",", $request->get('winners_part'));
                $sum = 0;
                foreach($winner_parts as $prize)
                {
                    $sum+= intval($prize);
                }
                
                if($sum!=100)
                {
                    $errors[$fieldsDisplay['winners_part']][] = 'Sum of winners part is not 100! Check the parts!';
                }
            }
            
            if(count($errors)>0)
                return response()->json(['errors' => $errors]);
        }

        if (!$request->ajax()) {
            $data = $this->insertUpdateData($request, $slug, $dataType->addRows, new $dataType->model_name());
            
            
            //check is multiple tournament && create copies
            if($dataType->name=='tournaments' && $request->get('is_multiple')=='on')
            {
                TournamentController::generateMultiple($data->id);
            }
            
            event(new BreadDataAdded($dataType, $data));

            return redirect()
                ->route("voyager.{$dataType->slug}.index")
                ->with([
                        'message'    => __('voyager.generic.successfully_added_new')." {$dataType->display_name_singular}",
                        'alert-type' => 'success',
                    ]);
        }
    }

    //***************************************
    //                _____
    //               |  __ \
    //               | |  | |
    //               | |  | |
    //               | |__| |
    //               |_____/
    //
    //         Delete an item BREA(D)
    //
    //****************************************

    public function destroy(Request $request, $id)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        // Check permission
        $this->authorize('delete', app($dataType->model_name));

        // Init array of IDs
        $ids = [];
        if (empty($id)) {
            // Bulk delete, get IDs from POST
            $ids = explode(',', $request->ids);
        } else {
            // Single item delete, get ID from URL or Model Binding
            $ids[] = $id instanceof Model ? $id->{$id->getKeyName()} : $id;
        }
        foreach ($ids as $id) {
            $data = call_user_func([$dataType->model_name, 'findOrFail'], $id);
            $this->cleanup($dataType, $data);
        }

        $displayName = count($ids) > 1 ? $dataType->display_name_plural : $dataType->display_name_singular;
        
                    
        //check is multiple tournament
        if($dataType->name=='tournaments')
        {
            $deleteIds = [];
            foreach($ids as $id)
            {
                $tournament = Tournament::findOrFail($id);
                if($tournament->is_multiple)
                {
                    $dids = Tournament::where('parent_id', $tournament->id)->pluck('id')->toArray();
                    $deleteIds = array_merge($deleteIds, $dids);
                }
            }
            if(count($deleteIds)>0)
            {
                $ids = array_merge($ids, $deleteIds);
            }
        }
        
        $res = $data->destroy($ids);
        $data = $res
            ? [
                'message'    => __('voyager.generic.successfully_deleted')." {$displayName}",
                'alert-type' => 'success',
            ]
            : [
                'message'    => __('voyager.generic.error_deleting')." {$displayName}",
                'alert-type' => 'error',
            ];

        if ($res) {
            event(new BreadDataDeleted($dataType, $data));
        }

        return redirect()->route("voyager.{$dataType->slug}.index")->with($data);
    }

    /**
     * Remove translations, images and files related to a BREAD item.
     *
     * @param \Illuminate\Database\Eloquent\Model $dataType
     * @param \Illuminate\Database\Eloquent\Model $data
     *
     * @return void
     */
    protected function cleanup($dataType, $data)
    {
        // Delete Translations, if present
        if (is_bread_translatable($data)) {
            $data->deleteAttributeTranslations($data->getTranslatableAttributes());
        }

        // Delete Images
        $this->deleteBreadImages($data, $dataType->deleteRows->where('type', 'image'));

        // Delete Files
        foreach ($dataType->deleteRows->where('type', 'file') as $row) {
            $files = json_decode($data->{$row->field});
            if ($files) {
                foreach ($files as $file) {
                    $this->deleteFileIfExists($file->download_link);
                }
            }
        }
    }

    /**
     * Delete all images related to a BREAD item.
     *
     * @param \Illuminate\Database\Eloquent\Model $data
     * @param \Illuminate\Database\Eloquent\Model $rows
     *
     * @return void
     */
    public function deleteBreadImages($data, $rows)
    {
        foreach ($rows as $row) {
            if ($data->{$row->field} != config('voyager.user.default_avatar')) {
                $this->deleteFileIfExists($data->{$row->field});
            }

            $options = json_decode($row->details);

            if (isset($options->thumbnails)) {
                foreach ($options->thumbnails as $thumbnail) {
                    $ext = explode('.', $data->{$row->field});
                    $extension = '.'.$ext[count($ext) - 1];

                    $path = str_replace($extension, '', $data->{$row->field});

                    $thumb_name = $thumbnail->name;

                    $this->deleteFileIfExists($path.'-'.$thumb_name.$extension);
                }
            }
        }

        if ($rows->count() > 0) {
            event(new BreadImagesDeleted($data, $rows));
        }
    }
}