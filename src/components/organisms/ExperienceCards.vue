<template>
  <section>
    <ExperienceCard
      title="UPS"
      category="Work"
      side="left"
      details="Eat the rubberband sit on human. All of a sudden cat goes crazy. Do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life soft kitty warm kitty little ball of furr. Purrrrrr human give me attention meow yet al"
    />
    <ExperienceCard
      title="University Of Louisville"
      category="Education"
      side="right"
      details="Allways wanting food hell is other people. Refuse to leave cardboard box lick yarn hanging out of own butt i like big cats and i can not lie. Pretend you want to go out but then don't poop in the plant pot why must they do that, and kick up litter yet hiss and stare at nothing then run suddenly away."
    />
  </section>
</template> 

<style lang="scss" scoped>
section {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

<script>
import ExperienceCard from "../molecules/ExperienceCard";

export default {
  name: "ExperienceCards",
  components: {
    ExperienceCard
  }
};
</script>
