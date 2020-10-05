import { mount } from '@vue/test-utils'
import Jiucai from '../src/index.vue'

const MESSAGE = '生成脚本fork自element-plus'

describe('Jiucai.vue', () => {
  test('render test', () => {
    const wrapper = mount(Jiucai, {
      slots: {
        default: MESSAGE,
      },
    })
    expect(wrapper.text()).toEqual(MESSAGE)
  })
})
