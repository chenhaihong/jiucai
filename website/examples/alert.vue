<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <JcAlert v-model:show="show" title="hello world">
      <template v-slot:header>
        <h1>hello JcAlert</h1>
      </template>

      <p>lalalalalallalalalalalal</p>
      <p>lalalalalallalalalalalal</p>
      <p>lalalalalallalalalalalal</p>
      <p>lalalalalallalalalalalal</p>
    </JcAlert>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'ExamplesOfJcAlert',
  setup() {
    const show = ref(true)
    return { show }
  },
})
</script>

<style lang="scss" scoped>
</style>