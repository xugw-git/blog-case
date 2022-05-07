import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogHome from "@/views/BlogHome.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import UserLogin from "@/views/UserLogin.vue"
import UserCenter from "@/views/UserCenter.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "BlogHome",
    component: BlogHome,
  },
  {
    path: "/article/:id",
    name: "ArticleDetail",
    component: ArticleDetail
  },
  {
    path: "/login",
    name: "UserLogin",
    component: UserLogin
  },
  {
    path: "/user/:username",
    name: "UserCenter",
    component: UserCenter
  },
]

const router = new VueRouter({
  routes
})

export default router
