<template>
  <div id="app">
    <mainHeader/>
    <router-view/>
  </div>
</template>

<script>
import $ from 'jquery'
import mainHeader from './components/main_header'

export default {
  name: 'App',
  components: {
    mainHeader
  },
}

</script>

<style>
@import 'css/main.css';
</style>
