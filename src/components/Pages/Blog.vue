<template>
  <div class="blog">
    <my-title>Blog</my-title>
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
  name: "blog",
  components: {
    MyTitle,
    Paragraph
  }
};
</script>

<style lang="scss" scoped>
.blog {
  padding: 1rem 2rem;
}
</style>
