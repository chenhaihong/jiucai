<template>
  <teleport to="body">
    <div v-if="show" class="jc-alert" :class="computedClass">
      <section v-if="showHeader" class="jc-alert__header">
        <slot v-if="$slots.header" name="header"></slot>
        <div v-else-if="title">{{title}}</div>
      </section>
      <section class="jc-alert__body">
        <slot></slot>
      </section>
      <section class="jc-alert__footer">
        <button @click="hide">Hide</button>
      </section>
    </div>
  </teleport>
</template>
<script lang='ts'>
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'JcAlert',
  props: {
    show: { type: Boolean, default: false },
    type: { type: String, default: 'success' },
    showHeader: { type: Boolean, default: true },
    title: { type: String, default: '' },
  },
  setup(props, { emit }) {
    const computedClass = computed(() => {
      return `jc-alert--${props.type}`
    })
    const hide = () => {
      emit('update:show', false)
    }
    return { computedClass, hide }
  },
})
</script>
<style scoped>
</style>
