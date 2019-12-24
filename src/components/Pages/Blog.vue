<template>
  <main class="blog" >
    <header-title>Blog</header-title>
    <my-container>
      <ul class="imgList">
        <li v-for="img in items" :key="img.no">
          <img v-lazy="img.path" >
        </li>
      </ul>    
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
    
  </main>
</template>

<script>
import HeaderTitle from "@/components/Molecules/HeaderTitle";
import Paragraph from "@/components/Atoms/Paragraph";
import MyContainer from "@/components/Atoms/MyContainer";

export default {
  name: "blog",
  components: {
    HeaderTitle,
    Paragraph,
    MyContainer
  },
  data() {
    return {
      // items: items
      items: [
        {no:1, path: 'https://dummyimage.com/3000x3000/fcc/000.png&text=Uploaded1'},
        {no:2, path: 'https://dummyimage.com/3000x3000/fcc/000.png&text=Uploaded2'},
        {no:3, path: 'https://dummyimage.com/3000x3000/fcc/000.png&text=Uploaded3'},
        {no:4, path: 'https://dummyimage.com/3000x3000/fcc/000.png&text=Uploaded4'}
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.blog {
  .imgList {
    display: flex;
    li {
      padding: 8px;
    }
  }
  // padding: 1rem 2rem;
}
</style>
