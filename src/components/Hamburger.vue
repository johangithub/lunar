<template>
<button type="button" class="hamburger animated fadeInLeft" :class="hamburgerClosed" @click="toggleSidebar" > 
    <span class="hamb-top"></span>
    <span class="hamb-middle"></span>
    <span class="hamb-bottom"></span>
</button>
</template>
<script>
	export default {
	methods: {
		toggleSidebar(){
		  this.$store.commit('toggleSidebar')
		}
	},
	computed: {
		hamburgerClosed() {
		  return this.$store.state.sidebarClosed ? 'is-closed' : 'is-open'
		}
	}
	}
</script>
<style scoped>
	/*-------------------------------*/
    /*       Hamburger-Cross         */
    /*-------------------------------*/
    .hamburger {
      background: transparent;
      border: none;
      display: block;
      height: 32px;
      margin-left: 15px;
      position: fixed;
      top: 20px;
      width: 32px;
      z-index: 999;
    }
    .hamburger:hover {
      outline: none;
    }
    .hamburger:focus {
      outline: none;
    }
    .hamburger:active {
      outline: none;
    }
    .hamburger.is-closed:before {
      -webkit-transform: translate3d(0, 0, 0);
      -webkit-transition: all 0.35s ease-in-out;
      content: '';
      display: block;
      font-size: 14px;
      line-height: 32px;
      opacity: 0;
      text-align: center;
      width: 100px;
    }
    .hamburger.is-closed:hover before {
      -webkit-transform: translate3d(-100px, 0, 0);
      -webkit-transition: all .35s ease-in-out;
      display: block;
      opacity: 1;
    }
    .hamburger.is-closed:hover .hamb-top {
      -webkit-transition: all .35s ease-in-out;
      top: 0;
    }
    .hamburger.is-closed:hover .hamb-bottom {
      -webkit-transition: all .35s ease-in-out;
      bottom: 0;
    }
    .hamburger.is-closed .hamb-top {
      -webkit-transition: all .35s ease-in-out;
      background-color: rgba(0, 0, 0, 0.7);
      top: 5px;
    }
    .hamburger.is-closed .hamb-middle {
      background-color: rgba(0, 0, 0, 0.7);
      margin-top: -2px;
      top: 50%;
    }
    .hamburger.is-closed .hamb-bottom {
      -webkit-transition: all .35s ease-in-out;
      background-color: rgba(0, 0, 0, 0.7);
      bottom: 5px;
    }
    .hamburger.is-closed .hamb-top,
    .hamburger.is-closed .hamb-middle,
    .hamburger.is-closed .hamb-bottom,
    .hamburger.is-open .hamb-top,
    .hamburger.is-open .hamb-middle,
    .hamburger.is-open .hamb-bottom {
      height: 4px;
      left: 0;
      position: absolute;
      width: 100%;
    }
    .hamburger.is-open .hamb-top {
      -webkit-transform: rotate(45deg);
      -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.73, 1, 0.28, 0.08);
      background-color: #fff;
      margin-top: -2px;
      top: 50%;
    }
    .hamburger.is-open .hamb-middle {
      background-color: #fff;
      display: none;
    }
    .hamburger.is-open .hamb-bottom {
      -webkit-transform: rotate(-45deg);
      -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.73, 1, 0.28, 0.08);
      background-color: #fff;
      margin-top: -2px;
      top: 50%;
    }
    .hamburger.is-open:before {
      -webkit-transform: translate3d(0, 0, 0);
      -webkit-transition: all 0.35s ease-in-out;
      color: #000;
      content: '';
      display: block;
      font-size: 14px;
      line-height: 32px;
      opacity: 0;
      text-align: center;
      width: 100px;
    }
    .hamburger.is-open:hover before {
      -webkit-transform: translate3d(-100px, 0, 0);
      -webkit-transition: all 0.35s ease-in-out;
      display: block;
      opacity: 1;
    }

</style>