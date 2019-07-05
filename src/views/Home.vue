<template>
  <div>
    <ProfileCard />
    <ExperienceCards />
  </div>
</template>

<script>
import ProfileCard from "../components/organisms/ProfileCard";
import ExperienceCards from "../components/organisms/ExperienceCards";

export default {
  name: "home",
  components: {
    ProfileCard,
    ExperienceCards
  }
};
</script>
