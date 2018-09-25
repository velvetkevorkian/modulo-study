<template>
  <div id="app">
    <form class='controls'>
      <label>
        Layers
        <input type='range' v-model='layers' step='1' min='1' max='20' /> {{layers}}
      </label>

      <label>
        Text
        <input type='text' v-model='text' />
      </label>

      <label>
        Stroke colour
        <input type='color' v-model='strokeColor' />
      </label>

      <label>
        Stroke opacity
        <input type='range' v-model='strokeOpacity' step='0.05' min='0' max='1' /> {{strokeOpacity}}
      </label>

      <label>
        Fill colour
        <input type='color' v-model='fillColor' />
      </label>

      <label>
        Fill opacity
        <input type='range' v-model='fillOpacity' step='0.05' min='0' max='1' /> {{fillOpacity}}
      </label>
    </form>

    <Modulo
      :layers-prop='layers'
      :text='text'
      :stroke-color='strokeColor'
      :stroke-opacity='strokeOpacity'
      :fill-color='fillColor'
      :fill-opacity='fillOpacity'
    />

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
      text: 'Hello world',
      strokeColor: '#666666',
      strokeOpacity: 0.5,
      fillColor: '#323232',
      fillOpacity: 0.3
    }
  }
}
</script>

<style lang="scss">
  label {
    display: block;
  }
</style>
