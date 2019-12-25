<template>
  <nav class="globalNavi">
    <ul>
      <li v-for="(link, key) in linkList" :key="key">
        <link-list-item :to="link">{{ key }}</link-list-item>
      </li>
    </ul>
  </nav>
</template>

<script>
  import LinkListItem from "@/components/Atoms/LinkListItem.vue";

  export default {
    name: "global-navi",
    components: {
      LinkListItem
    },
    props: {
      linkList: {
        type: Object,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
.globalNavi {
  display: flex;
}
</style>