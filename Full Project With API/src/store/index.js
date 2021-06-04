import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories:[],
    items:[],
    fitems:[],
  },
  getters: {
    categories(s){
      return s.categories;
    },
    items(s){
      return s.items;
    },
    fitems(s){
      return s.fitems;
    }
  }
})
