<template>
  <div id="app">
    <button class='toggle' @click.prevent='showControls = !showControls'>
      {{showControls ? 'Hide' : 'Show'}} controls
    </button>
    <form class='controls' :class='showControls ? "show" : "hide"'>
      <fieldset>
        <legend>Content</legend>
        <label>
          Layers
          <input type='range' v-model='layers' step='1' min='1' max='20' /> {{layers}}
        </label>

        <label>
          Text
          <textarea v-model='text' />
        </label>
        <button @click.prevent='$refs.modulo.shuffle()'>Randomise layers</button>
      </fieldset>

      <fieldset>
        <legend>Stroke</legend>
        <label>
          Colour
          <input type='color' v-model='strokeColor' />
        </label>

        <label>
          Opacity
          <input type='range' v-model='strokeOpacity' step='0.05' min='0' max='1' /> <span>{{strokeOpacity}}</span>
        </label>
      </fieldset>

      <fieldset>
        <legend>Fill</legend>
        <label>
          Colour
          <input type='color' v-model='fillColor' />
        </label>

        <label>
          Opacity
          <input type='range' v-model='fillOpacity' step='0.05' min='0' max='1' /> <span>{{fillOpacity}}</span>
        </label>
      </fieldset>
    </form>

    <Modulo
      ref='modulo'
      :layers-prop='layers'
      :text='text'
      :stroke-color='strokeColor'
      :stroke-opacity='strokeOpacity'
      :fill-color='fillColor'
      :fill-opacity='fillOpacity'
    />

    <p class='credits'>
      Click to regenerate.
      <a href='/labs'>Back to labs</a>.
      <a href='https://github.com/velvetkevorkian/modulo-study'>View source on Github</a>.
      Modulo typeface by <a href='https://www.shinjipons.com/modulo/'>Shinji Pons</a>.
    </p>

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
      strokeOpacity: 0.3,
      fillColor: '#323232',
      fillOpacity: 0.2,
      showControls: false
    }
  }
}
</script>

<style lang="scss">
  body {
    font-family: sans-serif;
    margin: 0;
  }

  fieldset {
    padding-bottom: 1em;
    padding-top: 1em;

    & + & {
      margin-top: 0.5em;
    }
  }

  label {
    display: block;
    margin-bottom: 1em;

    span {
      display: inline-block;
      margin-left: 0.5em;
      width: 2em;
    }
  }

  input {
    margin-left: 1em;
    vertical-align: middle;
  }

  textarea {
    display: block;
    width: 90%;
    height: 5em
  }

  form {
    background: rgba(255, 255, 255, 0.7);
    padding: 0.5em;
    position: absolute;
    top: 2.5em;
    transform: translateX(0);
    transition: 200ms transform;

    &.hide {
      transform: translateX(-100%);
    }
  }

  .toggle {
    position: absolute;
    top: 1em;
    left: 1em;
  }

  .credits {
    bottom: 0.5em;
    left: 1em;
    font-size: 0.8em;
    position: fixed;
    right: 1em;
    text-align: center;
  }
</style>
