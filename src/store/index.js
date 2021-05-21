import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[]
  },
  getters:{
    users(s) {
      return s.users;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
