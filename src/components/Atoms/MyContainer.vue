<template>
  <div class="container"><slot /></div>
</template>

<script>
export default {
  name: "my-container"
};
</script>

<style lang="scss" scoped>
.container {
  max-width: var(--maxWidth-container);
  width: var(--width-container);
  margin-left: auto;
  margin-right: auto;
}
</style>
