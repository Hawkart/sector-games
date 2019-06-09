<template>
    <chat :channels="channels" v-if="channels!==null"></chat>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Chat from "../components/Chat";
    import axios from 'axios'

    export default {
        components: {
            Chat
        },
        metaInfo: {
            titleTemplate: 'Chat | %s'
        },
        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
            })
        },
        data() {
            return {
                channels: null,
            };
        },
        created() {
            this.getThreads();
        },
        methods : {
            getThreads: function()
            {
                axios.get('/api/users/'+this.user.id+'/threads').then((response) => {
                    this.$set(this, 'channels', response.data);
                });
            },
        }
    }
</script>