<template>
  <div class='wrapper'>
    <svg @click.prevent='layers = layersArray()'
    xmlns='http://www.w3.org/2000/svg'
    viewbox='0 0 750 450'
    width='750' height='450'>
      <text
      v-for='layer in layerCount'
      :key='layer'
      :style='svgStyle + layers[layer]'
      x='0' y='65'>
        {{text}}
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      layers: this.layersArray()
    }
  },

  props: {
    text: {type: String, default: 'Hello world'},
    layersProp: {default: 4},
    strokeColor: {type: String, default: '#666666'},
    strokeOpacity: {default: 0.5},
    fillColor: {type: String, default: '#323232'},
    fillOpacity: {default: 0.3}
  },

  computed: {
    layerCount() {
      return parseInt(this.layersProp)
    },

    svgStyle() {
      return `
        stroke: ${this.hexToRGBA(this.strokeColor, this.strokeOpacity)};
        fill: ${this.hexToRGBA(this.fillColor, this.fillOpacity)};
      `
    }
  },

  methods: {
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
    align-items: center;
    justify-content: center;
  }

  text {
    font-size: 4em;
    mix-blend-mode: color-dodge;
    user-select: none;
    stroke-width: 1px;
  }

  $variants: Background, Angled, Horizontal, Inline, Outline, Regular, Rounded, Vertical;
  $numbers: '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40', '42';

  @each $n in $numbers {
    @each $v in $variants {
      @font-face {
        font-family: "Modulo#{$n}-#{$v}";
        font-style: normal;
        font-weight: normal;
        src: url("./../assets/modulo/Modulo#{$n}-#{$v}.woff") format("woff");
      }
    }
  }
</style>
