import { createApp } from 'vue'
import Jiucai from '@dhxy2/jiucai'
import App from './src/index.vue'
import '../packages/theme-jiucai/src/index.scss'
const app = createApp(App)
app.use(Jiucai)
app.mount('#app')
