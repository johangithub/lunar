<template>
<div id="officerEducationTraining">
<div class="row">
    <div class="col-md-6" v-show="showPME">
    <table class="table table-striped table-condensed table-hover">
      <thead>
        <tr>
          <th>PME</th>
          <th>Method</th>
          <th>YYMM</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active" v-for="pme in pmeHist">
          <td>{{pme.title}}</td>
          <td>{{pme.method}}</td>
          <td>{{pme.date}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="col-md-6">
    <table class="table table-striped table-condensed table-hover">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Level</th>
          <th>Location</th>
          <th>YYMM</th>
          <th>Method</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active" v-for="degree in edHist">
            <td>{{degree.degree}}</td>
            <td>{{degree.level}}</td>
            <td>{{degree.school}}</td>
            <td>{{degree.date}}</td>
            <td>{{degree.method}}</td>
        </tr>
      </tbody>
    </table>
    </div>
</div>
<div class="row">
            <div class="col-md-2" v-show="data.LANG_DLAB_SCORE != ''">
    		<table class="table table-striped table-condensed table-hover" >
    		  <thead>
              DLAB
    		    <tr>
    		      <th>Score</th>
    		      <th>YYMM</th>
    		    </tr>
    		  </thead>
    		  <tbody>
    		    <tr class="active">
    		      <td>{{data.LANG_DLAB_SCORE}}</td>
    		      <td>{{data.LANG_DLAB_DATE}}</td>
    		    </tr>
    		  </tbody>
              </table>
              </div>
            <div class="col-md-4" v-show="showLang">
            <table class="table table-striped table-condensed table-hover" >
    		  <thead>
              DLPT
    		    <tr>
    		      <th>Language</th>
    		      <th>Reading</th>
    		      <th>Listening</th>
    		      <th>Date</th>
    		    </tr>
    		  </thead>
    		  <tbody>
    		    <tr class="active" v-for="language in langHist">
                  <td>{{language.name}}</td>
                  <td>{{language.read}}</td>
                  <td>{{language.listen}}</td>
    		      <td>{{language.date}}</td>
    		    </tr>
    		  </tbody>
    		</table>
            </div>
        <div class="col-md-6" v-show="showTrainingHist">
                <table class="table table-striped table-condensed table-hover">
                    <thead>
                        Training History
                        <tr>
                            <th>Code</th>
                            <th>YYMM</th>
                            <th>Course Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="active" v-for="(hist,index) in trainingHist">
                            <td v-for="entry in hist">{{entry}}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
</div>
<div class="row">
    	<div class="col-md-12"  v-show="showProjTraining">
    			<table class="table table-striped table-condensed table-hover">
    			  <thead>
                  Training Course
    			    <tr>
    			      <th>Projected Course/Start/Grad</th>
    			    </tr>
    			  </thead>
    			  <tbody>
    			    <tr class="active">
    			      <td>{{data.PROJ_TRAINING_GROUP_1}}</td>
    			      <tr>
    			      <td>{{data.PROJ_TRAINING_GROUP_2}}</td>
    			      </tr>
    			      <tr>
    			      <td>{{data.PROJ_TRAINING_GROUP_3}}</td>
    			      </tr>
    			    </tr>
    			  </tbody>
    			</table>
    	</div>
</div>
</div>
</div>
</template>

<script>
import courseList from '../../../../static/data/courses.json'
	export default	{
		props: ['data'],
		data(){
			return{
                courseList
			}
		},
		computed:{
			pmeHist(){
				var pmeHistArray = []
				for (let i=1;i<=5;i++){
                    if (this.data['PME_T_'+i]){
                        let temp = {
                            method: this.data['PME_METHOD_T_'+i],
                            title: this.data['PME_T_'+i],
                            date: this.data['PME_DATE_'+i],
                        }
                        pmeHistArray.push(temp)
                    }
				}
				return pmeHistArray
			},
			showPME(){
				if (this.pmeHist.length > 0 && this.pmeHist[0].title){
					return true
				}
				return false
			},
			edHist(){
				var edHistArray = []
				for (let i=1;i<=2;i++){
                    if (this.data['ACAD_SPEC_CT_'+i]){
                        let temp = {
                            degree: this.data['ACAD_SPEC_CT_'+i],
                            level: this.data['ACAD_EDUC_LEVEL_T_'+i],
                            school: this.data['ACAD_EDUC_INST_T_'+i],
                            date: this.data['ACAD_EDUC_DATE_'+i],
                            method: this.data['ACAD_EDUC_METH_T_'+i]
                        }
                        edHistArray.push(temp)
                    }
				}
				return edHistArray
			},
			langHist(){
				var langHistArray = []
				for (let i=1;i<=5;i++){
                    if(this.data['LANG_ID_T25_'+i]){
                        let temp = {
                            name: this.data['LANG_ID_T25_'+i],
                            read: this.data['LANG_READ_COMP_T_'+i],
                            listen: this.data['LANG_LISTEN_COMP_T_'+i],
                            date: this.data['LANG_TEST_DATE_'+i],
                        }
                        langHistArray.push(temp)
                    }
				}
				return langHistArray
			},
			showLang(){
				if (this.langHist.length>0 && this.langHist[0].name){
					return true
				}
				return false
			},
			trainingHist(){
                var trainingHistArray = []
                let var_list = ['PROF_SPEC_CRSE','PROF_SPEC_CRSE_DATE']
                for (let i=1;i<=24;i++){
                    let temp_list =[]
                    for (let j=0; j<var_list.length;j++){
                        var varname = var_list[j]+'_'+i
                        if (this.data[varname]){
                            temp_list.push(this.data[varname])
                        }
                    }
                    var course_name = temp_list[0];
                    var course_object = this.courseList.filter((obj)=>{
                        return obj.PDS==course_name
                    });
                    if (course_object.length>0){
                        temp_list.push(course_object[0].title)
                    }
                    let course_name = ''
                    trainingHistArray.push(temp_list)
                }
				return trainingHistArray
			},
            showTrainingHist(){
                if (this.trainingHist.length>0 && this.trainingHist[0].length>0){
                    return true
                }
                return false
            },
			showProjTraining(){
				if (this.data.PROJ_TRAINING_GROUP_1){
				return true
				}
				return false
			}
		}
	}
</script>

