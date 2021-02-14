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
      <h1 v-if="error">{{ msg }}</h1>
      <div v-else>
        <v-pagination
          v-model="page"
          :length="length"
          total-visible="10"
        ></v-pagination>
        <v-timeline :dense="true">
          <v-timeline-item
            v-for="(item, index) in histories"
            :key="index"
            :small="true"
          >
            <v-card class="elevation-2" @click="1">
              <v-card-title class="headline" v-if="item.log">
                {{ item.log }}
              </v-card-title>
              <v-card-title>
                <v-checkbox
                  v-model="item.state.title"
                  label="标题"
                  hide-details
                  disabled
                  class='checkbox'
                ></v-checkbox>
                <v-checkbox
                  v-model="item.state.content"
                  label="内容"
                  hide-details
                  disabled
                  class='checkbox'
                ></v-checkbox>
                <v-checkbox
                  v-model="item.state.visibility"
                  label="可见性"
                  hide-details
                  disabled
                  class='checkbox'
                ></v-checkbox>
              </v-card-title>
              <v-card-text>
                {{ item.user }} 修改于 {{ new Intl.DateTimeFormat("zh-CN", {year: "numeric", month: "2-digit", day: "2-digit", hour: 'numeric', minute: '2-digit', second: '2-digit'}).format(new Date(item.date)) }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        <v-pagination
          v-model="page"
          :length="length"
          total-visible="10"
        ></v-pagination>
      </div>
    </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'Histories',
  data: () => ({
    error: false,
    msg: '',
    page: 1,
    length: 1,
    article_id: '',
    active_tab: 2,
    histories: [],
    tabs: [
      { name: '阅读', to: '..' },
      { name: '编辑', to: '../edit' },
      { name: '历史记录', to: '.' }
    ]
  }),
  methods: {
    goto: function (url) {
      if (url !== '.' && url !== this.$router.currentRoute.path) this.$router.push(url)
    },
    update: async function () {
      const res = await this.get('article/' + this.article_id + '/history?page=' + this.page)
      if (res.code === 200) {
        this.histories = res.histories
        this.length = parseInt((res.total - 1) / (res.size || 100)) + 1
      } else {
        this.error = true
        this.msg = res.code + ' ' + res.msg
      }
    }
  },
  async created () {
    this.page = parseInt(this.$route.query.page) || 1
    this.$watch('page', function (v) {
      this.$router.push({ query: { page: v } })
      this.update()
    })
    this.article_id = this.$route.params.id
    this.tabs[0].to = `/article/${this.article_id}`
    this.tabs[1].to = `/article/${this.article_id}/edit`
    this.update()
  },
  watch: {
    title: function () {
      document.title = 'RookieWiki - 历史记录 - ' + this.title
    }
  }
}
</script>

<style scoped>
.checkbox {
  margin: 0px 20px;
}
</style>
