const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "@/assets/sass/mixins/breakpoints.scss" as *;`
      }
    }
  }
})
