@extends('layouts.app')

@section('content')

    <div class="row heading-bg">
    	<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h5 class="txt-dark">Fight create</h5>
    	</div>
    	<div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            {!! Breadcrumbs::render('fights') !!}
    	</div>
    </div>

<div class="row">
	<div class="col-md-12">
		<div class="panel panel-default card-view">
			<div class="panel-wrapper collapse in">
				<div class="panel-body">
					
					<div class="row">
						<div class="col-md-12">
							<div class="form-wrap">
                            
                                {!! Form::open(['method'=>'post', 'data-toggle' => 'validator']) !!}
                                    <div class="form-group">
										<label for="inputNGame" class="control-label mb-10">Game</label>
                                        {!! Form::select('game_id', $games, Request::get('game_id'), ['class'=>'selectpicker', 'data-style'=>"form-control btn-default btn-outline", 'required'] ) !!}
									</div>
                                    
                                    <div class="form-group">
										<label class="control-label mb-10 text-left">Datetime start</label>
										<div class='input-group date' id='datetimepicker1'>
                                            {!! Form::text('start_at', Request::get('start_at'), ['class'=>'form-control', 'required', 'data-match-error' => 'Need datetime']) !!}
											<span class="input-group-addon">
												<span class="fa fa-calendar"></span>
											</span>
										</div>
                                        
                                        <div class="help-block with-errors"></div>
									</div>

									<div class="form-group mb-0">
										<button type="submit" class="btn btn-success btn-anim"><i class="icon-rocket"></i><span class="btn-text">submit</span></button>
									</div>
								{!! Form::close() !!}
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