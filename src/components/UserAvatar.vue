<template>
  <v-img :src="avatar" :max-width="maxWidth" @error="default_avatar()" />
</template>

<script>
import md5 from 'md5'

export default {
  name: 'UserAvatar',
  props: {
    maxWidth: String,
    username: String,
    email: String
  },
  data: () => ({
    avatar: ''
  }),
  methods: {
    default_avatar: function () {
      if (this.username_c) {
        this.avatar = `https://api.multiavatar.com/${this.username_c}.svg`
      }
    },
    update: function () {
      if (this.email_c) this.avatar = `https://sdn.geekzu.org/avatar/${md5(this.email_c)}?d=404&s=500`
      else this.default_avatar()
    }
  },
  computed: {
    maxWidth_c: function () { return this.maxWidth },
    username_c: function () { return this.username },
    email_c: function () { return this.email }
  },
  watch: {
    username_c: function () { this.update() },
    email_c: function () { this.update() }
  }
}
</script>
