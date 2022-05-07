<template>
  <div>
    <blog-navbar></blog-navbar>
    <blog-banner></blog-banner>
    <div class="container col-lg-8 col-md-12 my-3 pb-5">
      <div v-for="article in article_info" :key="article.id" class="card border m-2">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-12">
            <div class="badge bg-primary m-2">
              {{ article.category }}
            </div>
            <span class="small m-2">{{ article.createtime }}</span>
            <span class="small m-2">{{ article.author }}</span>
            <h3 class="card-title m-2">
              <router-link :to="{ name: 'ArticleDetail', params: { id: article.id } }"
                class="link-dark stretched-link btn-link-hover">{{ article.title }}
              </router-link>
            </h3>
            <span v-for="tag in article.tag" :key="tag" class="badge rounded-pill bg-success m-2">{{ tag
            }}</span>
          </div>
          <div class="col-lg-4 col-md-12">
            <img :src="article.image" class="m-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BlogNavbar from "@/components/BlogNavbar.vue";
import BlogBanner from "@/components/BlogBanner.vue";

export default {
  name: "BlogHome",
  components: { BlogNavbar, BlogBanner },
  data() {
    return {
      article_info: null,
    };
  },
  mounted() {
    axios
      .get("/articles/info")
      .then(res => {
        this.article_info = res.data.articleInfo.sort((first, second) => Date.parse(second.createtime) - Date.parse(first.createtime))
      });
  },
};
</script>