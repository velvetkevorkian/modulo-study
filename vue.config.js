module.exports = {
  baseUrl: '/labs/modulo-study',
  indexPath: '../index.html',

  chainWebpack: config => {
    config.module
      .rule('fonts')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 1 }))
  }
}
