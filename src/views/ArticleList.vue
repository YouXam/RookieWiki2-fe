<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet class="white elevation-2" style="padding: 10px">
        <v-pagination
          v-model="page"
          :length="length"
          total-visible="10"
        ></v-pagination>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">标题</th>
                <th class="text-left">内容</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in articles"
                :key="index"
                @click="$router.push('/article/' + item._id)"
              >
                <td class="text" style="width:20%">{{ item.title }}</td>
                <td class="text">{{ item.content }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-pagination
          v-model="page"
          :length="length"
          total-visible="10"
        ></v-pagination>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'ArticleList',
  data: () => ({
    page: 1,
    length: 1,
    articles: []
  }),
  methods: {
    update: async function () {
      let url = 'articles?page=' + this.page
      if (this.$route.query.search) url += '&search=' + this.$route.query.search
      const res = await this.get(url)
      if (res.code === 200) {
        this.articles = res.articles
        this.length = parseInt((res.total - 1) / (res.size || 20)) + 1
      } else if (res.code === 404) {
        this.$router.replace('/404')
      } else {
        this.error = true
        this.msg = res.code + ' ' + res.msg
      }
    }
  },
  watch: {
    '$route.query.search': function () {
      this.update()
    }
  },
  async created () {
    document.title = 'RookieWiki - 文章列表'
    this.page = parseInt(this.$route.query.page) || 1
    this.$watch('page', function (v) {
      this.$router.push({ query: { page: v } })
      this.update()
    })
    this.update()
  }
}
</script>

<style scoped>
.text {
  max-width: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
