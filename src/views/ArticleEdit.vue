<template>
  <Editor :id="$route.params.id"/>
</template>

<script>
import Editor from '@/components/Editor.vue'
export default {
  name: 'ArticleEdit',
  components: {
    Editor
  }
}
</script>
