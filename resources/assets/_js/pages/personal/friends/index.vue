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
				</div>
			</card>
		</div>
	</div>
    
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
	<!-- /Row -->
</div>
</template>

<script>
export default {
    loading: false,
    
    data: () => ({
        tabs: [
            {
                name: 'Find friends',
                route: 'friends.search'
            },
            {
                name: 'My friends',
                route: 'friends.all'
            }
        ]
    })
}
</script>
<style>
.custom-tab-1 .nav-tabs > li > a.active {
    border-bottom: 3px solid #469408;
}
</style>
