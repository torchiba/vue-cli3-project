<template>
  <div class="page3">
    <my-title>Page3</my-title>
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
  name: "page3",
  components: {
    MyTitle,
    Paragraph
  }
};
</script>

<style scoped>
.page3 {
  padding: 1rem 2rem;
}
</style>
