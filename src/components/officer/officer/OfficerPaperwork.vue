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
			'upload and download file',
			'Dropzone.js'
			]
		}
	}
}
</script>

