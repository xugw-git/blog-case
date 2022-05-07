import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_user: null,
    blog_case_users: [],
    comment_list: []
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
