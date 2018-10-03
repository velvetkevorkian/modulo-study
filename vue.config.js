module.exports = {
  baseUrl: '',
  outputDir: 'modulo-study',

  chainWebpack: config => {
    config.module
      .rule('fonts')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 1 }))
  }
}
