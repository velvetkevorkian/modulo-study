import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Modulo from '@/components/Modulo.vue'
import sinon from 'sinon'

context('Modulo.vue', () => {
  let wrapper

  before(() => sinon.stub(Modulo.methods, 'handleResize'))

  beforeEach(() => wrapper = mount(Modulo))

  describe('computed', () => {
    it('xpos', () => expect(wrapper.vm.xpos).to.eq(500))

    it('ypos', () => expect(wrapper.vm.ypos).to.eq(184))

    it('lines', () => {
      wrapper.setProps({text: 'Hello\nworld'})
      expect(wrapper.vm.lines).to.deep.eq(['Hello', 'world'])
    })

    it('layerCount', () => expect(wrapper.vm.layerCount).to.eq(4))

    it('viewbox', () => expect(wrapper.vm.viewbox).to.eq('0 0 1000 500'))

    it('svgStyle', () => {
      const result = `
        stroke: rgba(102, 102, 102, 0.5);
        fill: rgba(50, 50, 50, 0.3);
        font-size: 66px;
      `
      expect(wrapper.vm.svgStyle).to.eq(result)
    })

    it('fontSize', () => expect(wrapper.vm.fontSize).to.eq(66))
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
