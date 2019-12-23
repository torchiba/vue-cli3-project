import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// ディレクティブ（new Vueの前に書く）
Vue.directive('scroll', {
  // ディレクティブがはじめて要素と紐付いたとき
  bind () {
    console.log('bind');
  },
  // 紐付いた要素が親Nodeに挿入されたとき
  inserted: function (el, binding) {
    console.log('inserted');
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
  // 紐付いた要素を包含しているコンポーネントのVNodeが更新されたとき
  update () {
    console.log('update');
  },
  // 包含しているコンポーネントと子コンポーネントのVnodeが更新されたとき
  componentUpdated () {
    console.log('componentUpdated');
  },
  // 紐付いた要素からディレクティブが削除されるとき
  unbind () {
    console.log('unbind');
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");