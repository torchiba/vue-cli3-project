<template>
  <main class="gallery" >
    <header-title>Gallery</header-title>
    <my-container>
      <div>
        <h2>data内でファイルパスなど指定して実行</h2>
        <ul class="imgList">
          <li v-for="img in items" :key="img.no">
            <img v-lazy="img.path" >
          </li>
        </ul>
      </div>

      <div>
        <h2>lorem picsom・axiosでデータを取得して表示したもの</h2>
        <ul class="imgList">
          <li v-for="list in picsom.data" :key="list.id">
            <img v-lazy="list.download_url" :alt="list.author" >
          </li>
        </ul>
      </div>

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
import axios from 'axios';

export default {
  name: "gallery",
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
      ],
      picsom: null
    }
  },
  mounted () {
    axios
      .get('https://picsum.photos/v2/list?page=2&limit=10')
      .then(response => (this.picsom = response))
  }
};
</script>

<style lang="scss" scoped>
.gallery {
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
