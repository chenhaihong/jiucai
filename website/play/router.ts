import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import path from 'path'

import { defineComponent } from 'vue'

const routes = <RouteRecordRaw[]>[
  {
    path: '/',
    name: 'home',
    component: defineComponent({
      render() {
        return null
      },
    }),
  },
]

{
  // 注册examples下所有组件放到理由里
  const request = (require as any).context('../examples', false, /\.vue$/)
  request.keys().map((key: string) => {
    const one = request(key).default
    const name = path.join(key).split('.')[0]
    routes.push({
      path: `/${name}`,
      name,
      component: one,
    } as RouteRecordRaw)
  })
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
