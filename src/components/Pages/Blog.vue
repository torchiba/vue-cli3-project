<template>
  <section class="blog" >
    <header-title>Blog</header-title>
    <main-content>
      <my-container>
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
      </my-container>
    </main-content>
  </section>
</template>

<script>
import HeaderTitle from "@/components/Molecules/HeaderTitle";
import Paragraph from "@/components/Atoms/Paragraph";
import MyContainer from "@/components/Atoms/MyContainer";
import MainContent from "@/components/Atoms/MainContent";

export default {
  name: "blog",
  components: {
    HeaderTitle,
    Paragraph,
    MyContainer,
    MainContent
  },
  data() {
    return {
      // items: items
      // items: [
      //   {no:1, path: 'https://dummyimage.com/3000x3000/fcc/000.png&text=Uploaded1'},
      //   {no:2, path: 'https://dummyimage.com/3000x3000/fcc/000.png&text=Uploaded2'},
      //   {no:3, path: 'https://dummyimage.com/3000x3000/fcc/000.png&text=Uploaded3'},
      //   {no:4, path: 'https://dummyimage.com/3000x3000/fcc/000.png&text=Uploaded4'}
      // ],
      picsum: null
    }
  }
};
</script>

<style lang="scss" scoped>
.blog {
  .imgList {
    display: flex;
    flex-flow: row wrap;
    li {
      flex: 1;
      // padding: 8px;
    }
    img {
      max-width: 100%;
      width: 100%;
      // min-width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }
  // padding: 1rem 2rem;
}
</style>
