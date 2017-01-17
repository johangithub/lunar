<template>
<div>
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<li v-for="item in list">{{item}}</li>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data(){
		return {
			list: [
			'pagination of adp data',
			'Preference, date, recommendation'

			]
		}
	}
}
</script>

