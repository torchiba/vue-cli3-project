<template>
  <!-- カスタムディレクティブ使用 -->
  <header v-scroll="handleScroll">
    <my-title>Header Title</my-title>
    <nav class="globalNavi">
      <link-list :link-list="linkList" />
    </nav>
    <search-form class="search-form" />
  </header>
</template>

<script>
import MyTitle from "@/components/Atoms/MyTitle.vue";
import LinkList from "@/components/Molecules/LinkList.vue";
import SearchForm from "@/components/Molecules/MySearchForm.vue";

export default {
  name: "my-header",
  components: {
    MyTitle,
    SearchForm,
    LinkList
  },
  data() {
    return {
      linkList: {
        home: '/',
        about: 'about',
        blog: 'blog',
        contact: 'contact'
      }
    };
  },
  methods: {
    handleScroll (evt, el) {
      if (window.scrollY > 1) {
        el.setAttribute(
          'style',
          'opacity: 0;'
        )
      } else {
        el.setAttribute(
          'style',
          'opacity: 1;'
        )
      }
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: #24292e;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  color: #ffffff;
  align-items: center;
}
.search-form {
  margin: auto 0;
}
.globalNavi {
  ul {
    display: flex;
  }
}
</style>
