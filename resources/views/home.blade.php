@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">

                    <?/*@if (count($channels) > 0)
                        <div class="row">
                            @foreach ($channels as $channel)
                                <div class="col-md-6 text-center">
                                    <iframe
                                        src="http://player.twitch.tv/?channel={{ $channel }}&autoplay=false"
                                        height="180"
                                        width="320"
                                        frameborder="1"
                                        scrolling="no"
                                        allowfullscreen="true">
                                    </iframe>
                                </div>
                            @endforeach
                        </div>
                    @endif*/?>
                                        
                </div>
            </div>
        </div>
    </div>
</div>
@endsection