<template>
  <section>
    <div class="content-container">
      <img src="/images/archie.jpg" />
      <div>
        <h1>Archie Masden</h1>
        <p>Where is my slave? I'm getting hungry leave hair on owner's clothes and man running from cops stops to pet cats, goes to jail attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently. Cats secretly make all the worlds muffins. Pretend you want to go out but then don't eat from</p>
        <div class="social-media-container">Social media</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../styles/scss/variables";

section {
  width: 100%;
  height: 400px;
  display: flex;
  margin: 4rem 0; 
  .content-container {
    margin: 1rem 30rem 20rem 30rem;
    border-left: 15rem solid $primaryColor;
    height: calc(100% - 2rem);
    padding: 0rem 5rem 0rem 5rem;
    letter-spacing: 4px;
    line-height: 1.6rem;
    display: flex;
    align-items: center;
    text-align: right;
  }
  img {
    margin-left: -205px;
    height: 250px;
    border-radius: 50%;
  }
  p,
  h1,
  .social-media-container {
    padding-left: 25px; 
  }
  h1 {
    color: $darkColor;
    font-weight:bold;  
  }
}
</style>

<script>
export default {
  name: "ProfileCard"
};
</script>
