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

    <!-- Begin Verbox {literal} -->
    <script type='text/javascript'>
        (function(d, w, m) {
            window.supportAPIMethod = m;
            var s = d.createElement('script');
            s.type ='text/javascript'; s.id = 'supportScript'; s.charset = 'utf-8';
            s.async = true;
            var id = '89f5cafe4fb10a3c50a69962d9bde8fb';
            s.src = '//admin.verbox.ru/support/support.js?h='+id;
            var sc = d.getElementsByTagName('script')[0];
            w[m] = w[m] || function() { (w[m].q = w[m].q || []).push(arguments); };
            if (sc) sc.parentNode.insertBefore(s, sc);
            else d.documentElement.firstChild.appendChild(s);
        })(document, window, 'Verbox');
    </script>
    <!-- {/literal} End Verbox -->
</head>

<body>
    <div id="app"></div>

    {{-- Global configuration object --}}
    <script>
        window.config = {!! json_encode([
            'appName' => 'Sector Esports Tournament',
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