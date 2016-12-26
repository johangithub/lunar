// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import App from './App'
import { routes } from './routes.js'
import { store } from './store/store.js'

//Configure routes
Vue.use(VueRouter);

//Configure HTTP API
Vue.use(VueResource)

Vue.http.options.root = "https://fir-tutorial-2.firebaseio.com/"

const router = new VueRouter({
	mode: 'history',
	routes
})


// This simulates clicking of the hamburger globally. Will be problematic later when navigating between routes
// While the sidebar is closed
router.beforeEach((to, from, next) => {
	console.log('Global Routing from ' + from.path + ' to ' + to.path)
	next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  rener: h => h(app)
})
