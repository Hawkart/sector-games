<?php

return [

	// The default gateway to use
	'default' => 'paypal',

	// Add in each gateway here
	'gateways' => [
		'paypal' => [
			'driver'  => 'PayPal_Express',
			'options' => [
				'solutionType'   => '',
				'landingPage'    => '',
				'headerImageUrl' => ''
			]
		],
        'skrill' => [
			'driver'  => 'Skrill',
			'options' => [
				'username'  => env( 'OMNIPAY_SKRILL_USERNAME', '' ),
                'password'  => env( 'OMNIPAY_SKRILL_PASSWORD', '' ),
                'signature' => env( 'OMNIPAY_SKRILL_SIGNATURE', '' ),
                'solutionType' => env( 'OMNIPAY_SKRILL_SOLUTION_TYPE', '' ),
                'landingPage'    => env( 'OMNIPAY_SKRILL_LANDING_PAGE', '' ),
                'headerImageUrl' => env( 'OMNIPAY_SKRILL_HEADER_IMAGE_URL', '' ),
                'brandName' =>  'Sparta.games',
                'testMode' => env( 'OMNIPAY_SKRILL_TEST_MODE', true )
			]
		]
	]

];