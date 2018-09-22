<template>
  <div id="app">
    <form class='controls'>
      <label>
        Layers
        <input type='range' v-model='layers' step='1' min='1' max='10' /> {{layers}}
      </label>
      <label>
        Text
        <input type='text' v-model='text' />
      </label>
    </form>
    <Modulo :layersProp='layers' :text='text'/>
  </div>
</template>

<script>
import Modulo from './components/Modulo.vue'

export default {
  name: 'app',
  components: {
    Modulo
  },
  data: function() {
    return {
      layers: 4,
      text: 'Hello world'
    }
  }
}
</script>

<style lang="scss">
  label {
    display: block;
  }
</style>
