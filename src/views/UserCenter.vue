<template>
  <div>
    <blog-navbar></blog-navbar>
    <blog-banner></blog-banner>
    <div class="container col-12 my-3">
      <div class="m-2 row">
        <div class="col"></div>
        <div class="col-lg-4">
          <h1 class="text-center text-secondary m-2">用户中心</h1>
          <form>
            <div class="m-2 row">
              <input v-model="username" class="form-control" placeholder="账号" />
            </div>
            <div class="m-2 row">
              <input v-model="password" class="form-control" placeholder="密码" />
            </div>
            <div class="m-2 row">
              <button @click="changeInfo" class="btn btn-primary">
                更新
              </button>
            </div>
            <div class="m-2 row">
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                删除
              </button>

              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        确定要删除此用户吗？
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      删除后无法找回！
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button @click="delUser" type="button" class="btn btn-primary" data-bs-dismiss="modal">
                        确定
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogNavbar from "@/components/BlogNavbar.vue";
import BlogBanner from "@/components/BlogBanner.vue";

export default {
  name: "UserCenter",
  components: { BlogNavbar, BlogBanner },
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    this.username = this.$store.state.current_user
  },
  methods: {
    delUser() {
      this.$store.state.blog_case_users = this.$store.state.blog_case_users.filter(i => i["signupName"] !== this.$store.state.current_user)
      localStorage.setItem("blog-case-users", JSON.stringify([...this.$store.state.blog_case_users]));
      this.$store.state.current_user = null
      localStorage.removeItem("current-user");
      this.$router.push({ name: "BlogHome" });
    },
    changeInfo() {
      if (this.username !== "" & this.password !== "" & this.$store.state.blog_case_users.filter(i => i["signupName"] === this.username).length === 0) {
        this.$store.state.current_user = this.username
        localStorage.setItem("current-user", JSON.stringify(this.$store.state.current_user));
        this.$store.state.blog_case_users.push({
          signupName: this.username,
          signupPwd: this.password,
        });
        localStorage.setItem("blog-case-users", JSON.stringify([...this.$store.state.blog_case_users]));
      } else if (this.$store.state.blog_case_users.filter(i => i["signupName"] === this.username).length > 0) {
        alert("用户名已存在！")
      } else {
        alert("账密不能为空！")
      }
    }
  }
}
</script>