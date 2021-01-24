import Vue from 'vue';
import App from './components/App.vue';
import router from './router/router';
import vSelectMenu from 'v-selectmenu';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import VueCookies from 'vue-cookies';
// import GAuth from 'vue-google-oauth2';

// Focus on this
// const gauthOption = {
//   clientId: 'CLIENT_ID.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account'
// }

// Vue.use(GAuth, gauthOption);

Vue.use(VueCookies);
Vue.use(ElementUI);
Vue.use(vSelectMenu, {
  language: 'en'
});


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
