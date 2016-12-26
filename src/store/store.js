import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({

	state: {
		sidebarClosed: true
	},
	mutations:{
		toggleSidebar: (state) =>{
			state.sidebarClosed = !state.sidebarClosed
		}
	}
})