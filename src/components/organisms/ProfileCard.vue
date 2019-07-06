<template>
  <section>
    <div class="content-container">
      <img src="/images/archie.jpg" />
      <div>
        <h1>Archie Masden-Paredes</h1>
        <p>Hi my name is Archie! I am a Ragdoll kitten of 1 years old! I am a THICC BOI. You can't tell from this pic because it is from my younger years when I was quite smol. i am also a giant brat but i am so cute it's totally okay. Things I like? being a brat, zoomies, standing on mama, and pooping.</p>
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
