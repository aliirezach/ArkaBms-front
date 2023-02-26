const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    devServer: {
    // assetsSubDirectory: 'assets',
    // assetsPublicPath: '/',
    // historyApiFallback: true,
    proxy: {
      '^/api': {

        target: 'http://85.185.161.93:1444',

        ws: true,
      },
      '^/socket.io': {

        target: 'http://localhost:8081',

        ws: true,
      }
    }

  }
})
