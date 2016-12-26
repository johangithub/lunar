<template>
  <div id="wrapper" :class="{toggled: !sidebarClosed}">
  <div :class="overlay"></div>
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
      return this.$store.state.sidebarClosed
    },
    
    overlay() {
      return this.$store.state.sidebarClosed ? '' : 'overlay'
    }
  }
}
</script>

<style>
@import "http://designmodo.github.io/Flat-UI/dist/css/flat-ui.min.css";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";
@import "https://daneden.github.io/animate.css/animate.min.css";

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
  position: absolute;
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
}
</style>