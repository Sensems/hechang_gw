export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  server: {
    port: 3305, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  head: {
    title: '和畅官网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    // '@/plugins/baidu-map',
    '@/assets/css/main.scss',
    { src: "@/plugins/baidu-map", ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  router: {
    scrollBehavior(to, from, savedPosition) {
      // console.log(to)
      if (to.hash) {
        return {
          selector: to.hash
        }
      }else if(savedPosition) {
        return savedPosition
      }else {
        return { x: 0, y: 0 }
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
