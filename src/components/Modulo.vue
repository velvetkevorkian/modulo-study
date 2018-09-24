<template>
  <div class='wrapper'>
    <svg @click.prevent='$forceUpdate()'
    xmlns='http://www.w3.org/2000/svg'
    viewbox='0 0 750 450'
    width='750' height='450'>
      <text
      v-for='layer in layers'
      :key='layer'
      :style='svgStyle + randomFont()'
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
    strokeOpacity: {},
    fillColor: {type: String},
    fillOpacity: {}
  },

  computed: {
    layers() {
      return parseInt(this.layersProp)
    },

    svgStyle() {
      return `
        stroke: ${this.hexToRGBA(this.strokeColor, this.strokeOpacity)};
        fill: ${this.hexToRGBA(this.fillColor, this.fillOpacity)};
      `
    },
  },

  methods: {
    randomFont() {
      const variants = 'Background Angled Horizontal Inline Outline Regular Rounded Vertical'.split(' ')
      let numbers = []
      for(let i = 0; i < 21; i++){
        numbers[i] = `00${(i * 2) + 2}`.slice(-2)
      }
      const v  = variants[Math.floor(Math.random() * variants.length)]
      const n = numbers[Math.floor(Math.random() * numbers.length)]
      return `font-family: 'Modulo${n}-${v}'`
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
