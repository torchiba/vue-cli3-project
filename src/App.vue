<template>
  <div id="app">
    <my-header class="header" />
    <div class="content">
      <router-view class="main-content" />
      <!-- <side-nav class="side-menu" /> -->
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/Organisms/MyHeader.vue";
// import SideNav from "@/components/Organisms/SideNav.vue";
import 'reset-css';

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
}

@mixin breakword($wordBreak: break-all, $overflowWrap: break-word, $overflowX: inherit) {
	word-break: $wordBreak; //ほんとはbreak-wordがベストなんだけどWinブラウザで崩れた（min-widthと併用で解決できるようだけど大掛かりな改修になりそうなので）
	overflow-wrap: $overflowWrap;
	word-wrap: $overflowWrap; //保険
	// white-space: normal !important;
	overflow-x: $overflowX;
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
  display: flex;
}
.side-menu {
  // flex: 0 0 15rem;
}
.main-content {
  flex: 1;
  /* flex: 1;
  height: 85vh; */
}
</style>
