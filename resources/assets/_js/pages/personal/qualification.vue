<template>
<div class="row">
	<div class="col-lg-12 col-md-12 col-xs-12">
		<card>
			<div class="sm-data-box-1">
				<h5 class="txt-dark capitalize-font mb-10 text-center">Qualification</h5>

				<div v-if="user!==null && user.extern_statistic!=null">
					<div class="cus-sat-stat weight-500 txt-success text-center mt-5">
						<span class="counter-anim">{{user.extern_statistic.winrate}}</span><span>%</span>
					</div>
					<div class="progress-anim mt-20">
						<div class="progress">
							<div class="progress-bar progress-bar-success wow animated progress-animated" role="progressbar" :aria-valuenow="user.extern_statistic.winrate" aria-valuemin="0" aria-valuemax="100" :style="'width: '+user.extern_statistic.winrate+'%;'"></div>
						</div>
					</div>
					<ul class="flex-stat mt-5">
						<li>
							<span class="block">Wins</span>
							<span class="block weight-500 font-16 text-success">{{user.extern_statistic.win}}</span>
						</li>
						<li>
							<span class="block">Losses</span>
							<span class="block weight-500 font-16 text-danger">{{user.extern_statistic.loss}}</span>
						</li>
						<li v-for="stat_field in user.extern_statistic.important">
							<span class="block">{{stat_field.title}}</span>
							<span class="block weight-500 font-16 text-primary">
								{{stat_field.value}}
							</span>
						</li>
					</ul>

					<div class="col-lg-2 col-md-2 col-xs-12 mt-20" v-for="stat_field in user.extern_statistic.other">
						<span class="block">{{stat_field.title}}</span>
						<span class="block txt-dark weight-500 font-15">
							{{stat_field.value}}
						</span>
					</div>
				</div>
				<div v-else>
					<div class="cus-sat-stat weight-500 txt-warning text-center mt-5 font-13">
						<span class="counter-anim">No statistic loaded!</span>
					</div>
				</div>
			</div>
		</card>
	</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'

export default {
    metaInfo: {
        title: 'Qualification'
    },
    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck',
    }),
    data() {
        return {
        }
    },
    mounted() {    
    },
    methods: {
    },
}
</script>