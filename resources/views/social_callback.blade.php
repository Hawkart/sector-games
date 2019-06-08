<html>
<head>
    <meta charset="utf-8">
    <title>{{ config('app.name') }}</title>
    <script>
        var createCookie = function(name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }
        createCookie('token', '<?=$token?>', 365);
        window.opener.postMessage({ token: "{{ $token }}" }, '*')
        window.close()
    </script>
</head>
<body>
</body>
</html>