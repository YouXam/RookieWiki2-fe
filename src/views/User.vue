<template>
  <v-main class="grey lighten-3">
    <v-dialog v-model="email_dialog" max-width="600px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">修改邮箱</span>
        </v-card-title>
        <v-container>
          <v-text-field
            label="邮箱"
            :rules="emailRules"
            v-model="edited_main"
          ></v-text-field>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="update_email">确认</v-btn>
          <v-btn color="blue darken-1" text @click="email_dialog = false"
            >取消</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="password_dialog" max-width="600px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">修改密码</span>
        </v-card-title>
        <v-container>
          <v-text-field
            label="旧密码"
            type="password"
            v-model="old_password"
          ></v-text-field>
          <v-text-field
            label="新密码"
            v-model="new_password"
            type="password"
            :rules="passwordRules"
          ></v-text-field>
          <v-text-field
            label="确认密码"
            type="password"
            :rules="confirmRules"
            v-model="confirm_password"
          ></v-text-field>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="update_password">确认</v-btn>
          <v-btn color="blue darken-1" text @click="password_dialog = false"
            >取消</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="permission_dialog" max-width="600px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">修改权限</span>
        </v-card-title>
        <v-container>
          <v-select
            v-model="permission"
            :items="items"
            label="权限"
          ></v-select>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="update_permission">确认</v-btn>
          <v-btn color="blue darken-1" text @click="permission_dialog = false"
            >取消</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-container>
      <v-sheet class="white elevation-2 d-flex flex-wrap" style="padding: 10px">
        <UserAvatar :username="username" :email="user.email" :maxWidth="$vuetify.breakpoint.smAndDown ? '100%' : '25%'" />
        <v-sheet style="padding: 30px">
          <h1>{{ username }}</h1>
          <div style="color: grey; padding-top: 10px" v-if="user.email">
            {{ table[user.permission] }}
          </div>
          <div style="color: grey; padding-top: 10px" v-if="user.email">
            {{ user.email }}
          </div>
          <v-btn class="action" @click="password_dialog = true" plain v-if="username == app.username">修改密码</v-btn>
          <v-btn class="action" @click="email_dialog = true" plain v-if="username == app.username">修改邮箱</v-btn>
          <v-btn class="action" v-if="!app.verified && username == app.username" @click="active" plain :loading="active_load" :disabled="disable_active">激活邮件<span v-show="disable_active">({{ last_time }}秒)</span></v-btn>
          <v-btn class="action" v-if="app.permission >= 2" @click="permission_dialog = true" plain>修改权限</v-btn>
        </v-sheet>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script>
import md5 from 'md5'
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'User',
  components: {
    UserAvatar
  },
  data: () => ({
    user: {},
    disable_active: false,
    active_load: false,
    password_dialog: false,
    email_dialog: false,
    permission_dialog: false,
    last_time: 0,
    permission: '普通用户',
    old_password: '',
    new_password: '',
    confirm_password: '',
    edited_main: '',
    timmer: 0,
    emailRules: [
      v => !!v || '邮箱不可为空',
      v => /^.+@.+\..+$/.test(v) || '邮箱格式不正确'
    ],
    passwordRules: [
      v => !!v || '密码不可为空',
      v => /.{6,200}/.test(v) || '密码长度需要在 6-200 之间'
    ],
    table: {
      普通用户: 1,
      管理员: 2,
      超级管理员: 3,
      封禁用户: 0,
      0: '封禁用户',
      1: '普通用户',
      2: '管理员',
      3: '超级管理员'
    }
  }),
  methods: {
    active: async function () {
      this.active_load = true
      const res = await this.post('active')
      this.app.notice(res.msg, res.code === 200)
      this.time = new Date(res.time)
      this.last_time = 5 * 60 - parseInt((new Date() - this.time) / 1000)
      this.disable_active = true
      this.timmer = setInterval(() => {
        this.last_time = 5 * 60 - parseInt((new Date() - this.time) / 1000)
        if (this.last_time <= 0) {
          this.disable_active = false
          clearInterval(this.timmer)
        }
      }, 1000)
      this.active_load = false
    },
    update_email: async function () {
      if (!/^.+@.+\..+$/.test(this.edited_main)) return this.app.notice('邮箱格式错误', false)
      this.email_dialog = false
      const res = await this.post('update_email', { email: this.edited_main })
      this.app.notice(res.msg, res.code === 200)
      if (res.code !== 200) return
      this.app.update_info()
      if (this.username === this.app.username) location.reload()
    },
    update_password: async function () {
      if (!/.{6,200}/.test(this.new_password) || this.new_password !== this.confirm_password) return this.app.notice('密码格式不正确', false)
      const res = await this.post('update_password', {
        oldpassword: md5(this.old_password + 'rookiewiki'),
        newpassword: md5(this.new_password + 'rookiewiki')
      })
      this.app.notice(res.msg, res.code === 200)
      this.password_dialog = false
    },
    update_permission: async function () {
      this.permission_dialog = false
      const res = await this.post('update_permission', {
        uid: this.username,
        permission: this.table[this.permission]
      })
      this.app.notice(res.msg, res.code === 200)
      this.update()
      if (this.username === this.app.username) this.app.update_info()
    },
    update: async function () {
      const res = await this.get('user/' + this.username)
      if (res.code === 404) return this.$router.replace('/404')
      if (res.code !== 200) return this.app.notice(res.msg, false)
      this.permission = this.table[res.data.permission]
      this.user = res.data
    }
  },
  computed: {
    app: function () {
      return this.$parent.$parent
    },
    confirmRules: function () {
      return [
        v => !!v || '请再输入一次密码',
        () =>
          this.new_password === this.confirm_password ||
          '密码不匹配'
      ]
    },
    username: function () {
      return this.$route.params.username
    },
    items: function () {
      return this.app.permission >= 3 ? ['封禁用户', '普通用户', '管理员'] : ['封禁用户', '普通用户']
    }
  },
  async created () {
    this.update()
  },
  watch: {
    username: function () {
      this.update()
    }
  }
}
</script>
