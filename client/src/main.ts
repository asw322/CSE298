import Vue from 'vue';
import App from './components/App.vue';
import router from './router/router';
import vSelectMenu from 'v-selectmenu';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';


Vue.use(ElementUI);
Vue.use(vSelectMenu);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
