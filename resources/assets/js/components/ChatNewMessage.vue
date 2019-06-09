<template>
    <div class="input-group">
        <img :src="getImageLink(user.avatar)" class="rounded-circle profile-photo mr-1 w-20">
        <input type="text" id="input_msg_send_chatapp" class="input-msg-send form-control" placeholder="Напечатайте что-нибудь..." v-model="message"
               @keyup.enter.prevent="sendMessage" @keydown="actionUser">
        <span class="input-group-btn">
            <button type="button" class="btn btn-default" @click.prevent="sendMessage"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </span>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'

    export default {
        props: ['activeChannel'],

        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
            })
        },

        data() {
            return {
                message: '',
            };
        },

        methods: {
            sendMessage()
            {
                axios.post('/api/channels/'+this.activeChannel.id+'/messages', {message: this.message}).then((response) => {
                    this.message = '';

                    this.$emit('messageAdded', response.data);
                });
            },
            actionUser()
            {
                window.Echo.private("channel_"+this.activeChannel.id.toString())
                    .whisper('typing', {
                       'user' :  this.user
                    });
            }
        }
    }
</script>