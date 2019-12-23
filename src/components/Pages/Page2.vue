<template>
  <div class="page2">
    <my-title>Page2</my-title>
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
  name: "page2",
  components: {
    MyTitle,
    Paragraph
  }
};
</script>

<style lang="scss" scoped>
.page2 {
  padding: 1rem 2rem;
}
</style>
