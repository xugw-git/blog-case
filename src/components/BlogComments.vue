<template>
  <div class="container col-lg-8 col-md-12 my-3 pb-5">
    <br />
    <div class="m-2 row">
      <p class="small">共 {{ comments_length }} 条评论</p>
    </div>
    <div class="card m-2" v-for="(comment, index) in comments" :key="index">
      <div class="card-header">
        <span class="me-2">
          {{ comment.name }}
        </span>
        @
        <span class="small">
          {{ comment.createtime }}
        </span>
      </div>
      <div class="card-body p-2">
        <p class="card-text mx-2 small">
          {{ comment.body }}
        </p>
      </div>
    </div>
    <div class="m-2 row">
      <textarea v-model="message" class="form-control" placeholder="留下点评论吧"></textarea>
    </div>
    <div class="m-2 row">
      <button @click="submit" class="btn btn-primary">提交</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "BlogComments",
  props: { id: Number },
  data() {
    return {
      comments: [],
      message: ""
    };
  },
  computed: {
    comments_length() {
      return this.comments.filter(i => i.id === this.id).length
    },
  },
  mounted() {
    this.comments = JSON.parse(localStorage.getItem("blog_case_comments")).sort((first, second) => Date.parse(second.createtime) - Date.parse(first.createtime));
  },
  methods: {
    submit() {
      if (this.$store.state.current_user) {
        this.comments.push({ id: this.id, name: this.$store.state.current_user, createtime: new Date().toLocaleString('en-GB'), body: this.message });
        localStorage.setItem("blog_case_comments", JSON.stringify(this.comments));
        this.message = "";
        alert("提交成功!");
      } else {
        alert("登录后留言!");
      }
    }
  }
}
</script>