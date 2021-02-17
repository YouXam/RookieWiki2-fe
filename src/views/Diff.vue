<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet class="white" style="padding: 10px; min-height: 65vh">
        <h1 v-if="error">{{ msg }}</h1>
        <div v-else>
          <v-container>
            <v-row>
              <v-col cols="12"  sm="6">
                <v-select
                  :items="items"
                  v-model="ashow"
                  label="A"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="items"
                  v-model="bshow"
                  label="B"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12"  sm="6">
                <h1 class='text-center'>{{ historyA.data.title }}</h1>
              </v-col>
              <v-col cols="12" sm="6">
                <h1 class='text-center'>{{ historyB.data.title }}</h1>
              </v-col>
            </v-row>
            <v-container>
              <Markdown :content="content" />
            </v-container>
          </v-container>
        </div>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script>
import Diff from 'vue-jsdiff'
import Markdown from '@/components/Markdown.vue'
export default {
  name: 'Diff',
  components: {
    Markdown
  },
  data: () => ({
    article_id: '',
    aid: '',
    bid: '',
    error: '',
    ashow: '',
    bshow: '',
    content: '',
    historyA: {
      data: {
        content: '',
        title: ''
      }
    },
    historyB: {
      data: {
        content: '',
        title: ''
      }
    },
    histories: []
  }),
  async created () {
    document.title = 'RookieWiki - 比较'
    this.article_id = this.$route.params.article_id
    const r = await this.get('article/' + this.article_id + '/history/')
    if (r.code !== 200) {
      this.error = true
      this.msg = r.code + ' ' + r.msg
    } else this.histories = r.histories
    await this.update()
    this.$watch('ashow', function () { this.goto() })
    this.$watch('bshow', function () { this.goto() })
  },
  computed: {
    items: function () {
      const res = []
      for (const i of this.histories) {
        res.push(`#${i.num} ${i.log ? '-' : ''} ${i.log}`)
      }
      return res
    }
  },
  methods: {
    goto: function () {
      const aid = /#(\d+) /.exec(this.ashow)[1]
      const bid = /#(\d+) /.exec(this.bshow)[1]
      if (this.$route.query.aid !== aid || this.$route.query.bid !== bid) {
        this.$router.push({ query: { aid, bid } })
      }
      this.update()
    },
    update: async function () {
      this.aid = this.$route.query.aid
      this.bid = this.$route.query.bid
      const a = await this.get('article/' + this.article_id + '/history?num=' + this.aid)
      const b = await this.get('article/' + this.article_id + '/history?num=' + this.bid)
      if (a.code === 200 && b.code === 200) {
        this.historyA = a.history
        this.historyB = b.history
        this.ashow = `#${this.historyA.num} ${this.historyA.log ? '-' : ''} ${this.historyA.log}`
        this.bshow = `#${this.historyB.num} ${this.historyB.log ? '-' : ''} ${this.historyB.log}`
      } else {
        this.error = true
        this.msg = a.code + ' ' + a.msg + '|' + b.code + ' ' + b.msg
      }
      const list = Diff.diffLines(this.historyA.data.content, this.historyB.data.content)
      const res = []
      for (const i of list) {
        const s = i.value.slice(0, i.value.length - 1).split('\n')
        if (i.added) {
          for (const j of s) {
            res.push('+' + j)
          }
        } else if (i.removed) {
          for (const j of s) {
            res.push('-' + j)
          }
        } else {
          for (const j of s) {
            res.push(' ' + j)
          }
        }
      }
      this.content = '``````````diff\n' + res.join('\n') + '\n``````````'
    }
  }
}
</script>

<style scoped>
</style>
