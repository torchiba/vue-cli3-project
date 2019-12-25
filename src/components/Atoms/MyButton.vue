<template>
  <button class="button" @click="onClick"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",

  methods: {
    onClick() {
      this.$emit('click');
      console.log('click!!!');
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid var(--dark);
  cursor: pointer;
  border-radius: 3px;
}
</style>
