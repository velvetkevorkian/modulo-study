<template>
  <div class='wrapper' ref='wrapper'>
    <svg @click.prevent='layers = layersArray()'
    xmlns='http://www.w3.org/2000/svg'
    :viewbox='viewbox'
    >
      <text
      v-for='layer in layerCount'
      :key='layer'
      :style='svgStyle + layers[layer]'
      :x='width/2' :y='height/2 + 40'>
        {{text}}
      </text>
    </svg>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  data: function() {
    return {
      layers: this.layersArray(),
      width: 1000,
      height: 500
    }
  },

  props: {
    text: {type: String, default: 'Hello world'},
    layersProp: {default: '4'},
    strokeColor: {type: String, default: '#666666'},
    strokeOpacity: {default: 0.5},
    fillColor: {type: String, default: '#323232'},
    fillOpacity: {default: 0.3}
  },

  computed: {
    layerCount() {
      return parseInt(this.layersProp)
    },

    viewbox() {
      return `0 0 ${this.width} ${this.height}`
    },

    svgStyle() {
      return `
        stroke: ${this.hexToRGBA(this.strokeColor, this.strokeOpacity)};
        fill: ${this.hexToRGBA(this.fillColor, this.fillOpacity)};
        ${this.fontSize}
      `
    },

    fontSize() {
      const size = Math.floor(this.width / (this.text.length + 4))
      return `font-size: ${size}px;`
    }
  },

  mounted() {
    window.addEventListener('resize', debounce(this.handleResize, 250))
    this.handleResize()
  },

  methods: {
    handleResize() {
      this.width = this.$refs.wrapper.offsetWidth
      this.height = this.$refs.wrapper.offsetHeight
    },

    layersArray() {
      let layers = []
      let numbers = []
      for(let i = 0; i < 21; i++){
        numbers[i] = `00${(i * 2) + 2}`.slice(-2)
      }

      'Background Angled Horizontal Inline Outline Regular Rounded Vertical'.split(' ').forEach(v => {
        numbers.forEach(n => {
          layers.push(`font-family: 'Modulo${n}-${v}'`)
        })
      })
      // TODO: add entropy
      layers.sort(() => 0.5 - Math.random())
      layers.sort(() => 1)
      layers.sort(() => 0.5 - Math.random())
      return layers
    },

    hexToRGBA(hex, alpha) {
      const r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16)

      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    }
   }
}
</script>

<style lang="scss">
  .wrapper {
    display: flex;
    height: 100vh;
    width: 95%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }

  svg {
    overflow: visible;
    width: 100%;
    height: 100%;
  }

  text {
    font-size: 4em;
    user-select: none;
    stroke-width: 1px;
    text-anchor: middle;
  }

  $variants: Background, Angled, Horizontal, Inline, Outline, Regular, Rounded, Vertical;
  $numbers: '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40', '42';

  @each $n in $numbers {
    @each $v in $variants {
      @font-face {
        font-family: "Modulo#{$n}-#{$v}";
        font-style: normal;
        font-weight: normal;
        font-display: block;
        src: url("./../assets/modulo/Modulo#{$n}-#{$v}.woff") format("woff");
      }
    }
  }
</style>
