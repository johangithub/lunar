<template>	
	<div>
        <!-- Sidebar -->
        <nav class="navbar navbar-default navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <li class="sidebar-brand">
                <router-link tag="a" to="/" @click.native="toggleSidebar">
                       Welcome
                    </router-link>
                </li>
                <router-link to="/" activeClass="active" tag="li" @click.native="toggleSidebar">
                    <a><i class="fa fa-fw fa-home"></i> Home</a>
                </router-link>
                <li class="dropdown active" v-for="item in moduleList"
                :class="{open: item.toggle}"
                @click="item.toggle = !item.toggle"
                >
                  <a href="#" class="dropdown-toggle" :id="item.module">
                  <i class="fa fa-fw" :class="[item.toggle ? 'fa-minus' : 'fa-plus']"></i> 
                  	{{item.module}} 
                  <span class="caret"></span>
                  </a>
                	<ul class="dropdown-menu" role="menu">
                    <router-link v-for="submodule in item.subModule" :to="'/'+submodule.link" tag="li" @click.native="toggleSidebar">
                    <a>{{ submodule.module }}</a>
                    </router-link>
                	</ul>
                </li>
                <router-link to="/about" activeClass="active" tag="li" @click.native="toggleSidebar">
                    <a><i class="fa fa-fw fa-info-circle"></i> About</a>
                </router-link>
            </ul>
        </nav>
        <!-- /#sidebar-wrapper -->
        <!-- Page Content -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				moduleList: [
				{module: "Officer", subModule: [{module:"Officer Information", link: "officer"},{module: "Authorization Information", link: "officer_auth"},{module: "Career Field Health", link: "officer_cfh"}, {module: "Authorized vs Assigned", link: "officer_authasgn"}], toggle: false},
				{module: "Enlisted", subModule: [{module:"Airman Information", link: "airman"},{module: "Career Field Health", link: "airman_cfh"}], toggle: false},
        {module: "Cadet", subModule: [{module: "Cadet Information", link: "cadet"}, {module: "Cadet EAD Status", link: "cadet_ead"}], toggle: false},
				{module: "Recruit", subModule: [{module:"Recruit Information", link: "recruit"},{module:"Recruiter Information", link: "recruiter"}, {module: "Recruiting SQ Report", link: "recruiting_sq"}], toggle: false}
			]
		}},
    methods: {
      ...mapActions(['toggleSidebar'])
      
    },
    computed: {
      ...mapGetters(['getSidebarClosed'])
    }
	}

</script>
<style scoped>

.nav .open > a {
  background-color: transparent;
}
.nav .open > a:hover {
  background-color: transparent;
}
.nav .open > a:focus {
  background-color: transparent;
}
/*-------------------------------*/
/*           Wrappers            */
/*-------------------------------*/
#sidebar-wrapper {
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  /*background: #1a1a1a;*/
  height: 100%;
  left: 220px;
  margin-left: -220px;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.5s ease;
  width: 0;
  z-index: 1000;
}
#sidebar-wrapper::-webkit-scrollbar {
  display: none;
}

/*-------------------------------*/
/*     Sidebar nav styles        */
/*-------------------------------*/
.sidebar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 220px;
}
.sidebar-nav li {
  display: inline-block;
  line-height: 20px;
  position: relative;
  width: 100%;
}
.sidebar-nav li:before {
  /*background-color: #000;*/
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}

/*color gradient from 01bbff to 004c68*/
.sidebar-nav > li:before {
  /*background-color: #f0f0f0;*/
}
.sidebar-nav li:hover:before {
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 100%;
}
.sidebar-nav li a {
  /*color: #fff;*/
  display: block;
  padding: 10px 15px 10px 30px;
  text-decoration: none;
}
.sidebar-nav li.open:hover before {
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 100%;
}
.sidebar-nav .dropdown-menu {
  /*background-color: #ffffff;*/
  border-radius: 0;
  border: none;
  box-shadow: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
}
.sidebar-nav li a:hover,
.sidebar-nav li a:active,
.sidebar-nav li a:focus,
.sidebar-nav li.open a:hover,
.sidebar-nav li.open a:active,
.sidebar-nav li.open a:focus {
  background-color: transparent;
  /*color: #ccc;*/
  text-decoration: none;
}
.sidebar-nav > .sidebar-brand {
  font-size: 20px;
  height: 65px;
  line-height: 44px;
}


</style>
