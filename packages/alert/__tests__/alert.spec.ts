import { mount } from '@vue/test-utils'
import Alert from '../src/index.vue'

const MESSAGE = '生成脚本fork自element-plus'

describe('Alert.vue', () => {
  test('render test', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: MESSAGE,
      },
    })
    expect(wrapper.text()).toEqual(MESSAGE)
  })
})
