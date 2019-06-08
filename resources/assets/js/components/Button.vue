<template>
  <button :type="nativeType" :disabled="loading" :class="{
    [`nk-btn-color-${type}`]: true,
    'btn-block': block,
    'btn-lg': large,
    'btn-loading': loading
  }" class="nk-btn nk-btn-rounded">
    <fa :icon="['fab', 'spinner']" v-if="loading"/>
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    type: {
      type: String,
      default: 'main-1'
    },

    nativeType: {
      type: String,
      default: 'submit'
    },

    loading: {
      type: Boolean,
      default: false
    },

    block: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>
