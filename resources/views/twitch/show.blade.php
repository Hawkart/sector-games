@extends('layouts.app')

@section('content')
    
    <div class="row heading-bg">
    	<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h5 class="txt-dark">{{ $channel['game'] }} by {{ $channel['display_name'] }}</h5>
    	</div>
    </div>
    
	<div class="row">
		<div class="col-sm-12">
			<div class="panel panel-default card-view">
				<div class="panel-wrapper collapse in">
					<div class="panel-body">
						<div class="row">
							<div class="col-md-8">
                                <iframe
                                    src="http://player.twitch.tv/?channel={{ $channel['display_name'] }}&autoplay=false"
                                    height="720"
                                    width="1280"
                                    frameborder="0"
                                    scrolling="no"
                                    allowfullscreen="true">
                                </iframe>
							</div>	
                            <div class="col-md-4">
                                <iframe frameborder="0" 
                                        scrolling="no" 
                                        id="chat_embed" 
                                        src="http://www.twitch.tv/{{ $channel['display_name'] }}/chat" 
                                        height="500" 
                                        width="350">
                                </iframe>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Row -->
@endsection