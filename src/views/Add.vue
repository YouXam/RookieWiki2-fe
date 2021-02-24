<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet class="white" style="padding: 10px">
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
              如果您未编辑完成,
              可以点击工具栏上的保存按钮或按ctrl+s保存到本地。<br />
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
          @fullScreen="fullScreen"
          style="min-height: 65vh; z-index: 1"
          :tabSize="4"
          :subfield="!$vuetify.breakpoint.smAndDown"
          @save="save"
        ></mavon-editor>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Edit',
  data: () => ({
    article_id: '',
    msg: '',
    log: '',
    confirm_submit: false,
    isload: false,
    title: '',
    content: '',
    visibility: '正常',
    permission: 1,
    items: ['正常']
  }),
  methods: {
    submit: async function () {
      this.save()
      this.confirm_submit = false
      const update = {
        log: this.log,
        title: this.title,
        content: this.content,
        visibility: this.permissionEnum(this.visibility)
      }
      const res = await this.post('article/', update)
      if (res.code === 200) this.app.notice('提交成功', true)
      else this.app.notice('提交失败: ' + res.msg, false)
      if (res.code === 401) this.app.login_data.show = true
      if (res.code === 423) return this.$router.push('/user/' + this.app.username)
      if (res.code !== 200) return
      localStorage.setItem('new', '')
      this.$router.push('/article/' + res.article._id)
    },
    imgAdd: function () {
      this.app.notice('暂不支持上传图片, 此图片将无法显示, 请使用图床', false)
    },
    send: function (text) {
      this.msg = text
    },
    save: function () {
      localStorage.setItem(
        'new',
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
      const article = JSON.parse(localStorage.getItem('new'))
      this.title = article.title
      this.content = article.content
      this.visibility = article.visibility
      this.isload = false
    },
    fullScreen: function (sta) {
      this.app.showBar = !sta
    }
  },
  async created () {
    document.title = 'RookieWiki - 新增'
    setInterval(this.save, 1000 * 60)
    if (localStorage.getItem('new')) this.isload = true
    const user = await this.get('user')
    this.permission = (user.data && user.data.permission) || 1
  },
  computed: {
    app: function () {
      return this.$parent.$parent
    }
  },
  watch: {
    title: function () {
      document.title = 'RookieWiki - 新增 - ' + this.title
    }
  }
}
</script>
