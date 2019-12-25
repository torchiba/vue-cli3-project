<template>
  <p><slot /></p>
</template>

<script>
export default {
  name: "paragraph"
};
</script>

<style lang="scss" scoped>
p {
  word-break: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
  &:not(:last-of-type) {
    margin-bottom: 1em;
  }
}
</style>
