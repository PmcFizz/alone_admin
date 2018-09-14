'use strict'

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      //设置本地代理访问接口
      '/api': {
        target: 'http://115.159.52.223:3000',  // 线上服务
        // target: 'http://localhost:3000',   // 本地服务
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    devtool: 'eval-source-map',
    cacheBusting: true,
    cssSourceMap: false,
  }
}
