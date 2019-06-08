<template>
    <div>
        <div class="row" v-if="player!==null && player.schedule!=null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <card title="Calendar">
                    <calendar-shedule :schedule="events" :blockSize="blockSize" editable="false"></calendar-shedule>     
                </card>	
    		</div>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'Schedule'
    },
    data() {
        return {
            success: false,
            error: false,
            response: null,
            player: null,
            events:[],
            blockSize: 1
        }
    },
    mounted() {
        Event.listen('playerDetailLoad', event => {
            this.player = event.player;
            this.blockSize = parseInt(this.player.game.cross_block);
            this.events = this.eventsConvertUTC(this.player.schedule, -1);
        });
        
        this.player = this.$parent.player;
        if(this.player!=null)
        {
            this.blockSize = parseInt(this.player.game.cross_block);
            this.events = this.eventsConvertUTC(this.player.schedule, -1);
        }
    }
}
</script>