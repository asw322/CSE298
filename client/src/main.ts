import Vue from 'vue';
import App from './components/App.vue';
import router from './router/router';
// import vSelectMenu from 'v-selectmenu';

Vue.config.productionTip = false;
// Vue.use(vSelectMenu, { });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
