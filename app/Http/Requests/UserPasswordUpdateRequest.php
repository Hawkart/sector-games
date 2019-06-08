<?php 
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use JWTAuth;

class UserPasswordUpdateRequest extends FormRequest {
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
            'password' => 'required|confirmed|min:6',
		];
	}
    public function messages()
    {
        return [
            
        ];
    }
}