<template>
  <div id="app">
    <my-header class="header" />
    <div class="container">
      <side-nav class="side-menu" />
      <router-view class="main-content" />
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/Organisms/MyHeader.vue";
import SideNav from "@/components/Organisms/SideNav.vue";
import 'reset-css';

export default {
  components: {
    MyHeader,
    SideNav
  }
};
</script>

<style lang="scss">
:root {
  --font-size: 16px;
}

@mixin breakword($wordBreak: break-all, $overflowWrap: break-word, $overflowX: inherit) {
	word-break: $wordBreak; //ほんとはbreak-wordがベストなんだけどWinブラウザで崩れた（min-widthと併用で解決できるようだけど大掛かりな改修になりそうなので）
	overflow-wrap: $overflowWrap;
	word-wrap: $overflowWrap; //保険
	// white-space: normal !important;
	overflow-x: $overflowX;
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
.container {
  display: flex;
  flex: 1;
}
.side-menu {
  flex: 0 0 15rem;
}
.main-content {
  /* flex: 1;
  height: 85vh; */
}
</style>
