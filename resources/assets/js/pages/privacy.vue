<template>
    <div>
        <h3 class="nk-decorated-h-2">{{$t('privacy')}}</h3>
    </div>
</template>


<script>
    import { mapGetters } from 'vuex'

    export default {
        layout: 'default',

        metaInfo () {
            return { title: this.$t('privacy') }
        },

        computed:{
            ...mapGetters({
                user: 'auth/user',
                locale: 'lang/locale',
            })
        },
    }
</script>