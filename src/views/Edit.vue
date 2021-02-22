<template>
  <div>
    <!-- 保存对话框 -->
    <v-dialog v-model="confirm_submit" max-width="600px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">确认提交?</span>
        </v-card-title>
        <v-container>
          <v-text-field
            label="编辑记录: 简要描述你的编辑内容"
            v-model="log"
          ></v-text-field>
        </v-container>
        <v-card-text>
          如果您未编辑完成, 可以点击工具栏上的保存按钮或按ctrl+s保存到本地。<br />
          请确认编辑完成后提交。
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="submit">确认</v-btn>
          <v-btn color="blue darken-1" text @click="confirm_submit = false"
            >取消</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-tabs
      v-model="active_tab"
      class="elevation-2"
      color="black"
      :right="true"
    >
      <v-tab
        v-for="(tab, index) of tabs"
        :key="index"
        @click.stop="goto(tab.to)"
      >
        {{ tab.name }}
      </v-tab>
      <v-tab-item></v-tab-item>
      <v-tab-item style="padding: 20px">
        <h1 v-if="error">{{ msg }}</h1>
        <div v-else>
          <v-container>
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field label="标题" v-model="title"></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  v-model="visibility"
                  :items="items"
                  label="可见性"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <v-btn
                  class="ma-2"
                  tile
                  color="black"
                  dark
                  @click="confirm_submit = true"
                  >提交</v-btn
                >
                <v-btn
                  class="ma-2"
                  tile
                  color="black"
                  dark
                  v-show="isload"
                  @click="load"
                  >加载本地记录</v-btn
                >
              </v-col>
            </v-row>
            <h6 style="color: grey; z-index: 2" v-show="!!msg">
              {{ msg }} <a @click="msg = ''">隐藏</a>
            </h6>
          </v-container>
          <mavon-editor
            v-model="content"
            @imgAdd="imgAdd"
            style="min-height: 60vh; z-index: 1"
            :tabSize="4"
            :subfield="!$vuetify.breakpoint.smAndDown"
            @save="save"
          ></mavon-editor>
        </div>
      </v-tab-item>
      <v-tab-item></v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data: () => ({
    error: false,
    article_id: '',
    msg: '',
    log: '',
    confirm_submit: false,
    isload: false,
    title: '',
    content: '',
    active_tab: 1,
    visibility: '正常',
    permission: 1,
    tabs: [
      { name: '阅读', to: '..' },
      { name: '编辑', to: '.' },
      { name: '历史记录', to: '../history' }
    ],
    raw: {}
  }),
  methods: {
    submit: async function () {
      this.confirm_submit = false
      const update = { log: this.log }
      if (this.title !== this.raw.title) update.title = this.title
      if (this.content !== this.raw.content) update.content = this.content
      if (
        this.visibility !== this.raw.visibility &&
        this.items.indexOf(this.visibility) !== -1
      ) {
        update.visibility = this.permissionEnum(this.visibility)
      }
      const res = await this.post('article/' + this.article_id, update)
      this.app.notice(res.msg, res.code === 200)
      if (res.code === 401) this.app.login_data.show = true
      if (res.code !== 200) return
      localStorage.setItem(this.article_id, '')
      this.goto('/article/' + this.article_id)
    },
    goto: function (url) {
      if (url !== '.' && url !== this.$router.currentRoute.path) { this.$router.push(url) }
    },
    imgAdd: function () {
      this.app.notice('暂不支持上传图片, 此图片将无法显示, 请使用图床', false)
    },
    send: function (text) {
      this.msg = text
    },
    save: function () {
      if (
        this.title === this.raw.title &&
        this.content === this.raw.content &&
        this.visibility === this.raw.visibility
      ) { return }
      localStorage.setItem(
        this.article_id,
        JSON.stringify({
          title: this.title,
          content: this.content,
          visibility: this.visibility
        })
      )
      this.send(
        '本地已保存于' +
          new Intl.DateTimeFormat('zh-CN', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
          }).format(new Date())
      )
    },
    load: function () {
      const article = JSON.parse(localStorage.getItem(this.article_id))
      this.title = article.title
      this.content = article.content
      this.visibility = article.visibility
      this.isload = false
    }
  },
  async created () {
    this.article_id = this.$route.params.id
    this.tabs[0].to = `/article/${this.article_id}`
    this.tabs[2].to = `/article/${this.article_id}/history`
    const res = await this.get('article/' + this.article_id)
    if (res.code === 200) {
      this.title = res.article.title
      document.title = 'RookieWiki - 编辑 - ' + this.title
      this.content = res.article.content
      this.visibility = this.permissionEnum(res.article.visibility)
      this.raw = res.article
      this.raw.visibility = this.visibility
    } else if (res.code === 404) {
      this.$router.replace('/404')
    } else {
      this.error = true
      this.msg = res.code + ' ' + res.msg
    }
    setInterval(this.save, 1000 * 60)
    if (localStorage.getItem(this.article_id)) this.isload = true
    const user = await this.get('user')
    this.permission = (user.data && user.data.permission) || 1
  },
  computed: {
    items: function () {
      const res = ['正常']
      if (this.permission > 1) res.push('隐藏')
      if (this.permission > 2) res.push('删除')
      return res
    },
    app: function () {
      return this.$parent.$parent.$parent.$parent
    }
  },
  watch: {
    title: function () {
      document.title = 'RookieWiki - 编辑 - ' + this.title
    }
  }
}
</script>
