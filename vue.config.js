const PLUGIN_HOME = 'http://zc-vue-demo.netlify.app/'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProduction ? PLUGIN_HOME : '/',
}
