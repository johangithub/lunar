// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import { routes } from './routes.js'
import { store } from './store/store.js'

//Configure routes
Vue.use(VueRouter);

//Configure HTTP API
Vue.use(VueResource)
Vue.http.options.root = "https://lunar-f8ef6.firebaseio.com"

const router = new VueRouter({
	mode: 'history',
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { 
    App
   },
  rener: h => h(app)
})
