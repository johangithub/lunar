<template>
    <div id="officerHome">
        <div class="row col-lg-6 col-lg-offset-2">
                <p>OfficerID: {{ $route.params.id }}</p>
        </div>
        <div class="row">            
        <div class="col-lg-4 col-lg-offset-1">
        <form>
        <div class="form-group form-group-sm row">
            <div class="form-inline">
            <label for="name">Name
            <input type="text" class="form-control" id="name" value="Lorem ipsum dolor sit amet" readonly>
            </label>
            <label for="name2">Rank</label>
            <input type="text" class="form-control" id="name2" value="Captain" readonly>
            <label for="name3">Location</label>
            <input type="text" class="form-control" id="name3" value="JBSA Randolph" readonly>
            <label for="name4">Core</label>
            <input type="text" class="form-control" id="name4" value="61A" readonly>
            <label for="name4">Duty AFSC</label>
            <input type="text" class="form-control" id="name4" value="61A" readonly>
            <label for="name4">Secondary AFSC</label>
            <input type="text" class="form-control" id="name4" value="61A" readonly>
            </div>
        </div>
        </form>
        </div>
        <div class="col-lg-4">
        	<form>
        	<div class="form-group form-group-sm row">
        	    <div class="form-inline">
        	    <label for="name">Name
        	    <input type="text" class="form-control" id="name" value="Lorem ipsum dolor sit amet" readonly>
        	    </label>
        	    <label for="name2">Rank</label>
        	    <input type="text" class="form-control" id="name2" value="Captain" readonly>
        	    <label for="name3">Location</label>
        	    <input type="text" class="form-control" id="name3" value="JBSA Randolph" readonly>
        	    <label for="name4">Core</label>
        	    <input type="text" class="form-control" id="name4" value="61A" readonly>
        	    <label for="name4">Duty AFSC</label>
        	    <input type="text" class="form-control" id="name4" value="61A" readonly>
        	    <label for="name4">Secondary AFSC</label>
        	    <input type="text" class="form-control" id="name4" value="61A" readonly>
        	    </div>
        	</div>
        	</form>
        </div>
        </div>
        <div class="row">
        <div class="col-lg-2 col-lg-offset-1">
        <form class="form-horizontal">
        	<div class="form-group form-group-sm">
        		<label for="name2" class="control-label col-xs-2" @mouseenter="tooltipOn" @mouseleave="tooltipOff" title="tooltipOnTop">TFMSD</label>
        		<div class="col-xs-10">
        		<input type="text" class="form-control" id="name2" value="Captain" readonly>
        		</div>
        	</div>
        	<div class="form-group form-group-sm">
        		<label for="name2" class="control-label col-xs-2">TFCSD</label>
        		<div class="col-xs-10">
        		<input type="text" class="form-control" id="name2" value="Captain" readonly>
        		</div>
        	</div>
        	<div class="form-group form-group-sm">
        		<label for="name2" class="control-label col-xs-2">EAD</label>
        		<div class="col-xs-10">
        		<input type="text" class="form-control" id="name2" value="Captain" readonly>
        		</div>
        	</div>
        	<div class="form-group form-group-sm">
        		<label for="name2" class="control-label col-xs-2">DOS</label>
        		<div class="col-xs-10">
        		<input type="text" class="form-control" id="name2" value="Captain" readonly>
        		</div>
        	</div>
        </form>
       </div>
        </div>

     <nav class="navbar navbar-inverse navbar-fixed-bottom">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
            <router-link v-for="i in modules" :to="'/officer/'+$route.params.id+i.link" tag="li">
                <a>{{ i.name }}</a>
            </router-link>
        </ul>
      </div>
    </nav>
</div>
</template>

<script>
	export default	{ data(){
        return {
            modules: [
            {"name": 'Home', "link": '/'},
            {"name": 'Personal', "link": '/personal'},
            {"name": 'Education/Training', "link": '/education_training'},
            {"name": 'Duty History', "link": '/duty_history'},
            {"name": 'Rated', "link": '/rated'},
            {"name": 'ADP', "link": '/adp'},
            {"name": 'Memo', "link": '/memo'}             
        ]
    }
	},
	methods: {
		tooltipOn(){
			console.log('Mouse in')
		},
		tooltipOff(){
			console.log('Mouse out')
		}
	}
}
</script>

<style>
	#officerHome{
		margin-bottom: 50px;
	}

</style>