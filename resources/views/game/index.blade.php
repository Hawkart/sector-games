@extends('layouts.app')

@section('content')
    <div class="row heading-bg">
    	<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h5 class="txt-dark">Games</h5>
    	</div>
    	<!-- Breadcrumb -->
    	<div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
          {!! Breadcrumbs::render('games') !!}
    	</div>
    	<!-- /Breadcrumb -->
    </div>
    <!-- /Title -->
    
    @include('game.filter')
    
    @if($games->count())
        <div class="row">
            @foreach($games as $game)
                <div class="col-lg-2 col-md-3 col-sm-3 col-xs-6">
        			<div class="panel panel-default card-view pa-0">
        				<div class="panel-wrapper collapse in">
        					<div class="panel-body pa-0">
        						<article class="col-item">
        							<div class="photo">
        								<a href="{!! url('games/'.$game->id) !!}"> <img src="{{ Storage::disk('public')->url($game->logo) }}" class="img-responsive" alt="{{$game->title}}" /> </a>
        							</div>
        							<div class="info">
        								<h6>{{ str_limit($game->title, 20) }}</h6>
        							</div>
        						</article>
        					</div>
        				</div>	
        			</div>	
        		</div>
            @endforeach
        </div>
        <div class="row">
            <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                {{ $games->links() }}
            </div>
        </div>
    @else
    
    @endif
@endsection