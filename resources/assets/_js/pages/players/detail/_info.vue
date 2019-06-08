<template>
<div>
    <div class="row" v-if="player!==null">
    
        <div class="col-lg-4 col-md-6 col-xs-12">
            <card>
                <h6>Invite friends:</h6>
                <social-sharing :title="'Detail page of '+player.nickname+' on Sparta.games'" 
                    description = "Lead your team into eSports Pro League"
                inline-template>
                
                    <div class="button-list mb-5">
                        <network network="facebook">
                            <button class="btn btn-facebook btn-icon-anim btn-square"><i class="fa fa-facebook"></i></button>
                        </network>
                        <network network="twitter">
                            <button class="btn btn-twitter btn-icon-anim btn-square"><i class="fa fa-twitter"></i></button>
                        </network>
                        <network network="googleplus">
                            <button class="btn btn-googleplus btn-icon-anim btn-square"><i class="fa fa-google-plus"></i></button>
                        </network>
                        <network network="pinterest">
                            <button class="btn btn-pinterest btn-icon-anim btn-square"><i class="fa fa-pinterest"></i></button>
                        </network>
                        <network network="vk">
                            <button class="btn btn-instagram btn-icon-anim btn-square"><i class="fa fa-vk"></i></button>
                        </network>
                    </div>
                </social-sharing>
            </card>
        </div>
        
        <div class="col-lg-4 col-md-6 col-xs-12">
            <card>
                <h6>Send invitation by email:</h6>
                <div class="input-group mt-10 mb-10">
                    <input type="text" :value="copyData" class="form-control" disabled>
                    <span class="input-group-btn">
                        <button v-clipboard="copyData" class="btn btn-primary"><i class="fa fa-files-o" aria-hidden="true"></i></button>
                    </span>
                </div>
            </card>
        </div>
        
        <div class="col-lg-4 col-md-6 col-xs-12">
            <card>
                <h6>Let's be a friends:</h6>
                <div class="input-group mb-10 mt-10">
                    <button @click="beFriend" class="btn btn-primary"><i class="zmdi zmdi-account-add"></i> Send request</button>
                </div>
            </card>
        </div>
    
        <div class="col-lg-12 col-md-12 col-xs-12" v-if="player.extern_statistic!=null">
            <card>
                <div class="sm-data-box-1">
					<span class="uppercase-font weight-500 font-14 block text-center txt-dark">Dota2 statistics</span>	
					<div class="cus-sat-stat weight-500 txt-success text-center mt-5">
						<span class="counter-anim">{{player.extern_statistic.winrate}}</span><span>%</span>
					</div>
					<div class="progress-anim mt-20">
						<div class="progress">
							<div class="progress-bar progress-bar-success wow animated progress-animated" role="progressbar" :aria-valuenow="player.extern_statistic.winrate" aria-valuemin="0" aria-valuemax="100" :style="'width: '+player.extern_statistic.winrate+'%;'"></div>
						</div>
					</div>
					<ul class="flex-stat mt-5">
						<li>
							<span class="block">Wins</span>
							<span class="block weight-500 font-16 text-success">{{player.extern_statistic.win}}</span>
						</li>
						<li>
							<span class="block">Losses</span>
							<span class="block weight-500 font-16 text-danger">{{player.extern_statistic.loss}}</span>
						</li>
						<li v-for="stat_field in player.extern_statistic.important">
							<span class="block">{{stat_field.title}}</span>
							<span class="block weight-500 font-16 text-primary">
								{{stat_field.value}}
							</span>
						</li>
					</ul>
                    
                    <div class="col-lg-2 col-md-2 col-xs-12 mt-20" v-for="stat_field in player.extern_statistic.other">
						<span class="block">{{stat_field.title}}</span>
						<span class="block txt-dark weight-500 font-15">
							{{stat_field.value}}
						</span>
					</div>
				</div>
			</card>
        </div>
    
    	<!--<div class="col-lg-12 col-md-12 col-xs-12">
        
            <div class="panel panel-default card-view">
				<div class="panel-wrapper collapse in">
                    
                    <div class="row">
                        <div class="col-md-12 col-xs-12 mb-20" v-if="player.description!=null">
                            <p>{{player.description}}</p>
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <div class="panel-body">
        						<dl>
                                  <dt class="mb-10">Registered at</dt>
        						  <dd class="mb-10">{{ moment(player.created_at, "YYYY-MM-DD h:mm:ss").fromNow()}}</dd> 
                                  <dt class="mb-10">Name</dt>
        						  <dd class="mb-10">
                                    {{player.last_name}} {{player.name}} {{player.second_name}}
                                  </dd>
                                  <dt class="mb-10">Nickname</dt>
        						  <dd class="mb-10">
                                    {{player.nickname}}
                                  </dd>
        						</dl>
        					</div>
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <div class="panel-body">
        						<dl>
                                  <dt class="mb-10">Streams</dt>
        						  <dd class="mb-10">
                                    <div v-for="stream in player.streams" v-if="player.streams!=null"><a :href="stream.value">{{stream.value}}</a></div>
                                    <span v-else>none</span>
                                  </dd>
        						</dl>
        					</div>
                        </div>
                    </div>
				</div>
			</div>
        </div>-->
    </div>
</div>
</template>


<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'
import VueClipboards from 'vue-clipboards'

export default {
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })     
    },
    data() {
        return {
            success: false,
            error: false,
            player: null,
            response: null,
            win_loss: [],
            copyData: window.location.href//this.$route.fullPath
        }
    },
    mounted() {
        
        if(this.player===null)
        {
            Event.listen('playerDetailLoad', event => {
                this.player = event.player;
            });
            
            this.player = this.$parent.player;                
        }
    },
    methods: {       
        beFriend: function()
        {
            if(!this.authenticated)
            {
                this.$router.push({ name: 'auth.login' });
                return false;
            }
                
            if(this.user.id==this.player.id)
            {
                swal({
                    type: 'error',
                    html: "You can't send request to yourself."
                })
                return false;
            }
            
            axios.post('/api/friends/befriend',
            {
                id: this.player.id,
            }).then(response => {
                
                if(response.data.error!==undefined)
                {
                    swal({
                        type: 'error',
                        html: response.data.error
                    })
                }else{
                    swal({
                        type: 'success',
                        html: 'We sent your request!'
                    })
                }
            });
        }
    },
}
</script>