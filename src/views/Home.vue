<template>
  <div>
    <ProfileCard />
    <SkillsCard />
    <ExperienceCards />
  </div>
</template>

<script>
import ProfileCard from "../components/organisms/ProfileCard";
import ExperienceCards from "../components/organisms/ExperienceCards";
import SkillsCard from "../components/organisms/SkillsCard";

export default {
  name: "home",
  components: {
    ProfileCard,
    ExperienceCards,
    SkillsCard
  }
};
</script>
