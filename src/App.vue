<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
@import "./styles/scss/variables";

html,
body {
  font-family: "Roboto Condensed", sans-serif;
  background-color: #f4f4f4;
  margin: 0px;
}

#app {
  font-family: "Roboto Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkColor;
}
</style>

<script>
import NavBar from "./components/molecules/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>
