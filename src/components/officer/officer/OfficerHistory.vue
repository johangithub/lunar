<template>
<div id="officerHistory">
    <div class="row">
        <div class="col-md-12">
    <table class="table table-striped table-condensed table-hover">
      <thead>
        <tr>
          <th>DAFSC</th>
          <th>Duty Title</th>
          <th>Unit</th>
          <th>BASE</th>
          <th>MAJCOM</th>
          <th>Level</th>
          <th>State/Country</th>
          <th>Effective Date</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active" v-for="hist in dutyHist">
          <td>{{hist.DAFSC}}</td>
          <td>{{hist.TITLE}}</td>
          <td>{{hist.UNIT}}</td>
          <td>{{hist.LOC}}</td>
          <td>{{hist.MAJCOM_T3}}</td>
          <td>{{hist.CMD_LVL}}</td>
          <td>{{hist.COUNTRYST_T5}}</td>
          <td>{{hist.EFF_DATE | addDash}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
    <div class="row">
        <div class="col-md-4">
    <table class="table table-striped table-condensed table-hover">
      <thead>
        <tr>
          <th>Duty Experience Years</th>
          <th class="col-md-1">Total: {{total_exp}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active" v-for="exp in dutyExp">
        	<td>{{exp.title}}</td>
        	<td>{{exp.years}}</td>
        </tr>
      </tbody>
    </table>
    </div>
        <div class="col-md-2">
        <table class="table table-striped table-condensed table-hover">
          <thead>
            <tr>
              <th>OPR History</th>
            </tr>
          </thead>
          <tbody>
            <tr class="active" v-for="opr in oprHist">
              <td>{{opr}}</td>
            </tr>
          </tbody>
        </table>  
        </div>
        <div class="col-md-6" v-show="showJDA">
            <table  class="table table-striped table-condensed table-hover">
              <thead>
              Joint Duty History
                <tr>
                  <th>JDAMIS Position Number</th>
                  <th>MAJCOM</th>
                  <th>Credit Group</th>
                  <th>Tour Type</th>
                  <th>Start</th>
                  <th>Stop</th>
                </tr>
              </thead>
              <tbody>
                <tr class="active" v-for="joint in jointHist">
                  <td>{{joint.POSN}}</td>
                  <td>{{joint.MAJCOM}}</td>
                  <td>{{joint.CREDIT_GROUP}}</td>
                  <td>{{joint.TOUR_TYPE}}</td>
                  <td>{{joint.START_DATE | addDash}}</td>
                  <td>{{joint.STOP_DATE | addDash}}</td>
                </tr>
              </tbody>
            </table>
        </div>
        </div>
        <div class="row">
        <div class="col-md-3" v-show="showTDY">
            <table class="table table-striped table-condensed table-hover">
              <thead>
              TDY History
                <tr>
                  <th>Type/Inclusive dates/#days/Location/AFSC</th>
                </tr>
              </thead>
              <tbody>
                <tr class="active" v-for="tdy in tdyHist">
                  <td>{{tdy}}</td>
                </tr>
              </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import MAJCOM from '../../../../static/data/majcom.json'
	export default	{
		props:['data'],
		data(){
			return {
				
			}
		},
		computed: {
			total_exp(){
				if (this.data.EXP_TOTAL_DUTY_CALC_YRS){
					return this.data.EXP_TOTAL_DUTY_CALC_YRS.toFixed(1)
				}
				return ''
			},
			oprHist(){
			    var oprHistArray = []
			    for (let i = 1; i<=5;i++){
			        var opr = this.data['OPR_GROUP_'+i]
			        if (opr){
			            //Get rid of white space or period
			            if (opr.replace(/\s|\./g,"").trim().length>0){
			                oprHistArray.push(opr)
			            }
			        }
			    }
			    return oprHistArray
			},
			dutyHist(){
			    var dutyHistArray = []
			    for (let i=1;i<=24;i++){
			        let temp = {
			            	DAFSC: this.data['DUTY_HIST_DAFSC_'+i],
			            	TITLE: this.data['DUTY_HIST_TITLE_'+i],
			            	UNIT: this.data['DUTY_HIST_UNIT_'+i],
			            	LOC: this.data['DUTY_HIST_LOC_T_'+i],
			            	MAJCOM_T3: this.data['DUTY_HIST_MAJCOM_T3_'+i],
			            	CMD_LVL: this.data['DUTY_HIST_CMD_LVL_'+i],
			            	COUNTRYST_T5: this.data['DUTY_HIST_CNTRYST_T5_'+i],
			            	EFF_DATE: this.data['DUTY_HIST_EFF_DATE_'+i]
			        }
			        if (temp.DAFSC && temp.DAFSC.trim()!=''){
			            dutyHistArray.push(temp)                    
			        }
			    
			    }
			    return dutyHistArray
			},
			dutyExp(){
				var dutyExpArray = []
				for (let i=1;i<=10;i++){
					if(this.data['EXP_DUTY_AFS_TITLE_'+i]){
					let temp = {
						title: this.data['EXP_DUTY_AFS_TITLE_'+i],
						years: this.data['EXP_DUTY_CALC_YRS_IN_AFS_'+i].toFixed(1),
					}
						dutyExpArray.push(temp)
					}
				}
				return dutyExpArray
			},
			tdyHist(){
			    var tdyHistArray = []
			    for (let i=1;i<=10;i++){
			        var varname = 'TDY_GROUP_'+i
			        if (this.data[varname]){
			        tdyHistArray.push(this.data[varname])
			        }
			    }
			    return tdyHistArray
			},
			showTDY(){
				if (this.tdyHist.length > 0 && this.tdyHist[0].length>0){
					return true
				}
				return false
			},
			jointHist(){
			    var jointHistArray = []
			    for (let i=1;i<=5;i++){
			        let temp = {
			        	POSN: this.data['JDAMIS_POSN_NUMBER_'+i],
			        	MAJCOM: this.data['JDA_MAJCOM_'+i],
			        	CREDIT_GROUP: this.data['JDA_RSN_CREDIT_GROUP_'+i],
			        	TOUR_TYPE: this.data['JDA_TOUR_TYPE_'+i],
			        	START_DATE: this.data['JDA_START_DATE_'+i],
			        	STOP_DATE: this.data['JDA_STOP_DATE_'+i]
			        }
			        if(temp && temp.POSN){       
			        jointHistArray.push(temp)
			    	}
			    }
			    return jointHistArray
			},
			showJDA(){
				if (this.jointHist && this.jointHist[0]){
					return true
				}
				return false
			}
		},
		filters:{
			addDash: (date)=>{
			    if(date){
			    return date.substr(0,4)+'-'+date.substr(4,2)+'-'+date.substr(6,2) 
			    }
			    return ''
			}
		}
	}
</script>

<style>

</style>

