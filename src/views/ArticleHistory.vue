<template>
  <div>
    <v-tabs
      v-model="active_tab"
      class="elevation-2"
      color="black"
      :right="true"
    >
    <v-tab v-for="(tab, index) of tabs" :key="index" @click.stop="goto(tab.to)">
      {{tab.name}}
    </v-tab>
    <v-tab-item></v-tab-item>
    <v-tab-item></v-tab-item>
    <v-tab-item style="padding: 20px">
    </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'ArticleHistory',
  data: () => ({
    article_id: '',
    active_tab: 2,
    tabs: [
      { name: '阅读', to: '..' },
      { name: '编辑', to: '../edit' },
      { name: '历史记录', to: '.' }
    ]
  }),
  methods: {
    goto: function (url) {
      if (url !== '.' && url !== this.$router.currentRoute.path) this.$router.push(url)
    }
  },
  async created () {
    this.article_id = this.$route.params.id
    this.tabs[0].to = `/article/${this.article_id}`
    this.tabs[1].to = `/article/${this.article_id}/edit`
    const res = await this.get('article/' + this.article_id + '/history')
    if (res.code !== 200) {
      this.title = res.code + ' ' + res.msg
      this.content = ''
    } else {
      // TODO 显示错误
    }
  },
  watch: {
    title: function () {
      document.title = 'RookieWiki - 历史记录 - ' + this.title
    }
  }
}
</script>
