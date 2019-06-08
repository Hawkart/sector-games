<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \GiantBomb\Client\GiantBombClient;
use App\Models\Genre;
use Storage;
use Image;
use Cache;

class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Cache::remember('genres', 3600, function(){
            return Genre::all();
        });
        
        return response()->json($items);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try
        {
            $genre = Cache::remember('genre' . $id, 3600, function() use ($id){
                return Genre::findOrFail($id);
            }); 
        }
        catch(ModelNotFoundException $e)
        {
            abort(404);
        }
        
        return response()->json($genre);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    
    /**
     * Import genres from Giantbomb.com by API.
     */
    public function importByGiantbomb()
    {
        $giantbombClient = GiantBombClient::factory([
            'apiKey' => env('GIANTBOMB_API_CLIENT'),
        	'cache'  => null
        ]);
        
        $count = 0;
        $limit = 50;
        $offset = 0;
        do{
            $response = $giantbombClient->getGenres([
                'limit'  => $limit,
                'offset' => $offset
            ]);
            $genres = $response->getResults();
            $total = intval($response->getNumberOfTotalResults());
            
            foreach($genres as $arGenre)
            {
                $image = $arGenre->getImage();
                if(!empty($image))
                {
                    $image_path = 'genres/'.basename($image);
                    $image_path = str_replace("%20", "", $image_path);
                    Image::make($path)->save(public_path("storage/".$image_path));
                }else{
                    $image_path = null;
                }
                
                $data = [
                    'active'            => true,
                    'giantbomb_id'      => $arGenre->getId(),
                    'title'             => $arGenre->getName(),
                    'desc'              => $arGenre->getDeck(),
                    'image'             => $image
    	        ];
                
                Genre::create($data);
            }
            
            $count += count($genres);
            $offset += $limit;
            
        } while ($count<$total);
    }
}