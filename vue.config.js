const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          secure:false,
          pathRewrite: {'^/api': '/'},
          logLevel: 'debug'
        },
      },
    },
  },
})
