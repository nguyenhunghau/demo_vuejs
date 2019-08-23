
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Staff Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
     '~/plugins/fontawesome-free/css/all.min.css',
     '~/plugins/datatables/dataTables.bootstrap4.css',
     '~/assets/css/sb-admin.css',
     '~/assets/css/style.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-notifications', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   maxChunkSize: 300000,
    extend (config, ctx) {
    }
  },
  env: {
    api_url: 'http://localhost:8083/demo_vuejs/'
  }
  // router: {
  //   routes: [
  //     {
  //       name: 'index',
  //       path: '/',
  //       component: 'pages/index.vue'
  //     },
  //     {
  //       name: 'chart',
  //       path: '/chart',
  //       component: 'pages/chart.vue'
  //     },
  //     {
  //       name: 'edit-person',
  //       path: '/edit-person/:slug',
  //       component: 'pages/edit-person.vue'
  //     }
  //   ]
  // }
}
