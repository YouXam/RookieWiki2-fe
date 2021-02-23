<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-dialog v-model="confirm_revert" max-width="600px" persistent>
        <v-card>
          <v-card-title>
            <span class="headline">确认还原?</span>
          </v-card-title>
          <v-container>
            <v-text-field
              label="还原记录: 简要陈述你的还原理由"
              v-model="log"
            ></v-text-field>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="revert">确认</v-btn>
            <v-btn color="blue darken-1" text @click="confirm_revert = false"
              >取消</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="change" max-width="600px" persistent>
        <v-card>
          <v-card-title>
            <span class="headline">修改可见性</span>
          </v-card-title>
          <v-container>
            <v-select v-model="edit" :items="items" label="可见性"></v-select>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="changev">确认</v-btn>
            <v-btn color="blue darken-1" text @click="change = false"
              >取消</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-sheet
        class="white elevation-2"
        style="padding: 10px; min-height: 65vh"
      >
        <h1 v-if="error">{{ msg }}</h1>
        <div v-else>
          <h1 class="text-center">{{ history.log }}</h1>
          <v-btn class="ma-1" plain :to="diffwithnow">和当前版本比较</v-btn>
          <v-btn class="ma-1" plain v-if="!iffirst" :to="diffwithpre"
            >和上一版本比较</v-btn
          >
          <v-btn class="ma-1" plain @click="confirm_revert = true"
            >还原到此版本</v-btn
          >
          <v-btn class="ma-1" plain @click="change = true">修改可见性</v-btn>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>ID</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history._id }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>编号</strong></v-list-item-title>
                <v-list-item-subtitle>{{ history.num }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  ><strong>历史记录可见性</strong></v-list-item-title
                >
                <v-list-item-subtitle>{{ visibility }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>编辑用户</strong></v-list-item-title>
                <v-list-item-subtitle><router-link class="link" :to="'/user/' + history.user">{{ history.user }}</router-link></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>编辑时间</strong></v-list-item-title>
                <v-list-item-subtitle>{{
                  new Intl.DateTimeFormat('zh-CN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: 'numeric',
                    minute: '2-digit',
                    second: '2-digit'
                  }).format(new Date(history.date))
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  ><strong>所属文章ID</strong></v-list-item-title
                >
                <v-list-item-subtitle>{{
                  history.belong
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  ><strong>是否修改标题</strong></v-list-item-title
                >
                <v-list-item-subtitle>{{
                  history.state.title
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  ><strong>是否修改内容</strong></v-list-item-title
                >
                <v-list-item-subtitle>{{
                  history.state.content
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  ><strong>是否修改可见性</strong></v-list-item-title
                >
                <v-list-item-subtitle>{{
                  history.state.visibility
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>文章标题</strong></v-list-item-title>
                <v-list-item-subtitle>{{
                  history.data.title
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  ><strong>文章可见性</strong></v-list-item-title
                >
                <v-list-item-subtitle>{{
                  history.data.visibility
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><strong>文章内容</strong></v-list-item-title>
                <v-container>
                  <v-card style="padding: 1px 20px">
                    <Markdown :content="history.data.content" />
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
    iffirst: false,
    confirm_revert: false,
    permission: 1,
    edit: '正常',
    change: false,
    article: {},
    diffwithnow: '',
    diffwithpre: '',
    article_id: '',
    history_id: '',
    error: '',
    visibility: '正常',
    history: {
      log: '',
      user: '',
      date: '1',
      data: {
        title: '',
        content: '',
        visibility: 1
      },
      state: {}
    },
    log: ''
  }),
  methods: {
    revert: async function () {
      this.confirm_revert = false
      const update = {
        log: `revert from #${this.history.num} - ` + this.log,
        title: this.history.data.title,
        content: this.history.data.content,
        visibility: this.history.data.visibility
      }
      const res = await this.post('article/' + this.article_id, update)
      this.app.notice(res.msg, res.code === 200)
      if (res.code === 423) return this.$router.push('/user/' + this.app.username)
      this.$router.push('/article/' + this.article_id)
    },
    changev: async function () {
      this.change = false
      const res = await this.post(
        'article/' + this.article_id + '/history/' + this.history_id,
        {
          visibility: this.permissionEnum(this.edit)
        }
      )
      this.app.notice(res.msg, res.code === 200)
      if (res.code === 423) return this.$router.push('/user/' + this.app.username)
      this.update()
    },
    update: async function () {
      const res = await this.get(
        'article/' + this.article_id + '/history/' + this.history_id
      )
      if (res.code === 200) {
        document.title =
          'RookieWiki - 历史记录 - ' + this.article.title + ' - ' + res.data.log
        this.diffwithnow = `/article/${this.article_id}/diff?aid=${res.data.num}&bid=${this.article.history_total}`
        this.diffwithpre = `/article/${this.article_id}/diff?aid=${res.data
          .num - 1}&bid=${res.data.num}`
        this.iffirst = res.data.num === 1
        this.history = res.data
        this.length = parseInt((res.total - 1) / (res.size || 20)) + 1
        this.edit = this.visibility = this.permissionEnum(res.data.history_visibility)
      } else if (res.code === 404) {
        return this.$router.replace('/404')
      } else {
        this.error = true
        this.msg = res.code + ' ' + res.msg
      }
    }
  },
  async created () {
    this.article_id = this.$route.params.article_id
    this.history_id = this.$route.params.history_id
    const article = await this.get('article/' + this.article_id)
    if (article.code !== 200) {
      this.error = true
      this.msg = article.code + ' ' + article.msg
      return
    }
    this.article = article.article
    this.update()
    const user = await this.get('user')
    if (user.code === 200) this.permission = user.data.permission
  },
  computed: {
    items: function () {
      const res = ['正常']
      if (this.permission > 1) res.push('隐藏')
      if (this.permission > 2) res.push('删除')
      return res
    },
    app: function () {
      return this.$parent.$parent
    }
  }
}
</script>
