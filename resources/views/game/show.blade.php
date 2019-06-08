@extends('layouts.app')

@section('content')

    <div class="row heading-bg">
    	<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h5 class="txt-dark">{{ $game->title }}</h5>
    	</div>
    	<div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            {!! Breadcrumbs::render('game', $game) !!}
    	</div>
    </div>

	<div class="row">
		<div class="col-sm-12">
			<div class="panel panel-default card-view">
				<div class="panel-wrapper collapse in">
					<div class="panel-body">
						<div class="row">
							<div class="col-md-2">
								<div class="item-big">
									<div class="carousel">
										<div role="listbox" class="carousel-inner">
										      <div class="item active"> <img src="{{ Storage::disk('public')->url($game->logo) }}" alt="First slide image"> </div>
                                        </div>
									</div>
								</div>
                                
                                @if (!Auth::guest() && Auth::user()->player())
                                    {!! Form::open(['method'=>'get', 'action' => 'FightController@create']) !!}                        
            							{!! Form::hidden('game_id', $game->id) !!}
                                        <div class="row mt-10 text-center">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <button class="btn btn-info btn-lable-wrap left-label"> 
                                                        <span class="btn-label"><i class="fa fa-gamepad"></i> </span>
                                                        <span class="btn-text">Create Fight</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
            						{!! Form::close() !!}
                                @endif
                                
							</div>
								
							<div class="col-md-10">
								<div class="product-detail-wrap">
                                    <h3 class="mb-15 weight-500">{{ $game->title }}</h3>
                                    <div class="col-md-12 pb-20">
                                        <div class="gallery-wrap">
    										<div class="portfolio-wrap project-gallery">
    											<ul id="portfolio_1" class="portf auto-construct  project-gallery" data-col="4">
                                                    @foreach($game->images as $image)
                                                    <li class="item" data-src="{{ Storage::disk('public')->url($image) }}" data-sub-html="" >
    													<a href="">
    													   <img class="img-responsive" src="{{ Storage::disk('public')->url($image) }}"  alt="{{$game->title}}" />
    													</a>
    												</li>
                                                    @endforeach
    											</ul>
    										</div>
    									</div>
                                    </div>
                                    <p class="mb-10"><strong>Genre:</strong> &nbsp;{{ $game->genre->title }}</p>
									<p class="mb-50"><strong>Description:</strong> &nbsp;{{ $game->body }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Row -->
    
    <!-- Row -->
	<div class="row">
		<div class="col-sm-12">
			<div class="panel panel-default card-view">
				<div class="panel-wrapper collapse in">
					<div class="panel-body">
						<div  class="tab-struct custom-tab-1 product-desc-tab">
							<ul role="tablist" class="nav nav-tabs nav-tabs-responsive" id="myTabs_7">
								<li class="active" role="presentation"><a aria-expanded="true"  data-toggle="tab" role="tab" id="descri_tab" href="#broadcasts"><span>Broadcasts</span></a></li>
								<li role="presentation" class="next"><a  data-toggle="tab" id="adi_info_tab" role="tab" href="#adi_info_tab_detail" aria-expanded="false"><span>Closes fights</span></a></li>
							</ul>
							<div class="tab-content" id="myTabContent_7">
								<div id="broadcasts" class="tab-pane fade active in pt-0" role="tabpanel">
									
                                    <?/*@if (count($streams) > 0)
                                        <div class="row mt-30">
                                            @foreach ($streams as $stream)
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                                <iframe
                                                    src="http://player.twitch.tv/?channel={{ $stream['channel']['display_name'] }}&autoplay=false"
                                                    frameborder="1"
                                                    scrolling="no"
                                                    allowfullscreen="true">
                                                </iframe>
                                    		</div>
                                        @endforeach
                                    </div>
                                    @endif*/?>
                                    
                                    <?/*
                                    <div class="col-md-12 pb-20">
                                    <div class="gallery-wrap">
										<div class="portfolio-wrap project-gallery">
											<ul id="portfolio" class="portf auto-construct  project-gallery" data-col="3">
												
                                                @if (count($streams) > 0)
                                                    @foreach ($streams as $stream)
                                                        <li class="item small photography" data-src="http://player.twitch.tv/?channel={{ $stream['channel']['display_name'] }}&autoplay=false&html5" data-poster="{{ $stream['preview']['medium'] }}"  data-sub-html="<p>{{ $stream['channel']['description'] }}</p>">
    														<a href="">
    														<img class="img-responsive" src="{{ $stream['preview']['medium'] }}"  alt="Image description" />
    														<span class="hover-cap">{{ str_limit($stream['channel']['description'], 20) }}</span>
    														</a>
    													</li>                                                  
                                                    @endforeach
                                                @endif
											</ul>
										</div>
									</div>
                                    </div>
                                    */?>
                                    
                                    @if (count($streams) > 0)
                                        <div class="row mt-30">
                                            @foreach ($streams as $stream)
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                        			<div class="panel panel-default card-view pa-0">
                                        				<div class="panel-wrapper collapse in">
                                        					<div class="panel-body pa-0">
                                        						<article class="col-item">
                                        							<div class="photo">
                                                                        <a href="{!! url('twitch/'.$stream['channel']['display_name']) !!}">
                                        								    <img src="{{ $stream['preview']['medium'] }}" class="img-responsive"/>
                                                                        </a>
                                        							</div>
                                        						</article>
                                        					</div>
                                        				</div>	
                                        			</div>	
                                        		</div>
                                            @endforeach
                                        </div>
                                    @endif
								</div>
								<div  id="adi_info_tab_detail" class="tab-pane pt-0 fade" role="tabpanel">
									<div class="table-wrap">
										<div class="table-responsive">
										  <table class="table  mb-0">
											<tbody>
												<tr>
													<td class="border-none">SIZE</td>
													<td class="border-none">31, 32, 33, 34, 35</td>
												</tr>
												<tr>
													<td>COLOR</td>
													<td>blue, red, rosa, white</td>
												</tr>
												<tr>
													<td>TAGS</td>
													<td>Diesel, shoe, stars</td>
												</tr>
											</tbody>
										  </table>
										</div>
									</div>
								</div>
							</div>
						</div>
					
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Row -->
@endsection