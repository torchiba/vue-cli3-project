<template>
  <div class="headerTitle">
    <my-container><my-title><slot /></my-title></my-container>
  </div>
</template>

<script>
  import MyTitle from "@/components/Atoms/MyTitle.vue";
  import MyContainer from "@/components/Atoms/MyContainer.vue";

  export default {
    name: "header-title",
    components: {
      MyTitle,
      MyContainer
    }
  };
</script>

<style lang="scss" scoped>
.headerTitle {
  background-color: var(--theme);
  color: var(--white);
  font-size: 2rem;
  padding: 4rem 0;
  h1 {
    font-weight: bold;
  }
}
</style>