<!-- 
TODO:
Convert current state/country into actual using FIPS. Should I use long name or abbreviation?
Fix MAJCOM using more descriptive names
Use Assignment Availability, limitation, and block code and format them
 -->
<template>
<div id="officerStatus">
<div class="row">
    <div class="col-md-12">
    
<table class="table table-striped table-condensed table-hover">
  <thead>
  Duty Status
    <tr>
      <th>DAFSC</th>
      <th>Duty Title</th>
      <th>Unit</th>
      <th>BASE</th>
      <th>MAJCOM</th>
      <th>State/Country</th>
      <th>PAS</th>
      <th>POSN</th>
      <th>Effective Date</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active" >
      <td>{{data.DAFSC}}</td>
      <td>{{data.DUTY_TITLE}}</td>
      <td>{{data.UNIT}}</td>
      <td>{{data.DUTYLOC}}</td>
      <td>{{data.MAJCOM_T12}}</td>
      <!-- FIX this using FIPS code -->
      <td>{{data.DUTY_CNTRYST}}</td>
      <td>{{data.PAS}}</td>
      <td>{{data.POSN}}</td>
      <td>{{data.DUTY_STATUS_EFF_DATE | addDash}}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
<div class="row" v-show="data.SAFSC != ''">
    <div class="col-md-12">
<table class="table table-striped table-condensed table-hover">
  <thead>
  Projected Status
    <tr>
      <th>SAFSC</th>
      <th>Location</th>
      <th>PAS</th>
      <th>ASD</th>
      <th>PDD</th>
      <th>RNLTD</th>
      <th>AAN</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active" >
      <td>{{data.SAFSC}}</td>
      <td>{{data.DUTYLOC_PROJ}}</td>
      <td>{{data.PAS_PROJ}}</td>
      <td>{{data.ASD | addDash}}</td>
      <td>{{data.PDD | addDash}}</td>
      <td>{{data.RNLTD | addDash}}</td>
      <td>{{data.AAN}}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
<div class="row">
	<div class="col-md-8">
		<table class="table table-striped table-condensed table-hover">
			<thead>
			Security Clearance
				<tr>
					<th>Clearance</th>
					<th>Clearance Date</th>
					<th>Investigation Basis</th>
				</tr>
			</thead>
			<tbody>
				<tr class="active">
					<td>{{data.SECURITY_CLEARANCE_ELIG_CT}}</td>
					<td>{{data.SECURITY_CLEARANCE_ELIG_DATE | addDash}}</td>
					<td>{{data.SECURITY_INVEST_BASIS_CT}}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="col-md-4" v-show="showAdsc">
		<table class="table table-striped table-condensed table-hover">
			<thead>
			ADSC
				<tr>
					<th>Code</th>
					<th>Reason</th>
					<th>Expire Date</th>
				</tr>
			</thead>
			<tbody>
				<tr class="active" v-for="adsc in adscCodes">
					<td>{{adsc.code}}</td>
					<td>{{adsc.reason}}</td>
					<td>{{adsc.date | addDash}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<div class="row">
	<div class="col-md-3" v-show="showBlockCode">
		<table class="table table-striped table-condensed table-hover">
			<thead>
			Assignment Block Codes
				<tr>
					<th>Block Code</th>
					<th>YYMM</th>
				</tr>
			</thead>
			<tbody>
				<tr class="active" v-for="block in asgnBlockCode">
					<td>{{block.code}}</td>
					<td>{{block.date}}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="col-md-3" v-show="showLimitCode">
		<table class="table table-striped table-condensed table-hover">
			<thead>
			Assignment Limit Codes
				<tr>
					<th>Limit Code</th>
					<th>YYMM</th>
				</tr>
			</thead>
			<tbody>
				<tr class="active" v-for="limit in asgnLimitCode">
					<td>{{limit.code}}</td>
					<td>{{limit.date}}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="col-md-3" v-show="showAvailCode">
		<table class="table table-striped table-condensed table-hover">
			<thead>
			Assignment Avail Codes
				<tr>
					<th>Avail Code</th>
					<th>YYMM</th>
				</tr>
			</thead>
			<tbody>
				<tr class="active" v-for="avail in asgnAvailCode">
					<td>{{avail.code}}</td>
					<td>{{avail.date}}</td>
				</tr>
			</tbody>
		</table>
	</div>

</div>
<div class="row">
	<div class="col-md-4" v-show="showSEI">
		<table class="table table-striped table-condensed table-hover">
		<thead>
		Special Experience Identifiers
			<tr>
				<th>Code</th>
				<th>Experience</th>
			</tr>
		</thead>
		<tbody>
			<tr class="active" v-for="sei in specExp">
				<td>{{sei.code}}</td>
				<td>{{sei.experience}}</td>
			</tr>
		</tbody>
		</table>
	</div>
	<div class="col-md-2" v-show="data.PRP_GROUP != ''">
		<table class="table table-striped table-condensed table-hover">
		<thead>
			PRP
			<tr>
				<th>PRP</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{{data.PRP_GROUP}}</td>
			</tr>
		</tbody>
		</table>
	</div>
	<div class="col-md-2" v-show="data.NEI_1 != ''">
		<table class="table table-striped table-condensed table-hover">
		<thead>
		Nuclear Experience
			<tr>
				<th>Code</th>
			</tr>
		</thead>
		<tbody>
			<tr class="active" v-for="nei in nucExp">
				<td>{{nei.code}}</td>
			</tr>
		</tbody>
		</table>
	</div>
</div>
</div>
</template>

<script>
import moment from 'moment'
import ADSC from '../../../../static/data/adsc.json'
import SEI from '../../../../static/data/sei.json'

	export default	{
		props:['data'],
		data(){
			return {
				list:[
				'AEF, AEF Start/Stop',
				'PRP Status, Date',
				'Special Experience Identifiers',
				'UIF Status, date'
				]
			}
		},
		computed:{
			asgnBlockCode(){
				let blockCodes = []
				if(this.data.BLOCK_GROUP){
					let bg = this.data.BLOCK_GROUP.split(" ");					
					for (let i =0;i<bg.length;i++){
						let block = bg[i].split("/")
						blockCodes.push({code: block[0], date: block[1]})
					}
				}
				return blockCodes
			},
			showBlockCode(){
				return this.asgnBlockCode.length>0
			},
			asgnLimitCode(){
				let limitCodes = []
				if(this.data.ALC_GROUP){
					let lg = this.data.ALC_GROUP.split(" ");					
					for (let i =0;i<lg.length;i++){
						let limit = lg[i].split("/")
						limitCodes.push({code: limit[0], date: limit[1]})
					}
				}
				return limitCodes
			},
			showLimitCode(){
				return this.asgnLimitCode.length>0
			},
			asgnAvailCode(){
				let availCodes = []
				if(this.data.AAC_GROUP){
					let ag = this.data.AAC_GROUP.split(" ");					
					for (let i =0;i<ag.length;i++){
						let avail = ag[i].split("/")
						availCodes.push({code: avail[0], date: avail[1]})
					}
				}
				return availCodes
			},
			showAvailCode(){
				return this.asgnAvailCode.length>0
			},
			adscCodes(){
				let adscList = []
				for(let i=1;i<=6;i++){
					if(this.data['ADSC_'+i]){
						let adsc_code = this.data['ADSC_'+i]
						let adsc_date = this.data['ADSC_DATE_'+i]
						let adsc_reason = ADSC.filter((obj)=>{return obj.adsc==adsc_code})[0].adsc_reason

						let obj = {
							code: adsc_code,
							date: adsc_date,
							reason: adsc_reason
						}

						//Only show ADSC if ADSC is greater than today
						var today = (new Date()).toISOString().slice(0,10).replace(/-/g,"");
						if(obj.date>today){
							adscList.push(obj)
						}
					}
				}
				return adscList
			},
			showAdsc(){
				return this.adscCodes.length>0
			},
			specExp(){
				let specExpList = []
				for (let i=1;i<=10;i++){
					if(this.data['SEI_GEN_'+i]){
						let sei_gen = this.data['SEI_GEN_'+i]
						let sei_val = SEI.filter((obj)=>{return obj.key==sei_gen})[0].val
						let temp ={
							code: sei_gen,
							experience: sei_val
						}
						specExpList.push(temp)
					}
				}
				return specExpList
			},
			showSEI(){
				return this.specExp.length>0
			},
			nucExp(){
				let nucExpList = []
				for (let i=1;i<=3;i++){
					if (this.data['NEI_'+i]){
						nucExpList.push({code: this.data['NEI_'+i]})
					}
				}
				return nucExpList
			}
		},
		filters: {
			addDash: (date)=>{
			    if(date){
			    return date.substr(0,4)+'-'+date.substr(4,2)+'-'+date.substr(6,2) 
			    }
			    return ''
			}
		}
	}
</script>

