<?php 
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use JWTAuth;

class TeamUpdateRequest extends FormRequest {
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
        $user = JWTAuth::parseToken()->authenticate();
        $id = $user->id;
		return [
            'title'  => 'required|unique:teams,title,'.$this->id,
            'quantity' => 'required|integer|min:2|regex:#^[0-9]+$#',
            'slug'  => 'required|unique:teams,slug,'.$this->id,
            'game_id'  => 'required|regex:#^[0-9]+$#',
            'price' => 'required|integer|max:8800|min:0|regex:#^[0-9]+$#',
		];
	}
    public function messages()
    {
        return [
            
        ];
    }
}