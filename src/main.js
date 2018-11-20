import Vue from 'vue'
import App from './App.vue'
// Using $http module
import VueResource from 'vue-resource'
Vue.use(VueResource);
// Using router module
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// Using bootstrap styling
import 'bootstrap/dist/css/bootstrap.css';
import routes from './routes.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router: routes
})
