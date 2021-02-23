<template>
  <v-main class="lighten-3">
    <v-container>
      <div class="white elevation-2 text-center box">
        <h1 style="margin: 20px">重置密码</h1>
        <v-text-field
            label="新密码"
            v-model="password"
            type="password"
            :rules="passwordRules"
            clearable
        ></v-text-field>
        <v-text-field
            label="确认密码"
            type="password"
            :rules="confirmRules"
            v-model="confirm_password"
            clearable
            @keyup.enter="submit"
        ></v-text-field>
        <v-btn depressed block style="margin-top: 20px" color="black" dark @click="submit">确认</v-btn>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import md5 from 'md5'

export default {
  name: 'Reset',
  data: () => ({
    confirm_password: '',
    password: '',
    passwordRules: [
      v => !!v || '密码不可为空',
      v => /.{6,200}/.test(v) || '密码长度需要在 6-200 之间'
    ]
  }),
  computed: {
    confirmRules: function () {
      return [
        v => !!v || '请再输入一次密码',
        () =>
          this.password === this.confirm_password ||
          '密码不匹配'
      ]
    },
    app: function () {
      return this.$parent.$parent
    }
  },
  methods: {
    submit: async function () {
      console.log(this.$route.query.token)
      if (!/.{6,200}/.test(this.password) || this.password !== this.confirm_password) return this.app.notice('密码格式不正确', false)
      const res = await this.post('reset', {
        password: md5(this.password + 'rookiewiki'),
        token: this.$route.query.token
      })
      this.app.notice(res.msg, res.code === 200)
      if (res.code === 200) this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.box {
  max-width: 90%;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  width: 300px;
  height: 340px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
