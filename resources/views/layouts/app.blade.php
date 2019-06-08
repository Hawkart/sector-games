<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	 <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    
	<meta name="description" content="Crowdsourcing Platform for  junior eSport teams." />
	<meta name="keywords" content="eSport,games" />
	<meta name="author" content="hawkart"/>
	
	<!-- Favicon -->
	<link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
	<link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
	
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('/css/custom.css') }}" rel="stylesheet" type="text/css"/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/4.10.1/bootstrap-social.css" rel="stylesheet" >
    
    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>

<body>
    <div class="wrapper theme-4-active pimary-color-blue">
        
        @include('_partials.nav')
        @include('_partials.left_sidebar')
        		
        <!-- Main Content -->
		<div class="page-wrapper">
            <div class="container-fluid">
                @yield('content')
            </div>
			
			<!-- Footer -->
			<footer class="footer container-fluid pl-30 pr-30">
				<div class="row">
					<div class="col-sm-12">
						<p>2017 &copy; {{ config('app.name', 'Laravel') }}.</p>
					</div>
				</div>
			</footer>
			<!-- /Footer -->
			
		</div>
        <!-- /Main Content -->
    </div>
    <!-- /#wrapper -->

    <script src="{{ asset('/js/app.js') }}"></script>
    <script src="{{ asset('/js/vendor.js') }}"></script>
    <script src="{{ asset('/js/custom.js') }}"></script>	
</body>

</html>