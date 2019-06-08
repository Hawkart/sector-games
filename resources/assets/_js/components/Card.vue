<template>
    <div>
        <h3 class="nk-decorated-h-2" v-if="title"><span>{{ title }}</span></h3>
        <div class="nk-gap" v-if="title"></div>
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            default: ''
        },
        pa_0: {
            type: String,
            default: 'false'
        }
    }
}
</script>