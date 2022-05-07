<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light shadow" style="position: sticky">
    <div class="container col-lg-8 col-md-12">
      <router-link :to="{ name: 'BlogHome' }" class="btn btn-outline-secondary mx-2">首页
      </router-link>
      <div v-if="$store.state.current_user" class="btn-group mx-2">
        <button class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
          {{ $store.state.current_user }}
        </button>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{ name: 'UserCenter' }" class="dropdown-item">我的账号
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'ArticleCreate' }" class="dropdown-item">
              写博客
            </router-link>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li>
            <button @click="logout" class="dropdown-item">退出</button>
          </li>
        </ul>
      </div>
      <router-link v-else to="/login" class="btn btn-outline-secondary">登录</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BlogNavbar",
  methods: {
    logout() {
      this.$store.state.current_user = null
      localStorage.removeItem("current-user");
      this.$router.go(0);
      // location.reload()
    },
  },
};
</script>