<template>
    <div class="row">
		<div class="col-lg-12">
			<div class="followers-wrap">
                <h2>Online</h2>
				<ul class="followers-list-wrap">
					<li class="follow-list">
						<div class="follo-body">
							<div class="follo-data">
								<img class="user-img img-circle"  src="dist/img/user.png" alt="user"/>
								<div class="user-data">
									<span class="name block capitalize-font">Clay Masse</span>
									<span class="time block truncate txt-grey">No one saves us but ourselves.</span>
								</div>
								<button class="btn btn-success pull-right btn-xs fixed-btn">Follow</button>
								<div class="clearfix"></div>
							</div>
							<div class="follo-data">
								<img class="user-img img-circle"  src="dist/img/user1.png" alt="user"/>
								<div class="user-data">
									<span class="name block capitalize-font">Evie Ono</span>
									<span class="time block truncate txt-grey">Unity is strength</span>
								</div>
								<button class="btn btn-success btn-outline pull-right btn-xs fixed-btn">following</button>
								<div class="clearfix"></div>
							</div>
							<div class="follo-data">
								<img class="user-img img-circle"  src="dist/img/user2.png" alt="user"/>
								<div class="user-data">
									<span class="name block capitalize-font">Madalyn Rascon</span>
									<span class="time block truncate txt-grey">Respect yourself if you would have others respect you.</span>
								</div>
								<button class="btn btn-success btn-outline pull-right btn-xs fixed-btn">following</button>
								<div class="clearfix"></div>
							</div>
							<div class="follo-data">
								<img class="user-img img-circle"  src="dist/img/user3.png" alt="user"/>
								<div class="user-data">
									<span class="name block capitalize-font">Mitsuko Heid</span>
									<span class="time block truncate txt-grey">I’m thankful.</span>
								</div>
								<button class="btn btn-success pull-right btn-xs fixed-btn">Follow</button>
								<div class="clearfix"></div>
							</div>
							<div class="follo-data">
								<img class="user-img img-circle"  src="dist/img/user.png" alt="user"/>
								<div class="user-data">
									<span class="name block capitalize-font">Ezequiel Merideth</span>
									<span class="time block truncate txt-grey">Patience is bitter.</span>
								</div>
								<button class="btn btn-success pull-right btn-xs fixed-btn">Follow</button>
								<div class="clearfix"></div>
							</div>
							<div class="follo-data">
								<img class="user-img img-circle"  src="dist/img/user1.png" alt="user"/>
								<div class="user-data">
									<span class="name block capitalize-font">Jonnie Metoyer</span>
									<span class="time block truncate txt-grey">Genius is eternal patience.</span>
								</div>
								<button class="btn btn-success btn-outline pull-right btn-xs fixed-btn">following</button>
								<div class="clearfix"></div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    metaInfo: {
        title: 'Friends online'
    },
    computed: mapGetters({
        
    }),
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>