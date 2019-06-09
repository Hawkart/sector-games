<template>
    <ul class="chatapp-chat-nicescroll-bar pt-10" ref="message-window">
        <li :class="message.user.id==user.id ? 'self' : 'friend'" v-for="message in messages"
            :key="message.id"
        >
            <div v-if="message.user.id==user.id" class="self-msg-wrap">
                <div class="msg block pull-right"> {{ message.body }}
                    <div class="msg-per-detail text-right">
                        <span class="msg-time txt-grey">{{ message.created_at }}</span>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>

            <div v-else class="friend-msg-wrap">
                <img class="rounded-circle profile-photo w-20 block pull-left" :src="getImageLink(message.user.avatar)" :title="message.user.nickname" :alt="message.user.nickname"/>
                <div class="msg pull-left">
                    {{ message.body }}
                    <div class="msg-per-detail  text-right">
                        <span class="msg-time txt-grey">{{ message.created_at }}</span>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </li>
        <li v-if="isTyping && isTyping.user.id!=user.id" class="friend">
            <div class="friend-msg-wrap">
                <img class="rounded-circle profile-photo w-20 block pull-left" :src="getImageLink(isTyping.user.avatar)" :title="isTyping.user.nickname" :alt="isTyping.user.nickname"/>
                <div class="msg pull-left">
                    <div class="msg-per-detail text-right">
                        <span class="msg-time txt-grey">набирает сообщение...</span>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </li>
    </ul>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        props: ['messages', 'isTyping'],
        mounted() {
            this.scrollToBottom();
        },
        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
            })
        },
        watch: {
            messages() {
                this.scrollToBottom();
            }
        },

        methods: {
            scrollToBottom() {
                this.$nextTick(() => {
                    this.$refs['message-window'].scrollTop = this.$refs['message-window'].scrollHeight;
                });
            }
        },
    }
</script>