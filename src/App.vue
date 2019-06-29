<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
html, body {
  font-family: 'Roboto Condensed', sans-serif;
  background-color: #F4F4F4;
}

#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #373737;
}
#nav {
  padding: 30px;
  background-color: #373737;
  color: #C0B283;
  word-spacing: 30px;
  a {
    font-weight: bold;
    text-decoration: none; 
    text-transform: uppercase;
    color: #C0B283;
    &.router-link-exact-active {
      padding:10px;
      background-color:#C0B283;
      color: #373737;
    }
  }
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
