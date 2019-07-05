<template>
  <div class="left" v-if="side==='left'">
    <h2>{{title}}</h2>
    <h3>{{category}}</h3>
    <p>{{details}}</p>
  </div>
  <div class="right" v-else>
    <h2>{{title}}</h2>
    <h3>{{category}}</h3>
    <p>{{details}}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/scss/variables";

div {
  height: 100%;
  width: 350px;
  &.left {
    border-right: 10px solid $primaryColor;
    margin-right: 40rem;
  }
  &.right {
    border-left: 10px solid $primaryColor;
    margin-left: 40rem;
  }
}
</style>

<script>
export default {
  name: "ExperienceCard",
  props: {
    category: { type: String },
    title: { type: String },
    details: { type: String },
    side: { type: String }
  }
};
</script>
