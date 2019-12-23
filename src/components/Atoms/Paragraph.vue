<template>
  <p><slot /></p>
</template>

<script>
export default {
  name: "paragraph"
};
</script>

<style lang="scss" scoped>
p:not(:last-of-type) {
  margin-bottom: 1em;
  // @include breakword;
}
</style>
