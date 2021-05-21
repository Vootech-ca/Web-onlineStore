import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import bootstrapcss from './assets/css/bootstrap.css'
import icons from './assets/css/icons.css'
import maincss from './assets/css/app.css'


import bootstrapjs from './assets/js/bootstrap.js'
import swal from './assets/js/swal.js'
import mainjs from './assets/js/app.js'

Vue.use(VueAxios, axios)


Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8080/store-api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRF-Token";



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
