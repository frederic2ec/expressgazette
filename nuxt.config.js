import webpack from 'webpack'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + 'The Express Gazette',
    title: 'The Express Gazette' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'News, Politics, Science, Entertainment, Business' || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: 'animate.css/animate.css', lang: 'css' },
    { src: '@fortawesome/fontawesome-free/css/all.css', lang: 'css' },
    {
      src: 'material-design-icons-iconfont/dist/material-design-icons.css',
      lang: 'css'
    },
    {
      src: 'typeface-roboto/index.css',
      lang: 'css'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    '~plugins/formatDate.js',
    { src: '~/plugins/vuex-persist', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/google-adsense',
    '@nuxtjs/google-analytics'
  ],
  devModules: [
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {},

  'google-adsense': {
    id: '5159235346945401',
    pageLevelAds: true
  },
  googleAnalytics: {
    id: 'UA-33196438-6'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  }
}
