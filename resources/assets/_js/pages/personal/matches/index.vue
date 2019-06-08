<template>
<div>
	<div class="row">
		<div class="col-lg-12 col-sm-12">
			<card>
				<div class="tab-struct custom-tab-1">
					<ul class="nav nav-tabs">
						<li v-for="tab in tabs" class="nav-item">
							<router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
								{{ tab.name }}
							</router-link>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane fade active in">
							<transition name="fade" mode="out-in">
								<router-view></router-view>
							</transition>
						</div>
					</div>
				</div>
			</card>
		</div>
	</div>
	<!-- /Row -->
</div>
</template>

<script> 
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2'
    
    export default {
        metaInfo: {
            title: 'Trainings',
            titleTemplate: null
        },
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },
        data : function() {
            return {
                events: [],
                team: [],
                invitations: [],
                tabs: [
                    {
                        name: 'Calendar',
                        route: 'personal.matches.calendar'
                    },
                    {
                        name: 'Confirmed trainings',
                        route: 'personal.matches.confirmed'
                    },
                    {
                        name: 'Invites received',
                        route: 'personal.matches.invitations.received'
                    },
                    {
                        name: 'Invites sent',
                        route: 'personal.matches.invitations.sent'
                    }
                ],
            }
        }
    }
</script>