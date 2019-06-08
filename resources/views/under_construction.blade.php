<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:100,600" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,500,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #284152;
                color: #fff;
                height: 100vh;
                margin: 0;
                font-family: "Roboto", 'Open+Sans', sans-serif;
                font-size: 16px;
                font-style: normal;
                line-height: 1.7;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
                
            }

            .title {
                font-size: 24px;
                font-family: 'Poppins', sans-serif;
            }

            .links > a {
                color: #fff;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 10px;
            }
            
            .color-overlay-dark {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #284152;
                opacity: .7;
                width: 100%;
                height: 100%;
            }
            
            .txt-shadow {
                text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
            }
            
            .form-control{
                border: 1px solid rgba(255, 255, 255, 0.18);
                background-color: #102e42;
                border-radius: 0;
                box-shadow: none;
                color: #fff;
                height: 42px;
                margin-bottom: 15px;
            }
            
            .btn{
                color: #fff;
                padding: 10px 25px;
                text-transform: capitalize;
                border-radius: 2px;
                outline: none;
                box-shadow: none;
                border: none;
                transition: all 0.3s ease;
            }
            .mb-40{
                margin-bottom: 40px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height" style="background-image: url(http://spartacoin.com/images/BlizzCon8.jpg); background-size: cover;">
            <div class="color-overlay-dark"></div>
            <div class="content">

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-40">
                        <div class="title m-b-md txt-shadow">
                            Welcome To SPARTA.GAMES!<br />
                            the First Crowdfunding ESports Platform in the World!<br/>
                            Earn money with ESPORTs
                        </div>

                    </div>
                    <div class="col-lg-offset-2 col-md-offset-2 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <p class="txt-shadow">Enter your promo code here:</p>
                        <div class="text-left">
                            @if(Session::has('status'))<span style="color: #e82b37">{{ Session::get('status') }}</span><br><br>@endif

                            <form method="post" action="/under-construction">
                                {{ csrf_field() }}
                                <input type="password" name="key" class="form-control" placeholder="Promo code">
                                <input type="submit" value="go!" class="btn btn-primary">
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </body>
</html>