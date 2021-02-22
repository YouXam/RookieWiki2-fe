<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet class="white elevation-2 text-center" style="padding: 10px" min-height="70vh">
        <h1>{{ info }}</h1>
      </v-sheet>
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
