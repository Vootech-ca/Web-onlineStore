import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

Vue.config.productionTip = false
axios.defaults.baseURL='http://mamostakanm.com/dev/public/api/'
axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRF-Token";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
