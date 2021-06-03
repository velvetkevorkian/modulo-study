module.exports = {
  baseUrl: '',
  outputDir: 'docs',

  chainWebpack: config => {
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1 }))
  }
}
