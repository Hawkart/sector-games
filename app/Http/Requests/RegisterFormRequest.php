<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class RegisterFormRequest extends FormRequest
{
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
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            /*'nickname.required' => 'A nickname is required',
            'email.required'  => 'A email is required',
            'password.required'  => 'A password is required',
            'type.required' => 'A type is required',
            'g-recaptcha-response.required' => 'A captcha is required'*/
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //'g-recaptcha-response'=>'required|recaptcha',
			'institution_id' => 'required_if_host',
            'class' => 'required_if_host',
            'char' => 'required_if_host',
            'nickname' => 'required',
            'type' => 'required|in:player,investor,coach',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:7',
            'revenue' => 'required_if:type,coach|numeric|min:1|max:10',
            'salary' => 'required_if:type,coach|numeric|min:1|max:500',
            'game_id' => 'required_if:type,coach|required_if:type,player',
            'country_id' => 'required_if:type,investor|required_if:type,coach',
            'tax_country_id' => 'required_if:type,investor|required_if:type,coach',
            'name' => 'required',
            'game_roles' => 'required_if:type,player',
        ];
    }
}
