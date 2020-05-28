module.exports = {
  server: { 
    port: 6000, // default: 3000
    // host: '' // default: localhost,
    useOutputCacheTagging: true,
    useOutputCache: true
  },
  plugins: [
    { src: '~plugins/maskedInput', mode: 'client' },
    { src: '~plugins/mobileDetect', mode: 'client' },
    { src: '~plugins/lazyload', mode: 'client' },
    { src: '~plugins/scrollto', mode: 'client' },
    { src: '~plugins/services', mode: 'client' },
    { src: '~plugins/yandexMap', mode: 'client' },
    { src: '~plugins/axios', mode: 'client' }
  ],
  modules: [
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '61148428',
        webvisor: true
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ]
  ],
  /*
   ** Headers of the page
   */
  head: {
    title:
      'Автосервис Auto-Trackcom - ремонт легкового и коммерческого транспорта',
    meta: [
      { charset: 'utf-8' },
      { name: 'yandex-verification', content: '1d1a47431cdb06c1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:image', content: '/img/logo-short.jpg' }
    ],
    link: [{ rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
