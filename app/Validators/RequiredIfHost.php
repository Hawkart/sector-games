<?php
namespace App\Validators;

use Illuminate\Http\Request;
use Illuminate\Validation\Validator;

class RequiredIfHost
{
	protected $request;
	
	/**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }
	
    public function validate($attribute, $value, $parameters, Validator $validator)
	{
		//$host = $this->request->getHost();
		$refer = $this->request->server('HTTP_REFERER');
		$host = parse_url($refer, PHP_URL_SCHEME)."://".parse_url($refer,PHP_URL_HOST);

		if (empty($value) && (in_array($host, config('cors.allowedOrigins')) || config('cors.allowedOrigins')==['*'])) 
		{
            return false;
		}
		
		return true;
    }
}