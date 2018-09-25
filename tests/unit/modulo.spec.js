import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Modulo from '@/components/Modulo.vue'

context.only('Modulo.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Modulo)
  })

  describe('data.layers', () => {
    it('generates an array of all combinations', () => {
      expect(wrapper.vm.layers.length).to.eq(168)
    })

    it('creates the right format', () => {
      expect(wrapper.vm.layers).to.include(`font-family: 'Modulo02-Angled'`)
      expect(wrapper.vm.layers).to.include(`font-family: 'Modulo40-Regular'`)
    })
  })

  it('hexToRGBA()', () => {
    const result = wrapper.vm.hexToRGBA('#ffffff', 1)
    expect(result).to.eq('rgba(255, 255, 255, 1)')
  })
})
