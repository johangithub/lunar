import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
	state: {
		sidebarClosed: true,
		currentOfficerData: {},
		currentCadetData: {},
		dataready: false
	},
	getters: {
		getSidebarClosed: (state) => {
			return state.sidebarClosed
		},
		getOfficerData: (state)=>{
			return state.currentOfficerData
		}
	},
	mutations:{
		toggleDataready: (state) => {
			state.dataready = !state.dataready
		},
		toggleSidebar: (state) => {
			state.sidebarClosed = !state.sidebarClosed
		},
		fetchCadetData: (state, value) =>{
			this.$http.get('cadets/'+value+'.json').then((response)=>response.json(),(err)=>{console.log('errored at first')})
			.then((data)=>{
				console.log(data)
			  state.currentCadetData = data
			}, (err)=> {console.log('error at second step')})
		}
	},
	actions: {
		toggleSidebar: ({commit}) => {
			commit('toggleSidebar')
		},
		fetchCadetDataAction: ({commit}, value) =>{
			commit('fetchCadetData', value)
		}
	}
})