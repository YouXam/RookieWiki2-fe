<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet class="white" style="padding: 10px; min-height: 65vh">
        <h1 v-if="error">{{ msg }}</h1>
        <div v-else>
          <h1 class="text-center">{{ history.log }}</h1>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>ID</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history._id }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>历史记录可见性</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history.history_visibility }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>编辑用户</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history.user }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>编辑时间</strong></v-list-item-title>
                <v-list-item-subtitle>{{ new Intl.DateTimeFormat("zh-CN", {year: "numeric", month: "2-digit", day: "2-digit", hour: 'numeric', minute: '2-digit', second: '2-digit'}).format(new Date(history.date)) }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>所属文章ID</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history.belong }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>是否修改标题</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history.state.title }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>是否修改内容</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history.state.content }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>是否修改可见性</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history.state.visibility }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>文章标题</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history.data.title }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>文章可见性</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history.data.visibility }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>文章内容</strong></v-list-item-title>
                <v-container>
                  <v-card style="padding: 1px 20px">
                    <Markdown :content="history.data.content"/>
                  </v-card>
                </v-container>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script>
import Markdown from '@/components/Markdown.vue'
export default {
  name: 'History',
  components: {
    Markdown
  },
  data: () => ({
    article_id: '',
    history_id: '',
    error: '',
    history: {
      log: '',
      user: '',
      date: '1'
    }
  }),
  methods: {
  },
  async created () {
    this.article_id = this.$route.params.article_id
    this.history_id = this.$route.params.history_id
    const article = await this.get('article/' + this.article_id)
    const res = await this.get('article/' + this.article_id + '/history/' + this.history_id)
    if (res.code === 200) {
      document.title = 'RookieWiki - 历史记录 - ' + article.article.title + ' - ' + res.data.log
      this.history = res.data
      this.length = parseInt((res.total - 1) / (res.size || 20)) + 1
    } else {
      this.error = true
      this.msg = res.code + ' ' + res.msg
    }
  }
}
</script>
