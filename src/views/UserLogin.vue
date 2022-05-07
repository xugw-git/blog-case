<template>
  <div>
    <blog-navbar></blog-navbar>
    <blog-banner></blog-banner>
    <div v-show="!signupPage" class="container col-lg-3 col-md-12 my-3">
      <h1 class="text-center text-secondary m-2">注册页面</h1>
      <form>
        <div class="m-2 row">
          <input v-model="signupName" class="form-control" placeholder="账号" />
        </div>
        <div class="m-2 row">
          <input v-model="signupPwd" class="form-control" type="password" placeholder="密码" />
        </div>
        <div class="m-2 row">
          <button @click="signup" class="btn btn-primary">
            注册
          </button>
        </div>
        <div class="m-2 row">
          <div class="text-center text-secondary m-2">已有账号？点击登录</div>
          <button @click="changePage" class="btn btn-outline-primary">
            登录
          </button>
        </div>
      </form>
    </div>
    <div v-show="signupPage" class="container col-lg-3 col-md-12 my-3">
      <h1 class="text-center text-secondary m-2">登录页面</h1>
      <form>
        <div class="m-2 row">
          <input v-model="signinName" class="form-control" placeholder="账号" />
        </div>
        <div class="m-2 row">
          <input v-model="signinPwd" class="form-control" type="password" placeholder="密码" />
        </div>
        <div class="m-2 row">
          <button @click="signin" class="btn btn-primary">
            登录
          </button>
        </div>
        <div class="m-2 row">
          <div class="text-center text-secondary m-2">首次使用？点击注册</div>
          <button @click="changePage" class="btn btn-outline-primary">
            注册
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BlogNavbar from "@/components/BlogNavbar.vue";
import BlogBanner from "@/components/BlogBanner.vue";

export default {
  name: "UserLogin",
  components: { BlogNavbar, BlogBanner },
  data() {
    return {
      signupName: "",
      signupPwd: "",
      signinName: "",
      signinPwd: "",
      signupPage: true
    }
  },
  mounted() {
    if (localStorage.getItem("blog-case-users") === null) {
      localStorage.setItem("blog-case-users", JSON.stringify([...this.$store.state.blog_case_users]));
    }
    this.$store.state.blog_case_users = JSON.parse(localStorage.getItem("blog-case-users"));
    this.$store.state.current_user = JSON.parse(localStorage.getItem("current-user"));
    this.$store.state.isSignin = JSON.parse(localStorage.getItem("login-status"));
  },
  methods: {
    signup() {
      if (this.signupName !== "" & this.signupPwd !== "" & this.$store.state.blog_case_users.filter(i => i["signupName"] === this.signupName).length === 0) {
        this.$store.state.blog_case_users.push({
          signupName: this.signupName,
          signupPwd: this.signupPwd,
        });
        localStorage.setItem("blog-case-users", JSON.stringify([...this.$store.state.blog_case_users]));
        this.$store.state.current_user = this.signupName
        localStorage.setItem("current-user", JSON.stringify(this.$store.state.current_user));
        this.$router.push({ name: "BlogHome" });
        alert("注册成功！")
      } else if (this.$store.state.blog_case_users.filter(i => i["signupName"] === this.signupName).length > 0) {
        alert("用户名已存在！")
      } else {
        alert("账密不能为空！")
      }
    },
    signin() {
      if (this.$store.state.blog_case_users.some((e) => e["signupName"] === this.signinName & e["signupPwd"] === this.signinPwd)) {
        this.$store.state.current_user = this.signinName
        localStorage.setItem("current-user", JSON.stringify(this.$store.state.current_user));
        this.$router.push({ name: "BlogHome" });
        this.$refs.navbar.refresh();
      } else {
        alert("密码错误！")
      }
    },
    changePage() {
      this.signupPage = !this.signupPage
    }
  }
}
</script>
