<?php 
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class TeamStoreRequest extends FormRequest {
	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}
    
	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'title'  => 'required|unique:teams,title',
            'price' => 'required|integer|max:8800|min:0|regex:#^[0-9]+$#',
            //'quantity' => 'required|integer|min:2|regex:#^[0-9]+$#',
            'slug'  => 'required|unique:teams,slug',
            //'game_id'  => 'required|regex:#^[0-9]+$#',
		];
	}
    public function messages()
    {
        return [
            
        ];
    }
}