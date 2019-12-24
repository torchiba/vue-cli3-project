<template>
  <div class="contact">
    <my-title>Contact</my-title>
    <paragraph>
      homehomehomehomehomehomehomehomehomehomehomehomehomehome
      homehomehomehomehomehomehomehomehomehomehomehomehomehome
      homehomehomehomehomehomehomehomehomehomehomehomehomehome
      homehomehomehomehomehomehomehomehomehomehomehomehomehome
      homehomehomehomehomehomehomehomehomehomehomehomehomehome
      homehomehomehomehomehomehomehomehomehomehomehomehomehome
      homehomehomehomehomehomehomehomehomehomehomehomehomehome
      homehomehomehomehomehomehomehomehomehomehomehomehomehome
    </paragraph>
  </div>
</template>

<script>
import MyTitle from "@/components/Atoms/MyTitle";
import Paragraph from "@/components/Atoms/Paragraph";

export default {
  name: "contact",
  components: {
    MyTitle,
    Paragraph
  }
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 1rem 2rem;
}
</style>
