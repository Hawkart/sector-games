<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	 <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Sector Esports</title>
    
	<!-- Favicon -->
	<link rel="shortcut icon" href="{{ asset('/images/sector_32_32.png') }}">
	<link rel="icon" href="{{ asset('/images/sector_32_32.png') }}" type="image/x-icon">
	
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <link href="{{ asset('/css/custom.css') }}" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7cOpen+Sans:400,700" rel="stylesheet" type="text/css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/4.10.1/bootstrap-social.css" rel="stylesheet">

    <meta property="og:title" content="Sector Esports Tournament">
    <link rel="image_src" href="{{ asset('/images/sector_200_200.png') }}">
    <meta property="og:image" content="{{ asset('/images/sector_200_200.png') }}">
</head>

<body>
    <div id="app"></div>

    {{-- Global configuration object --}}
    <script>
        window.config = {!! json_encode([
            'appName' => config('app.name'),
            'appLogo' => asset('/images/logo.png'),
            'appLogo_2' => asset('/images/logo.png'),
            'locale' => $locale = app()->getLocale(),
            'locales' => config('app.locales'),
            'apiHost' => config('app.api_host'),
            'googleRecaptchaKey' => env('GOOGLE_RECAPTCHA_KEY', ''),
            'vkontakteAuth' => config('services.twitch.client_id')
        ]) !!};
    </script>
    
    {{-- Load the application scripts --}}
    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
</body>

</html>