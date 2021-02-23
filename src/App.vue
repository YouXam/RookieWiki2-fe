<template>
  <v-app>
    <v-fab-transition>
      <v-btn
        class="md-5 mr-3 elevation-21"
        dark
        fab
        button
        right
        color="blue darken-3"
        fixed
        bottom
        @click="scrollToTop"
        v-show="showTop"
      >
        <v-icon>mdi-arrow-up-thick</v-icon>
      </v-btn>
    </v-fab-transition>

    <!-- 找回密码表单框 -->
    <v-dialog v-model="find.show" max-width="600px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">找回密码</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form>
              <v-text-field
                v-model="find.username"
                label="用户名/邮箱"
                clearable
              ></v-text-field>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="find.show = false, login_data.show = true">返回</v-btn>
          <v-btn
            color="blue darken-1"
            text
            :disabled="find.disabled"
            @click="reset"
            :loading="find.loading"
            >提交<span v-show="find.disabled">({{ find.last }}秒)</span>
          </v-btn>
          <v-btn color="cancel darken-1" depressed dark @click="find.show = false">取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 登录表单框 -->
    <v-dialog v-model="login_data.show" max-width="600px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">登录</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form>
              <v-text-field
                v-model="login_data.username"
                label="用户名/邮箱"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="login_data.password"
                label="密码"
                type="password"
                clearable
                @keyup.enter="login"
              ></v-text-field>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="find.show = true, login_data.show = false" >忘记密码</v-btn>
          <v-btn color="blue darken-1" text @click="login_data.show = false, register_data.show = true" > 前去注册 </v-btn>
          <v-btn color="blue darken-1" depressed dark @click="login" :loading="login_data.loading">登录</v-btn>
          <v-btn color="cancel darken-1" depressed dark @click="login_data.show = false">取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 注册表单框 -->
    <v-dialog v-model="register_data.show" max-width="600px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">注册</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form>
              <v-text-field
                v-model="register_data.username"
                label="用户名"
                :rules="nameRules"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="register_data.email"
                label="邮箱"
                :rules="emailRules"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="register_data.password"
                label="密码"
                :rules="passwordRules"
                type="password"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="register_data.confirm"
                label="确认密码"
                :rules="confirmRules"
                type="password"
                clearable
                @keyup.enter="login"
              ></v-text-field>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click=";(register_data.show = false), (login_data.show = true)" >前去登录</v-btn >
          <v-btn color="blue darken-1" depressed dark @click="register" :loading="register_data.loading" >注册</v-btn >
          <v-btn color="cancel darken-1" depressed dark @click="register_data.show = false" >取消</v-btn >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--通知-->
    <v-snackbar
      v-model="notification.show"
      :color="notification.color"
      timeout="1500"
      top
    >
      {{ notification.text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="notification.show = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>

    <!--导航栏-->
    <v-app-bar app color="white" class="elevation-3" elevate-on-scroll>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
        style="z-index: 9999; position: absolute;"
      ></v-app-bar-nav-icon>
      <v-tabs :class="{ 'left-box': !$vuetify.breakpoint.smAndDown }" color="grey darken-1" width="100%" centered style="padding-right: 16px">
        <v-tab to="/">
          <h2>RookieWiki</h2>
        </v-tab>
        <v-tab
          v-for="link in $vuetify.breakpoint.smAndDown ? [] : links"
          :key="link.to"
          :to="link.to"
        >
          {{ link.text }}
        </v-tab>
        <v-tab to="/articles" v-if="!$vuetify.breakpoint.smAndDown">
          文章列表
        </v-tab>
      </v-tabs>
      <v-responsive style="margin-left: 40%; max-width: 20%"  v-if="!$vuetify.breakpoint.smAndDown">
        <v-text-field
          label="搜索"
          placeholder="回车以搜索"
          filled
          single-line
          hide-details
          v-model="search_text"
          dense
          clearable
          @click:clear="clear_search"
          @keyup.enter="search"
        ></v-text-field>
      </v-responsive>
      <div class="login-box" v-if="!$vuetify.breakpoint.smAndDown">
         <v-menu bottom v-if="islogin" :offset-y="true">
          <template v-slot:activator="{ on, attrs }">
            <v-avatar
              color="grey darken-1 shrink"
              size="45"
              v-bind="attrs"
              v-on="on"
              class="hidden-sm-and-down"
            >
              <img :src="avatar" @error="default_avatar()" />
            </v-avatar>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in menu"
              :key="index"
              @click="item.action"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <div v-if="!islogin && !$vuetify.breakpoint.smAndDown">
          <v-btn
            class="ma-2"
            tile
            color="white"
            @click.stop="login_data.show = true"
            >登录</v-btn
          >
          <v-btn
            class="ma-2"
            tile
            color="black"
            dark
            @click.stop="register_data.show = true"
            >注册</v-btn
          >
        </div>
      </div>
    </v-app-bar>

    <!-- 移动端菜单 -->
    <v-navigation-drawer fixed v-model="drawer" temporary>
      <v-avatar
        v-if="islogin"
        color="grey darken-1 shrink"
        size="120"
        class="mobile-avatar"
      >
        <img :src="avatar" @error="default_avatar()" />
      </v-avatar>
      <div style="text-align: center; margin: 20px 0px">
        <h2>{{ username }}</h2>
      </div>
      <v-divider v-if="islogin"></v-divider>
      <v-list>
        <v-list-item @click="goto('/')">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>首页</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="link in links"
          :key="link.to"
          @click="goto(link.to)"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="goto('/articles')">
          <v-list-item-icon>
            <v-icon>mdi-playlist-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>文章列表</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <!-- 登录时的菜单 -->
      <v-list v-if="islogin">
        <v-list-item
          v-for="(item, index) in menu"
          :key="index"
          @click="item.action"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <!-- 未登录时的菜单 -->
      <v-list v-if="!islogin">
        <v-list-item @click=";(login_data.show = true), (drawer = false)">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-title>登录</v-list-item-title>
        </v-list-item>
        <v-list-item @click=";(register_data.show = true), (drawer = false)">
          <v-list-item-icon>
            <v-icon>mdi-registered-trademark</v-icon>
          </v-list-item-icon>
          <v-list-item-title>注册</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-text-field
        label="搜索"
        placeholder="回车以搜索"
        filled
        single-line
        hide-details
        dense
        v-model="search_text"
        clearable
        @click:clear="search(search_text = '')"
        style="margin: 10px 10px"
        @keyup.enter="search"
      ></v-text-field>
    </v-navigation-drawer>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <v-footer :padless="true" class="elevation-2">
      <v-card tile width="100%" class="lighten-1 text-center">
        <v-card-text>
          <a href="https://beian.miit.gov.cn/" target="_blank" class="link">
            鄂ICP备20003020号</a
          >
          ©{{ new Date().getFullYear() }} <strong>RookieWiki </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import md5 from 'md5'

export default {
  data: () => ({
    search_text: '',
    verified: false,
    showTop: false,
    avatar: '',
    links: [],
    islogin: false,
    drawer: false,
    username: '',
    email: '',
    login_data: {
      avatar: '',
      username: '',
      password: '',
      show: false
    },
    register_data: {
      username: '',
      email: '',
      password: '',
      confirm: '',
      loading: false,
      show: false
    },
    nameRules: [
      v => !!v || '用户名不可为空',
      v =>
        /^[^+ /?$#&=]{1,30}$/.test(v) ||
        '用户名必须在30个字符以内, 且不能包含+, /, ?, $, #, &, =和空格'
    ],
    emailRules: [
      v => !!v || '邮箱不可为空',
      v => /^.+@.+\..+$/.test(v) || '邮箱格式不正确'
    ],
    passwordRules: [
      v => !!v || '密码不可为空',
      v => /.{6,200}/.test(v) || '密码长度需要在 6-200 之间'
    ],
    notification: {
      show: false,
      text: '',
      color: ''
    },
    permission: 1,
    desktop_menu: false,
    find: {
      show: false,
      loading: false,
      reset: false,
      disabled: false,
      time: '',
      last: '',
      timmer: 0,
      username: ''
    }
  }),
  computed: {
    confirmRules: function () {
      return [
        v => !!v || '请再输入一次密码',
        () =>
          this.register_data.password === this.register_data.confirm ||
          '密码不匹配'
      ]
    },
    menu: function () {
      return [
        {
          title: '新增文章',
          icon: 'mdi-plus',
          action: () => {
            this.goto('/add')
          }
        },
        {
          title: this.username,
          icon: 'mdi-link',
          action: () => {
            this.goto('/user/' + this.username)
          }
        },
        {
          title: '退出登录',
          action: () => {
            localStorage.clear()
            this.islogin = false
            this.notice('退出登录成功')
          },
          icon: 'mdi-logout'
        }
      ]
    }
  },
  methods: {
    clear_search: function () {
      console.log(this.$route.path)
      if (this.$route.path === '/articles') this.search(this.search_text = '')
    },
    reset: async function () {
      this.find.loading = true
      const res = await this.post('find', { username: this.find.username })
      this.notice(res.msg, res.code === 200)
      if (res.code === 200 || res.code === 401) {
        this.find.time = new Date(res.time)
        this.find.last = 5 * 60 - parseInt((new Date() - this.find.time) / 1000)
        this.find.disabled = true
        this.find.timmer = setInterval(() => {
          this.find.last = 5 * 60 - parseInt((new Date() - this.find.time) / 1000)
          if (this.find.last <= 0) {
            this.find.disabled = false
            clearInterval(this.find.timmer)
          }
        }, 1000)
      }
      this.find.loading = false
    },
    search: function () {
      try {
        this.$router.push({ path: '/articles', query: { search: this.search_text, id: Math.random() } })
      } catch {}
    },
    scrollToTop: function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    goto: function (url) {
      if (url !== '.' && url !== this.$router.currentRoute.path) { this.$router.push(url) }
    },
    default_avatar: function () {
      if (this.username) {
        this.avatar = `https://api.multiavatar.com/${this.username}.svg`
      }
    },
    update_info: async function () {
      this.islogin = true
      const res = await this.get('user')
      this.username = res.data.username
      this.email = res.data.email
      this.permission = res.data.permission
      this.verified = res.data.verified
      this.avatar = `https://sdn.geekzu.org/avatar/${md5(
        this.email
      )}?d=404&s=500`
    },
    notice: function (text, success = true) {
      this.notification.text = text
      this.notification.color = success ? 'success' : 'error'
      this.notification.show = true
    },
    login: async function () {
      this.login_data.loading = true
      const res = await this.post('login', {
        username: this.login_data.username,
        password: md5(this.login_data.password + 'rookiewiki')
      })
      this.login_data.loading = false
      this.notice(res.msg, res.code === 200)
      if (res.code === 200) {
        localStorage.setItem('token', res.token)
        this.update_info()
        this.login_data.show = false
        if (this.$route.path === '/401') this.$router.go(-1)
      }
    },
    register: async function () {
      if (
        !/^[^+ /?$#&=]{1,30}$/.test(this.register_data.username) ||
        !/^.+@.+\..+$/.test(this.register_data.email) ||
        !/.{6,200}/.test(this.register_data.password) ||
        this.register_data.confirm !== this.register_data.password
      ) { return }
      this.register_data.loading = true
      const res = await this.post('register', {
        username: this.register_data.username,
        password: md5(this.register_data.password + 'rookiewiki'),
        email: this.register_data.email
      })
      this.register_data.loading = false
      this.notice(res.msg, res.code === 200)
      if (res.code === 200) {
        localStorage.setItem('token', res.token)
        this.update_info(this.register_data.username, this.register_data.email)
        this.register_data.show = false
      }
      if (this.$route.path === '/401') this.$router.go(-1)
    }
  },
  async created () {
    document.getElementById('preloader').classList.add('hidden')
    this.links = (await this.get('navigation')).data
    if (localStorage.getItem('token')) this.update_info()
    window.addEventListener('scroll', () => {
      this.showTop = window.scrollY > 100
    })
  }
}
</script>

<style>
.mobile-avatar {
  display: block;
  margin-left: 27%;
  margin-top: 10%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.05s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.login-box {
  width: 20%;
  position: absolute;
  right: 0px;
  text-align: right;
  padding-right: 20px;
}
.left-box {
  width: 40%;
  position: absolute;
  left: 0px;
  z-index: 999;
  text-align: left;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
