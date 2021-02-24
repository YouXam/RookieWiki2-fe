<template>
  <v-main class="lighten-3">
    <v-container style='text-align: center'>
      <strong>404</strong>
      <v-divider></v-divider>
      <h2 class="subheader">您所访问的页面不存在</h2>
      <v-btn text x-large to="/">首页</v-btn>
      <v-btn text x-large @click="$router.go(-1)">返回</v-btn>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'P404'
}
</script>

<style scoped>
strong {
  font-size: 130px;
}
.subheader {
  margin: 20px 0px;
  font-size: 50px;
  color: grey;
}
button {
  margin: 5px;
}
</style>
