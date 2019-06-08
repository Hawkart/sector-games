<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	 <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    
	<!-- Favicon -->
	<link rel="shortcut icon" href="{{ asset('/images/ava_32.png') }}">
	<link rel="icon" href="{{ asset('/images/ava_32.png') }}" type="image/x-icon">
	
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <link href="{{ asset('/css/custom.css') }}" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7cOpen+Sans:400,700" rel="stylesheet" type="text/css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/4.10.1/bootstrap-social.css" rel="stylesheet">

    <meta property="og:title" content="Национальная Юношеская Киберспортивная Лига">
    <link rel="image_src" href="{{ asset('/images/ava_150.png') }}">
    <meta property="og:image" content="{{ asset('/images/ava_150.png') }}">

    <meta name="yandex-verification" content="e5a212f56ab9f436" />
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter49330969 = new Ya.Metrika2({
                        id:49330969,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/tag.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks2");
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/49330969" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->

    <script type="text/javascript" src="https://vk.com/js/api/openapi.js?156"></script>
</head>

<body>
    <div id="app"></div>

    {{-- Global configuration object --}}
    <script>
        window.config = {!! json_encode([
            'appName' => config('app.name'),
            'appLogo' => asset('/images/logo.png'),
            'appLogo_2' => asset('/images/logo_2_03.png'),
            'locale' => $locale = app()->getLocale(),
            'locales' => config('app.locales'),
            'apiHost' => config('app.api_host'),
            'googleRecaptchaKey' => env('GOOGLE_RECAPTCHA_KEY', ''),
            'vkontakteAuth' => config('services.twitch.client_id')
        ]) !!};
    </script>
    
    {{-- Load the application scripts --}}
    <?/*<script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>
    <script src="https://www.paypalobjects.com/api/checkout.js" async></script>*/?>
    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>

    <!-- VK Widget -->
    <div id="vk_community_messages"></div>
    <script type="text/javascript">
        VK.Widgets.CommunityMessages("vk_community_messages", 167685123, {tooltipButtonText: "Есть вопрос?"});
    </script>

    <script type="text/javascript">
        VK.Widgets.Group("vk_groups", {mode: 3, height: "400", width: "auto", no_cover: 1, color1: '232930', color2: 'FFFFFF', color3: 'DD163B'}, 167685123);
    </script>

    <!-- GoodGames -->
    <?/*<script src="{{ asset('/vendor/object-fit-images/dist/ofi.min.js') }}"></script>
    <script src="{{ asset('/vendor/gsap/src/minified/TweenMax.min.js') }}"></script>
    <script src="{{ asset('/vendor/gsap/src/minified/plugins/ScrollToPlugin.min.js') }}"></script>
    <script src="{{ asset('/vendor/popper.js/dist/umd/popper.min.js') }}"></script>
    <script src="{{ asset('/vendor/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('/vendor/sticky-kit/dist/sticky-kit.min.js') }}"></script>
    <script src="{{ asset('/vendor/jarallax/dist/jarallax.min.js') }}"></script>
    <script src="{{ asset('/vendor/jarallax/dist/jarallax-video.min.js') }}"></script>
    <script src="{{ asset('/vendor/imagesloaded/imagesloaded.pkgd.min.js') }}"></script>
    <script src="{{ asset('/vendor/flickity/dist/flickity.pkgd.min.js') }}"></script>
    <script src="{{ asset('/vendor/photoswipe/dist/photoswipe.min.js') }}"></script>
    <script src="{{ asset('/vendor/photoswipe/dist/photoswipe-ui-default.min.js') }}"></script>
    <script src="{{ asset('/vendor/jquery-validation/dist/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('/vendor/jquery-countdown/dist/jquery.countdown.min.js') }}"></script>
    <script src="{{ asset('/vendor/moment/min/moment.min.js') }}"></script>
    <script src="{{ asset('/vendor/moment-timezone/builds/moment-timezone-with-data.min.js') }}"></script>
    <script src="{{ asset('/vendor/hammerjs/hammer.min.js') }}"></script>
    <script src="{{ asset('/vendor/nanoscroller/bin/javascripts/jquery.nanoscroller.js') }}"></script>
    <script src="{{ asset('/vendor/soundmanager2/script/soundmanager2-nodebug-jsmin.js') }}"></script>
    <script src="{{ asset('/vendor/bootstrap-slider/dist/bootstrap-slider.min.js') }}"></script>
    <script src="{{ asset('/vendor/summernote/dist/summernote-bs4.min.js') }}"></script>
    <script src="{{ asset('/js/goodgames.min.js') }}"></script>*/?>
    <!-- END: Scripts -->
</body>

</html>