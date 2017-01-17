<template>
<div id="officerRatedAcq">
    <div class="row">
    	<div class="col-md-6" v-show="data.RDTM_T!=''">
        <table class="table table-striped table-condensed table-hover">
        	<thead>
        		<tr>
        			<th>Aero rating</th>
        			<th>RDTM</th>
        			<th>Aviation Service Code</th>
        			<th>AVSD</th>
        			<th>Gate Months</th>
        		</tr>
        	</thead>
        	<tbody>
        		<tr class="active">
        			<td>{{data.AERO_RATING_CT}}</td>
        			<td>{{data.RDTM_T}}</td>
        			<td>{{data.AVN_SERVICE_CODE_CT}}</td>
        			<td>{{data.AVN_SERVICE_DATE | addDash}}</td>
        			<td>{{data.GATES_CURR}}</td>
        		</tr>
        	</tbody>
        </table>
        </div>
        	<div class="col-md-3" v-show="data.FLT_HRS_TOTAL > 0">
            <table class="table table-striped table-condensed table-hover">
            	<thead>
            		<tr>
            			<th>Combat Hrs</th>
            			<th>Instructor Hrs</th>
            			<th>Total Hrs</th>
            		</tr>
            	</thead>
            	<tbody>
            		<tr class="active">
            			<td>{{data.FLT_HRS_COMBAT}}</td>
            			<td>{{data.FLT_HRS_INSTR}}</td>
            			<td>{{data.FLT_HRS_TOTAL}}</td>
            		</tr>
            	</tbody>
            </table>
            </div>
    </div>
    <div class="row">
    	<div class="col-md-6" v-show="data.ACP_STATUS_CT!=''">
        <table class="table table-striped table-condensed table-hover">
    		<thead>
    			<tr>
    				<th>ACP Status</th>
    				<th>Eligible</th>
    				<th>Effective</th>
    				<th>Stop</th>
    			</tr>
    		</thead>
    		<tbody>
    			<tr class="active">
    				<td>(AT)Bonus Accepted 25000-50%</td>
    				<td>20JAN16</td>
    				<td>20JAN16</td>
    				<td>19JAN21</td>
    			</tr>
    		</tbody>
    	</table>
    	</div>
    	<div class="col-md-3" v-show="showAcftHist">
        <table class="table table-striped table-condensed table-hover">
    		<thead>
    			<tr>
    				<th>Aircraft</th>
    				<th>Hours</th>
    				<th>Date Last Flown</th>
    			</tr>
    		</thead>
    		<tbody>
    			<tr class="active" v-for="acft in acftHist">
                    <td>{{acft.aircraft}}</td>
                    <td>{{acft.hours}}</td>
                    <td>{{acft.date}}</td>
    			</tr>
    		</tbody>
    	</table>
    	</div>
    </div>
    <div class="row">
    	<div class="col-md-9" v-show="data.AUTH_ACQ_POSN_CAT_T!=''">
    	<h6>Authorized Acquisition Data</h6>
    		    <table  class="table table-striped table-condensed table-hover">
	    		    <thead>
	    		    	<tr>
	    		    		<th>Position Category</th>
	    		    		<th>Position Type</th>
	    		    		<th>Career Level</th>
	    		    		<th>Warrant Amount</th>
	    		    		<th>Special Assignment</th>
	    		    	</tr>
	    		    </thead>
	    		    <tbody>
	    		    	<tr class="active">
	    		    		<td>{{data.AUTH_ACQ_POSN_CAT_T}}</td>
	    		    		<td>{{data.AUTH_ACQ_POSN_TYPE_T}}</td>
	    		    		<td>{{data.AUTH_ACQ_CAREER_LVL}}</td>
	    		    		<td>{{data.ACQ_WARRANT_AMOUNT_T}}</td>
	    		    		<td>{{data.AUTH_ACQ_SPEC_ASGN_T}}</td>
	    		    	</tr>
	    		    </tbody>
    			</table>
    	</div>
    	<div class="col-md-3" v-show="showAcqCert">
    	<h6>Acquisition Certifications</h6>
		    <table class="table table-striped table-condensed table-hover">
				<thead>
					<tr>
						<th>Category</th>
						<th>Level/Date</th>
					</tr>
				</thead>
				<tbody>
					<tr class="active" v-for="(value,key) in acqCerts" v-show="value!=''">
						<td>{{key}}</td>
						<td>{{value}}</td>
					</tr>
				</tbody>
			</table>
    	</div>
    </div>
</div>
</template>

<script>
	export default	{
		props:['data'],
		computed:{
			acftHist(){
				let acftHistArray =[]
				for (let i=1;i<=7;i++){
                    if (this.data['ACFT_HIST_'+i]){
                        let temp = {
                            aircraft: this.data['ACFT_HIST_'+i],
                            hours: this.data['ACFT_HIST_HRS_'+i],
                            date: this.data['ACFT_HIST_DATE_FLOWN_'+i]
                        }
                        acftHistArray.push(temp)
                    }
				}
				return acftHistArray
			},
			showAcftHist(){
				return this.acftHist.length>0 && this.acftHist[0].aircraft
			},
			acqCerts(){
                let acqCertsList = {
                    CONTR: this.data['CONTR_CERT_LVL_GROUP'],
                    FM: this.data['FM_CERT_LVL_GROUP'],
                    LOG: this.data['LOG_CERT_LVL_GROUP'],
                    PM: this.data['PM_CERT_LVL_GROUP'],
                    PQM: this.data['PQM_CERT_LVL_GROUP'],
                    SPRDE: this.data['SPRDE_CERT_LVL_GROUP'],
                    TEST: this.data['TEST_CERT_LVL_GROUP'],
                    APDP_OTHER: this.data['APDP_OTHER_CERT_LVL_GROUP']
                }
				return acqCertsList
			},
			showAcqCert(){
                for (let key in this.acqCerts){
                    if(this.acqCerts[key] != ''){
                        return true
                    }
                }
                return false
				//return this.acqCerts.length>0 && this.acqCerts[0]
			},
            showAuthAcq(){
                return (data.AUTH_ACQ_POSN_CAT_T || data.AUTH_ACQ_POSN_TYPE_T || data.AUTH_ACQ_CAREER_LVL || data.ACQ_WARRANT_AMOUNT_T || data.AUTH_ACQ_SPEC_ASGN_T)
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

