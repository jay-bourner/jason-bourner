<template>
  
</template>

<script>
import { ref } from 'vue'
import ABOUT from '../../data/aboutDB.js'

export default {
  name: 'AboutView',
  components: {
  },
  setup() {
    const about = ref(ABOUT)

    return {
      about
    }
  }
}
</script>

<style>

</style>