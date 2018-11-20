import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css';
import routes from './routes.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router: routes
})
