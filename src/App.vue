<template>
  <div id="app">
    <my-header class="header" />
    <div class="content">
      <router-view class="main-content" />
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/Organisms/MyHeader.vue";
// import SideNav from "@/components/Organisms/SideNav.vue";
import 'modern-css-reset';

export default {
  components: {
    MyHeader,
    // SideNav
  }
};
</script>

<style lang="scss">
:root {
  --font-size: 15px;
  --base-space: 8px;
  --maxWidth-container: 960px;
  --width-container: calc(100% - 2 * var(--base-space) * 3);
  --dark: #2c3e50;
  --theme: #42b983;
  --white: #fff;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
}

html {
  font-size: var(--font-size);
}
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  // display: flex;
}
.side-menu {
  // flex: 0 0 15rem;
}
.main-content {
  // flex: 1;
  /* flex: 1;
  height: 85vh; */
}
</style>
