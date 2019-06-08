<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Validator;
use URL;
use Session;
use Redirect;
use Input;
use JWTAuth;
/** All Paypal Details class **/
use PayPal\Rest\ApiContext;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\ExecutePayment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\Transaction;

class PayPalController extends Controller
{
    private $_apiContext;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        /** setup PayPal api context **/
        $paypal_conf = \Config::get('paypal');
        $this->_apiContext = new ApiContext(new OAuthTokenCredential($paypal_conf['client_id'], $paypal_conf['secret']));
        $this->_apiContext->setConfig($paypal_conf['settings']);
    }

    public function getCheckout(Request $request)
    {
        //Setup Payer
        $payer = new Payer();
        $payer->setPaymentMethod('paypal');
        //Setup Amount
        $amount = new Amount();
        $amount->setCurrency('USD');
        $amount->setTotal($request->get('amount'));
        //Setup Transaction
        $transaction = new Transaction();
        $transaction->setAmount($amount);
        $transaction->setDescription('Adding from PayPal!');
        //List redirect URLS
        $redirectUrls = new RedirectUrls();
        $redirectUrls->setReturnUrl(action('PayPalController@getDone'));
        $redirectUrls->setCancelUrl(action('PayPalController@getCancel'));
        //And finally set all the prerequisites and create the payment
        $payment = new Payment();
        $payment->setIntent('sale');
        $payment->setPayer($payer);
        $payment->setRedirectUrls($redirectUrls);
        $payment->setTransactions(array($transaction));
        $response = $payment->create($this->_apiContext);
        //Return our payment info to the user
        return $response;
    }

    public function getDone(Request $request)
    {
        $id = $request->get('paymentID');
        $token = $request->get('token');
        $payer_id = $request->get('payerID');

        $payment = Payment::get($id, $this->_apiContext);
        $execution = new PaymentExecution();
        $execution->setPayerId($payer_id);
        /**Execute the payment **/
        $result = $payment->execute($execution, $this->_apiContext);
        if ($result->getState() == 'approved') {

            $data = json_decode($result, true);

            $user = JWTAuth::setToken($token)->authenticate();
            if($user)
            {
                $balance = intval($user->balance);
                $user->update([
                    'balance' => $user->balance+$data['transactions'][0]['amount']['total']
                ]);

                \App\Models\Transaction::create([
                    "user_id" => $user->id,
                    "description" => $data['transactions'][0]["description"],
                    "data" => $data,
                    "external_id" => $data["id"],
                    "amount" => $data['transactions'][0]['amount']['total']
                ]);
            }

            // Do something to signify we succeeded
            return response()->json($data, 200);
        }else{
            return response()->json([], 422);
        }
    }

    // The user got scared and bailed, this is where keyboard throwing is allowed
    public function getCancel()
    {
        return response()->json([], 422);
    }
}
