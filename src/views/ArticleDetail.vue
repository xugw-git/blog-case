<template>
  <div>
    <blog-navbar></blog-navbar>
    <blog-banner></blog-banner>
    <div class="container col-lg-8 col-md-12 my-3">
      <div v-if="article !== null" class="card border m-2">
        <div>
          <span class="badge bg-primary m-2">{{ article.category }}</span>
          <span class="small m-2">{{ article.createtime }}</span>
          <span class="small m-2">{{ article.author }}</span>
        </div>
        <div>
          <span v-for="tag in article.tag" :key="tag" class="badge rounded-pill bg-warning m-2">{{ tag }}</span>
        </div>
        <h1 class="m-2">{{ article.title }}</h1>
        <div v-for="(para, index) in article.body" :key=index class="m-2">{{ para }}</div>
      </div>
    </div>
    <BlogComments :id="article.id"></BlogComments>
  </div>
</template>

<script>
import axios from "axios";
import BlogNavbar from "@/components/BlogNavbar.vue";
import BlogBanner from "@/components/BlogBanner.vue";
import BlogComments from "@/components/BlogComments.vue";

export default {
  name: "ArticleDetail",
  components: { BlogNavbar, BlogBanner, BlogComments },
  data() {
    return {
      article: null,
    };
  },
  mounted() {
    axios
      .get("/articles/info")
      .then(res => {
        this.article = res.data.articleInfo.filter(i => i.id == this.$route.params.id)[0]
      });
  },
};
</script>