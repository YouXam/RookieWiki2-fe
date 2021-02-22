<template>
  <v-main class="grey lighten-3">
    <v-container>
      <Viewer :id="article_id" pageTitle="RookieWiki" />
    </v-container>
  </v-main>
</template>

<script>
import Viewer from '@/components/Viewer.vue'
export default {
  name: 'Home',
  components: {
    Viewer
  },
  data: () => ({
    article_id: ''
  }),
  async created () {
    const res = await this.get('home')
    this.article_id = res.data
  }
}
</script>
