<template>
  <v-tabs v-model="active_tab" class="elevation-2" color="black" :right="true">
    <v-tab v-for="(tab, index) of tabs" :key="index" @click.stop="goto(tab.to)">
      {{ tab.name }}
    </v-tab>
    <v-tab-item style="padding: 20px">
      <h1>{{ title }}</h1>
      <v-divider v-if="!!title"></v-divider>
      <Markdown :content="content" :article="true" />
    </v-tab-item>
    <v-tab-item></v-tab-item>
    <v-tab-item></v-tab-item>
  </v-tabs>
</template>

<script>
import Markdown from '@/components/Markdown.vue'
export default {
  name: 'Viewer',
  props: {
    id: String,
    pageTitle: String
  },
  components: {
    Markdown
  },
  data: () => ({
    permission: 1,
    title: '',
    content: '',
    active_tab: 0,
    tabs: [
      { name: '阅读', to: '.' },
      { name: '编辑', to: './edit' },
      { name: '历史记录', to: './history' }
    ]
  }),
  methods: {
    update: async function () {
      if (!this.article_id) return
      this.tabs[1].to = `/article/${this.article_id}/edit`
      this.tabs[2].to = `/article/${this.article_id}/history`
      const res = await this.get('article/' + this.article_id)
      if (res.code === 200) {
        this.title = res.article.title
        document.title = this.pageTitle || 'RookieWiki - ' + this.title
        this.content = res.article.content
      } else if (res.code === 404) {
        this.$router.replace('/404')
      } else {
        this.title = res.code + ' ' + res.msg
        this.content = ''
      }
    },
    goto: function (url) {
      if (url !== '.' && url !== this.$router.currentRoute.path) { this.$router.push(url) }
    }
  },
  async created () {
    this.update()
  },
  computed: {
    article_id: function () {
      return this.id
    }
  },
  watch: {
    article_id: function () {
      this.update()
    }
  }
}
</script>
