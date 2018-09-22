<template>
  <div class='wrapper'>
    <svg @click.prevent='fontFaces()'
    xmlns='http://www.w3.org/2000/svg'
    viewbox='0 0 750 450'
    width='750' height='450'>
      <text
      v-for='layer in layers'
      :key='layer'
      :style='layerStyle(layer)'
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
   layersProp: {default: 4}
 },

 computed: {
   layers() {
     return parseInt(this.layersProp)
   }
 },

 watch: {
   layersProp() {
     this.fontFaces()
   }
 },

 methods: {
   layerStyle(layer) {
     return `font-family: 'modulo-${layer}'`
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
    stroke: rgba(50, 50, 50, 1);
    mix-blend-mode: color-dodge;
    user-select: none;
  }
</style>
