import { App } from 'vue'
import Jiucai from './src/index.vue'
export default (app: App): void => {
  app.component(Jiucai.name, Jiucai)
}
