<template>
  <div class='wrapper'>
    <svg @click.prevent='fontFaces()'
    xmlns='http://www.w3.org/2000/svg'
    viewbox='0 0 750 450'
    width='750' height='450'>
      <text
      v-for='layer in layers'
      :key='layer'
      :style='strokeStyle + layerStyle(layer)'
      x='0' y='65'>
        {{text}}
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    text: {type: String, default: 'Hello world'},
    layersProp: {default: 4},
    strokeColor: {type: String},
    strokeOpacity: {}
  },

  computed: {
    layers() {
      return parseInt(this.layersProp)
    },

    strokeStyle() {
      return `stroke: ${this.hexToRGBA(this.strokeColor, this.strokeOpacity)};`
    },
  },

  watch: {
    layersProp() {
      this.fontFaces()
    }
  },

  methods: {
    layerStyle(layer) {
      return `font-family: 'modulo-${layer}';`
    },

    fontFaces() {
      const variants = 'Background Angled Horizontal Inline Outline Regular Rounded Vertical'.split(' ')
      let numbers = []
      let style = ''

      for(let i = 0; i < 21; i++){
        numbers[i] = `00${(i * 2) + 2}`.slice(-2)
      }

      for(let i = 1; i <= this.layers; i ++){
        let v  = variants[Math.floor(Math.random() * variants.length)]
        let n = numbers[Math.floor(Math.random() * numbers.length)]

        style +=  `
          @font-face {
            font-family: 'modulo-${i}';
            font-style: normal;
            font-weight: normal;
            src: url("/modulo/Modulo${n}-${v}.woff") format("woff");
          }`
        }
        document.querySelector('#modulo-style').innerHTML= style
    },

    hexToRGBA(hex, alpha) {
      const r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16)

      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    }
   },

  mounted() {
    this.fontFaces()
  }
}
</script>

<style lang="scss">
  .wrapper {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  text {
    fill: rgba(50, 50, 50, 0.3);
    font-size: 4em;
    mix-blend-mode: color-dodge;
    user-select: none;
    stroke-width: 1px;
  }
</style>
