<template>
  <Viewer :id="$route.params.id"/>
</template>

<script>
import Viewer from '@/components/Viewer.vue'
export default {
  name: 'Read',
  components: {
    Viewer
  }
}
</script>
