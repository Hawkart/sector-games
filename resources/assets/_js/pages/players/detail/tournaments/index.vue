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
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2'

    export default {
        metaInfo: {
            title: 'Tournaments',
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
                tabs: [
                    {
                        name: 'Tournaments',
                        route: 'player.tournaments'
                    },
                    {
                        name: 'Matches',
                        route: 'player.tournaments.matches'
                    }
                ],
            }
        }
    }
</script>