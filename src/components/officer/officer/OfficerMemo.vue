<template>
<div>
    <div class="row">
        <div class="col-md-8">
        <h6>I check for variables here, for now</h6>
        <form>
        <div class="form-control">
		<input type="text" v-model="value" placeholder="Search Variable name">
		</div>
		</form>
		<ul class="list-unstyled">
			<li v-for="item in filteredData">{{item.varname}}: {{item.value}}</li>
		</ul>
        </div>
    </div>
      
</div>
</template>

<script>
	export default	{
		props:['data'],
		data(){
			return {
				value: ''
			}
		},
		computed: {
			filteredData(){
				var list = []
				for (var key in this.data){
					if (key.toUpperCase().includes(this.value.toUpperCase())){
						list.push({"varname":key, "value": this.data[key]})
					}
				}
				return list
			}

		}

	}
</script>

<style scoped>
div.form-control{
	margin-bottom: 10px !important;
}
</style>