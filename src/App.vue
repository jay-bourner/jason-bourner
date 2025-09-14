<template>
  <Sidebar />
  <main>
    <router-view/>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  components: { Sidebar }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 300px;

  @include breakpoint(lg_1) {
    margin-left: 150px;
    justify-content: left;
    margin: 0 10px;
  }
}

</style>
