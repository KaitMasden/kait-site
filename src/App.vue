<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  @import url('.\styles\scss\variables.scss');

  html, body {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #F4F4F4;
    margin:0px;
  }

  #app {
    font-family: 'Roboto Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #373737;
  }
  
</style>

<script>
import NavBar from './components/molecules/NavBar'; 

export default {
  name: 'app',
  components: {
    'NavBar': NavBar
  }
}
</script>
