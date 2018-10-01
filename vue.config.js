module.exports = {
  indexPath: '../index.html',
  assetsDir: './dist',

  chainWebpack: config => {
    config.module
      .rule('fonts')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 1 }))
  }
}
