<template>
  <section :style="bgimg">
    <div class="container col-lg-8 col-md-12">
      <div class="d-flex align-items-center">
        <img height="200" src="../assets/home.svg" class="w-50 m-5" />
        <div class="text-center w-50 m-5">
          <h3 class="text-secondary">温故而知新</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogBanner",
  data() {
    return {
      bgimg: {
        backgroundImage: "url(" + require("../assets/home-bg.jpg") + ")",
      },
    };
  },
};
</script>

