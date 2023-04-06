const bodyParser = require("body-parser");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-project",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-blog-6369d-default-rtdb.firebaseio.com",
    credentials: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  //hand writen code for learn
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-blog-6369d-default-rtdb.firebaseio.com",
    fbAPIKey: "AIzaSyB1gYv_V0FljrhbdESDK498gox59YXqM0o",
  },

  //hand writen code for learn not necessary
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       path: "*",
  //       component: resolve(__dirname, "pages/index.vue"),
  //     });
  //   },
  //   linkActiveClass: "active",
  // },
  // srcDir: 'client-app/',
  // rootDir: '/',
  transition: {
    name: "fade",
    mode: "out-in",
  },
  // router: {
  //   middleware: "log",
  //   // middleware: "auth",
  // },
  serverMiddleware: [bodyParser.json(), "~/api"],
};
