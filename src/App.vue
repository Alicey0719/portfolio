<template>
  <div id="app">
    <mainHeader/>
    <img src="./assets/logo.png">
    <router-view/>
    <button class="btn btn-primary">test</button>
  </div>
</template>

<script>
import mainHeader from './components/main_header'

export default {
  name: 'App',
  components: {
    mainHeader
  },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
