<template>
    <div>
        <div>
            <span v-for="participant in participants" v-if="participants!=null">{{participant.nickname}}, </span>
        </div>
        <div class="chat-window match-chat">
            <div class="chat-cmplt-wrap chat-for-widgets-1">
                <div class="recent-chat-box-wrap">
                    <div class="recent-chat-wrap">

                        <div class="chat-content">
                            <chat-messages :messages="messages" :isTyping="isTyping"></chat-messages>
                        </div>

                        <chat-new-message :active-channel="activeChannel"
                                              @messageAdded="onMessageAdded"></chat-new-message>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import ChatMessages from "./ChatMessages";
    import ChatNewMessage from "./ChatNewMessage";
    import ChatChannels from "./ChatChannels";
    import ChatParticipants from "./ChatParticipants";

    export default {
        components: {
            ChatParticipants,
            ChatChannels,
            ChatMessages,
            ChatNewMessage
        },
        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
            })
        },
        props: ['channel'],
        data() {
            return {
                participants: [],
                socket: null,
                messages: null,
                activeChannel: null,
                isTyping: false,
                typingTimer: false,
                showChats: false
            };
        },
        created() {
            this.activeChannel = this.channel;
            this.fetchMessages();
            this.fetchParticipants();

            window.Echo.private("channel_"+this.channel.id.toString())
                .listen('MessageSent', data => {
                    this.messages.push(data.data);
                    this.isTyping = false;
                })
                .listenForWhisper('typing', (e) => {
                    this.isTyping = e;

                    if(this.typingTimer) clearTimeout(this.typingTimer);

                    this.typingTimer = setTimeout(() =>{
                        this.isTyping = false;
                    }, 2000)
                });
        },
        methods: {
            fetchMessages()
            {
                if(this.activeChannel!==null)
                {
                    axios.get('/api/channels/'+this.activeChannel.id+'/messages')
                        .then(({ data }) => {

                            var messages = data;
                            var _self = this;
                            messages.forEach(function(message)
                            {
                                message.created_at = _self.dateConvertUTC(message.created_at, -1);
                            });

                            this.messages = messages;
                        });
                }
            },
            fetchParticipants()
            {
                if(this.activeChannel!==null)
                {
                    axios.get('/api/channels/'+this.activeChannel.id+'/participants')
                        .then(({ data }) => {
                            this.participants = data;
                        });
                }
            },
            onChannelChanged(channel) {
                this.activeChannel = channel;

                this.fetchMessages();
                this.fetchParticipants();
            },
            onMessageAdded(message)
            {
                //this.messages.push(message);
            }
        },
    }
</script>