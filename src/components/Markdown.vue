<template>
  <div :style="article ? 'min-height: 65vh' : ''">
    <components :is="html" class="markdown-body"></components>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import hljs from 'markdown-it-highlightjs'
import latex from '@youxam/markdown-it-katex-x'
import sub from 'markdown-it-sub'
import sup from 'markdown-it-sup'
import container from 'markdown-it-container' // 自定义容器 https://github.com/markdown-it/markdown-it-container
import deflist from 'markdown-it-deflist' // 定义列表 https://pandoc.org/MANUAL.html#definition-lists
import abbr from 'markdown-it-abbr' // 悬停注解 https://github.com/markdown-it/markdown-it-abbr
import ins from 'markdown-it-ins' // ++inserted++
import mark from 'markdown-it-mark' // ==marked==
import lists from 'markdown-it-task-lists' // - [ ] todo
import footnote from 'markdown-it-footnote' // 脚注
import toc from 'markdown-it-toc' // 目录

export default {
  name: 'Markdown',
  props: {
    content: String,
    article: Boolean
  },
  data: () => ({
    md: null
  }),
  computed: {
    html: function () {
      let res = this.md.render(this.content)
      res = res.replace(
        /<a href="(?!http:\/\/|https:\/\/)([^#]*?)">(.*?)<\/a>/g,
        '<router-link to="$1">$2</router-link>'
      )
      res = res.replace(
        /<a href="(?!#)(.*?)">(.*?)<\/a>/g,
        '<a href="$1" target="_blank">$2</a>'
      )
      return {
        template: '<div>' + res + '</div>'
      }
    }
  },
  created () {
    this.md = new MarkdownIt()
    this.md
      .use(hljs)
      .use(latex)
      .use(sub)
      .use(sup)
      .use(deflist)
      .use(abbr)
      .use(ins)
      .use(mark)
      .use(lists)
      .use(footnote)
      .use(toc)
      .use(container, 'hljs-center', {
        render: (tokens, idx) => {
          return tokens[idx].nesting === 1
            ? '<div class="hljs-center">'
            : '</div>\n'
        }
      })
      .use(container, 'hljs-left', {
        render: (tokens, idx) => {
          return tokens[idx].nesting === 1
            ? '<div class="hljs-left">'
            : '</div>\n'
        }
      })
      .use(container, 'hljs-right', {
        render: (tokens, idx) => {
          return tokens[idx].nesting === 1
            ? '<div class="hljs-right">'
            : '</div>\n'
        }
      })
  }
}
</script>

<style scoped>
.markdown-body {
  margin: 20px 0px;
}
</style>
