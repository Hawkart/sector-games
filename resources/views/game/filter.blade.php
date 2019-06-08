<div class="row">
	<div class="col-md-12">
		<div class="panel panel-default card-view">
			<div class="panel-wrapper collapse in">
				<div class="panel-body">
                    <div class="form-wrap">
						{!! Form::open(['method'=>'get']) !!}                        
							<div class="row">
								<div class="col-md-3">
									<div class="form-group">
										<label class="control-label mb-10">Select genre</label>
                                        {!! Form::select('genre_id', $genres, Request::get('genre_id'), ['class'=>'selectpicker', 'data-style'=>"form-control btn-default btn-outline"] ) !!}
									</div>	
								</div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="control-label mb-10">&nbsp;</label><br />
                                        {!! Form::submit('filter', ["class"=>"btn btn-primary"]) !!}
                                    </div>
                                </div>
                            </div>
                            {!! Form::hidden('filter', true) !!}
						{!! Form::close() !!}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>