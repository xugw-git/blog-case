import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSignin: false,
    current_user: "",
    blog_case_users: []
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
