import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Modulo from '@/components/Modulo.vue'

context('Modulo.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Modulo)
  })

  describe('computed', () => {
    it('layersProp', () => {
      expect(wrapper.vm.layerCount).to.eq(4)
    })

    it('svgStyle', () => {
      const result = `
        stroke: rgba(102, 102, 102, 0.5);
        fill: rgba(50, 50, 50, 0.3);
      `
      expect(wrapper.vm.svgStyle).to.eq(result)
    })
  })

  describe('methods', () => {
    describe('layersArray', () => {
      it('generates an array of all combinations', () => {
        expect(wrapper.vm.layers.length).to.eq(168)
      })

      it('creates the right format', () => {
        expect(wrapper.vm.layers).to.include(`font-family: 'Modulo02-Angled'`)
        expect(wrapper.vm.layers).to.include(`font-family: 'Modulo40-Regular'`)
      })
    })

    describe('hexToRGBA', () => {
      it('converts hex and alpha to rgba', () => {
        const result = wrapper.vm.hexToRGBA('#ffffff', 1)
        expect(result).to.eq('rgba(255, 255, 255, 1)')
      })
    })
  })
})
