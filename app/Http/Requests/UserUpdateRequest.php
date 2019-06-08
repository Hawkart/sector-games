<?php 
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use JWTAuth;

class UserUpdateRequest extends FormRequest {
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
			//'nickname'  => 'required|unique:users,nickname,'.$id,
            //'phone'     => 'regex:#^[-+()0-9]+$#',
            //'email'     => 'email|required|unique:users,email,'.$id,
            'password'  => 'min:6|confirmed',
		];
	}
    public function messages()
    {
        return [
            
        ];
    }
}