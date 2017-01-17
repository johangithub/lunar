<template>
  <div id="wrapper" :class="{toggled: !sidebarClosed}">
  <transition 
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"> 
  <div class="overlay" v-if="overlay"
  ></div>
  </transition>
    <app-hamburger></app-hamburger>
    <app-sidebar></app-sidebar>
    <div id="page-content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Hamburger from './components/Hamburger'

export default {
  components: {
    appSidebar: Sidebar,
    appHamburger: Hamburger
  },
  name: 'app',
  methods: {
  
  },
  computed: {
    sidebarClosed() {
      return this.$store.getters.getSidebarClosed
    },
    
    overlay() {
      return this.$store.getters.getSidebarClosed ? false : true
    }
  }
}
</script>

<style>
@import "../static/css/font-awesome.min.css";
@import "../static/css/animate.css";
/*-------------------------------*/
/*           VARIABLES           */
/*-------------------------------*/
body {
  position: absolute;
  overflow-x: hidden;
}
body,
html {
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;
}

#wrapper {
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  padding-left: 0;
  transition: all 0.5s ease;
}
#wrapper.toggled {
  padding-left: 220px;
}
#wrapper.toggled #sidebar-wrapper {
  width: 220px;
}
#wrapper.toggled #page-content-wrapper {
  margin-right: -220px;
}

/*-------------------------------*/
/*          Dark Overlay         */
/*-------------------------------*/
.overlay{
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
</style>