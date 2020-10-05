<template>
  <div id="app">
    <AdvIndex/>
  </div>
</template>

<script>
import AdvIndex from './components/AdvIndex.vue'

export default {
  name: 'App',
  components: {
    AdvIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
