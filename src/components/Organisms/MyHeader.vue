<template>
  <!-- カスタムディレクティブ使用 -->
  <header v-scroll="handleScroll" :class="{ 'transition': headerFlag }">
    <my-container>
      <link-list-item to="/" class="logo">LOGO</link-list-item>
      <nav class="globalNavi">
        <link-list :link-list="linkList" />
      </nav>
      <search-form class="search-form" />
    </my-container>
  </header>
</template>

<script>
import LinkListItem from "@/components/Atoms/LinkListItem.vue";
import LinkList from "@/components/Molecules/LinkList.vue";
import SearchForm from "@/components/Molecules/MySearchForm.vue";
import MyContainer from "@/components/Atoms/MyContainer";

export default {
  name: "my-header",
  components: {
    LinkListItem,
    SearchForm,
    LinkList,
    MyContainer
  },
  data() {
    return {
      headerFlag: false,
      linkList: {
        home: '/',
        about: 'about',
        blog: 'blog',
        contact: 'contact'
      }
    };
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 1) {
        this.headerFlag = true;
      } else {
        this.headerFlag = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: #24292e;
  display: flex;
  color: #ffffff;
  opacity: 1;
  &.transition {
    opacity: 0;
  }
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
