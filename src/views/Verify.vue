<template>
  <v-main class="lighten-3">
    <v-container style="text-align:center">
      <strong>{{ info }}</strong>
      <v-divider></v-divider>
      <v-btn style="margin: 15px;" text x-large to="/">首页</v-btn>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Verify',
  data: () => ({
    info: ''
  }),
  async created () {
    if (!this.$route.query.token) return (this.info = '缺少Token')
    const res = await this.get('verify?token=' + this.$route.query.token)
    this.info = res.msg
  }
}
</script>

<style scoped>
strong {
  font-size: 50px;
  margin: 50px 0px;
}
</style>
