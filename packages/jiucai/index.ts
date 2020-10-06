import type { App } from 'vue'
import JcAlert from '@dhxy2/alert'

export { JcAlert }

const install = (app: App) => {
  JcAlert(app)
}

export default { install }
