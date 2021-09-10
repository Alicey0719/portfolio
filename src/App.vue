<template>
  <div id="app">
    <mainHeader/>
    <router-view/>
    <mainFooter/>
  </div>
</template>

<script>
import $ from 'jquery'
import mainHeader from './components/main_header'
import mainFooter from './components/main_footer'

export default {
  name: 'App',
  components: {
    mainHeader,
    mainFooter
  },
}

</script>

