<template>
    <ul class="chat-list-wrap">
        <li class="chat-list">
            <div class="chat-body">

                <a href="javascript:void(0)" v-for="channel in channels" v-if="channels!=null"
                    :key="channel.id"
                    v-text=""
                    class="channel"
                    :class="{ 'active': activeChannel!==null && channel.id == activeChannel.id }"
                    @click="setChannel(channel)"
                >
                    <div class="chat-data">
                        <i class="fa fa-weixin user-img img-circle" aria-hidden="true"></i>
                        <div class="user-data">
                            <span class="name block capitalize-font">{{channel.subject}}</span>
                            <span class="time block truncate text-white" :title="channel.participantsString">{{channel.participantsString}}</span>
                        </div>
                        <div class="pull-right pa-t-13" v-if="channel.userUnreadMessagesCount>0"><span class="label label-warning ml-10">{{channel.userUnreadMessagesCount}}</span></div>
                        <div class="clearfix"></div>
                    </div>
                </a>

                <div v-else>
                    У вас нет активных чатов.
                </div>

            </div>
        </li>
    </ul>

</template>

<script>
    export default {
        props: ['channels', 'activeChannel'],
        methods: {
            setChannel(channel) {
                this.$emit('channelChanged', channel);
            }
        }
    }
</script>