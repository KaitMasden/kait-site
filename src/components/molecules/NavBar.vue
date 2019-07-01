<template>
  <nav> 
    <router-link to="/">Home</router-link>   | 
    <router-link to="/about">About</router-link> | 
    <router-link to="/skills">Skills</router-link> | 
    <router-link to="/experience">Experience</router-link> | 
    <router-link to="/portfolio">Portfolio</router-link> | 
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style lang="scss" scoped>
  @import "../../styles/scss/variables";
  nav {
    padding: 30px;
    background-color: $darkColor;
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
        color: $darkColor;
      }
    }
  }
</style>

<script>
export default {
    name: "NavBar"
};
</script>
