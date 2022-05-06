<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
a:link {
  text-decoration: none;
}

.btn-link-hover {
  padding-bottom: 0px;
  background: linear-gradient(to right, currentColor 0%, currentColor 100%);
  background-size: 0px 6%;
  background-repeat: no-repeat;
  background-position: left 100%;
  transition-duration: 0.5s;
  font-weight: inherit;
  padding: 0;
}

.btn-link-hover:hover {
  background-size: 100% 6%;
}
</style>
