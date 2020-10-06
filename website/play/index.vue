<template>
  <div>
    <div class="nav">
      <div v-show="showNav">
        <h1>Examples playground</h1>
        <ul>
          <li v-for="item in list" :key="item.path">
            <router-link :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <router-link v-show="!showNav" to="/">
        <button>Home</button>
      </router-link>
    </div>

    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const arr = router.getRoutes().map(({ path, name }) => ({ path, name }))
    arr.shift()
    const list = ref(arr)

    const showNav = ref(true)
    const route = useRoute()
    watchEffect(() => {
      showNav.value = route.path === '/'
    })

    return { showNav, list }
  },
})
</script>

<style lang="scss" scoped>
.nav {
  text-align: center;

  ul {
    list-style: none;
  }

  li {
    margin: 6px;
    display: inline-block;
    color: #666;
    border: 1px solid #666;
    border-radius: 4px;

    & > a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }

    &:hover {
      color: white;
      background: olivedrab;
    }
  }
}
</style>