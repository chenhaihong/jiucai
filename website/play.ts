import { createApp } from 'vue'
import Jiucai from '@dhxy2/jiucai'
import App from './play/index.vue'
import '../packages/theme-jiucai/src/index.scss'

import router from './play/router'

const app = createApp(App)
app.use(Jiucai)
app.use(router)

app.mount('#app')
