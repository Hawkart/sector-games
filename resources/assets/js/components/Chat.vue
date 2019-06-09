<template>

    <div>

        <div class="chat-button-cont" v-bind:class="{'d-none':showChats}">
            <div class="chat-button-tooltip">Чаты...</div>
            <div class="chat-button nk-btn-color-main-1" @click.prevent="showChats=!showChats">
                <i class="fa fa-comments-o" aria-hidden="true"></i>
            </div>
        </div>

        <div class="row mt-20 chat-window" v-bind:class="{'d-none':!showChats}">
            <div class="col-md-12">

                <!--
                <div class="chat-cmplt-wrap chat-for-widgets-1">
                    <div class="chat-box-wrap" v-if="activeChannel==null">
                        <div>
                            <div class="panel-heading ma-0 pt-15">
                                <div class="goto-back">
                                    <a href="javascript:void(0)" class="inline-block txt-grey" title="Chats"></a>
                                    <span class="inline-block txt-dark truncate"></span>
                                    <div class="inline-block text-right txt-grey">
                                        <span class="fa fa-window-maximize chat-window-top-buttons" aria-hidden="true"></span>
                                        <span class="fa fa-times .chat-window-top-buttons" aria-hidden="true" @click.prevent="showChats=!showChats"></span>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="chatapp-nicescroll-bar">

                                <chat-channels :channels="channels"
                                               :active-channel="activeChannel"
                                               @channelChanged="onChannelChanged"></chat-channels>

                            </div>
                        </div>
                    </div>
                    <div class="recent-chat-box-wrap" v-if="activeChannel!=null">
                        <div class="recent-chat-wrap">
                            <div class="panel-heading ma-0 pt-15">
                                <div class="goto-back">
                                    <a href="javascript:void(0)" class="inline-block txt-grey" @click.prevent="onChannelChanged(null)" title="Chats">
                                        <i class="fa fa-weixin" aria-hidden="true"></i>
                                    </a>
                                    <span class="inline-block txt-dark truncate">{{activeChannel.subject}}</span>
                                    <div class="inline-block text-right txt-grey">
                                        <span class="fa fa-window-maximize chat-window-top-buttons" aria-hidden="true"></span>
                                        <span class="fa fa-times chat-window-top-buttons" aria-hidden="true" @click.prevent="showChats=!showChats"></span>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div>
                                <div class="chat-content">
                                    <chat-messages :messages="messages" :isTyping="isTyping"></chat-messages>
                                </div>

                                <chat-new-message :active-channel="activeChannel"
                                                  @messageAdded="onMessageAdded"></chat-new-message>
                            </div>
                        </div>
                    </div>
                </div>-->

                <div class="chat-cmplt-wrap chat-for-widgets-1">
                    <div class="recent-chat-box-wrap">
                        <div class="recent-chat-wrap">
                            <div class="panel-heading ma-0 pt-5">
                                <div class="goto-back">
                                    <template v-if="activeChannel!=null">
                                        <a href="javascript:void(0)" class="inline-block txt-grey" @click.prevent="onChannelChanged(null)" title="Chats">
                                            <i class="fa fa-weixin" aria-hidden="true" v-if="activeChannel!=null"></i>
                                        </a>
                                        <span class="inline-block txt-dark truncate">
                                            {{activeChannel.subject}}
                                        </span>
                                    </template>
                                    <template v-else>
                                        <span class="inline-block txt-dark truncate" style="width: 66%;">
                                            Список чатов
                                        </span>
                                    </template>
                                    <div class="inline-block text-right txt-grey">
                                        <span class="fa fa-window-maximize chat-window-top-buttons" aria-hidden="true"></span>
                                        <span class="fa fa-times chat-window-top-buttons" aria-hidden="true" @click.prevent="showChats=!showChats"></span>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div v-if="activeChannel!=null">
                                <div class="chat-content">
                                    <chat-messages :messages="messages" :isTyping="isTyping"></chat-messages>
                                </div>

                                <chat-new-message :active-channel="activeChannel"
                                                  @messageAdded="onMessageAdded"></chat-new-message>
                            </div>
                            <div v-else>

                                <chat-channels :channels="channels"
                                               :active-channel="activeChannel"
                                               @channelChanged="onChannelChanged"></chat-channels>

                            </div>
                        </div>
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
        props: ['channels'],
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
            this.fetchMessages();
            this.fetchParticipants();

            for (let channel of this.channels)
            {
                window.Echo.private("channel_"+channel.id.toString())
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
            }
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