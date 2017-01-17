<!-- Cadet Information Tab 
The information contained here is small enough in my opinion to justify a one template

TODO: 
Disable readonly based on access level by using :readonly. For select components, we need :disabled
Fetch data for detachment and AFSC in the created() hook.
-->

<template>
  <div class="container">

    <div class="row" id="searchBar">
      <div class="col-lg-5 flex">
        <div class="">
          <multiselect 
          v-model="value" 
          deselect-label="Can't remove this value" 
          track-by="fullName" 
          label="fullName" 
          placeholder="Search by Name, ID" 
          :options="cadetList" 
          :searchable="true" 
          :allow-empty="false"
          :multiple="false"
          :optionsLimit="20"
          :resetAfter="true"
          @input="fetchData($event)"
          ><span slot="noResult">Not in the database. Search again</span>
        </multiselect>
      </div>
    </div>
  </div>

  <div id="cadetHome" v-show="readyToDisplay">
    <div class="row nav-tabs" >
      <div class="col-lg-3 form-group form-group-sm">
        <label for="name"></label>
        <input type="text" class="form-control" :value="cadetData.fullName" readonly :style="{color: AllStatus ? 'green' : 'red'}">
      </div>
      <div class="col-lg-12 flex">
        <ul class="nav nav-tabs">
          <li :class="{'active': tabs.Home}" @click="clickTab($event)"><a id="Home" href="#">Main</a></li>
          <li :class="{'active': tabs.Detachment}" @click="clickTab($event)"><a id="Detachment" href="#">Detachment</a></li>
          <li :class="{'active': tabs.Status}" @click="clickTab($event)"><a id="Status" href="#">EAD Status</a></li>
          <li :class="{'active': tabs.Assignment}" @click="clickTab($event)"><a id="Assignment" href="#">Assignment</a></li>
          <li :class="{'active': tabs.PPC}" @click="clickTab($event)"><a id="PPC" href="#">PPC</a></li>
          <li :class="{'active': tabs.Personal}" @click="clickTab($event)"><a id="Personal" href="#">Personal</a></li>
          <li :class="{'active': tabs.Memo}" @click="clickTab($event)"><a id="Memo" href="#">Memo</a></li>
        </ul>
        <div id="myTabContent">
          <transition-group
          enter-active-class="animated fadeIn"
          mode="out-in" appear
          >
          <div class="" v-if="tabs.Home" key="Home">
            <form>
              <div class="col-lg-6 form-group form-group-sm row">
                <div class="form">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" :value="cadetData.fullName"readonly>
                  <label for="name2">Gender</label>
                  <input type="text" class="form-control" id="name2" :value="cadetData.gender" readonly>
                  <label for="name3">Date of Birth</label>
                  <input type="text" class="form-control" id="name3" :value="cadetData.dateBirth" readonly>
                  <label for="name4">Degree</label>
                  <input type="text" class="form-control" id="name4" :value="cadetData.degree"  readonly>
                  <label for="name4">University</label>
                  <input type="text" class="form-control" id="name4" :value="cadetData.university" readonly>
                  <label for="name4">Detachment</label>
                  <input type="text" class="form-control" id="name4" :value="cadetData.detachment" readonly>
                </div>
              </div>

              <div class="col-lg-6 form-group form-group-sm row">
                <div class="form">
                	<label for="name3">AFSC</label>
                	<input type="text" class="form-control" id="name3" :value="cadetData.afsc" readonly>
                  <label for="name">Projected Commission Date</label>
                  <input type="text" class="form-control" id="name" :value="cadetData.dateCommission"readonly>
                  <label for="name2">Projected Graduation Date</label>
                  <input type="text" class="form-control" id="name2" :value="cadetData.dateOfGraduation" readonly>
                  <label for="name4">Project EAD</label>
                  <input type="text" class="form-control" id="name4" :value="cadetData.dateEAD"  readonly>
                  <label for="name4">Projected Base</label>
                  <input type="text" class="form-control" id="name4" :value="cadetData.asgnLocation" readonly>
                  <label for="name4">EAD Status</label>
                  <input type="text" class="form-control" id="name4" :value="[AllStatus ? 'Ready' : 'Not ready']" :style="{color: AllStatus ? 'green' : 'red'}" readonly>
                </div>
              </div>
            </form>
          </div>
          <div class="" v-if="tabs.Detachment" key="Detachment">
            <form>
              <div class="col-lg-6 form-group form-group-sm row flex">
                <div class="form">
                  <label for="name">Detachment</label>
                  <input type="text" class="form-control" id="name" :value="detData.detachment" readonly/>
                  <label for="name2">University</label>
                  <input type="text" class="form-control" id="name2" :value="detData.collegename" readonly/>
                  <label for="name3">City</label>
                  <input type="text" class="form-control" id="name3" :value="detData.collegecode" readonly/>
                  <label for="name">ROTC Region</label>
                  <input type="text" class="form-control" id="name" :value="detData.region" readonly/>
                </div>
              </div>
              <div class="col-lg-6 form-group form-group-sm row flex">
                <div class="form">
                  <label for="name4">Detachment Commander</label>
                  <input type="text" class="form-control" id="name4" :value="detData.detCommander" readonly/>
                  <label for="name4">Detachment POC</label>
                  <input type="text" class="form-control" id="name4" :value="detData.detPOC" readonly/>
                  <label for="name">Detachment Phone Number</label>
                  <input type="text" class="form-control" id="name" :value="detData.detPhone" readonly/>
                  <label for="name">Detachment Email</label>
                  <input type="text" class="form-control" id="name" :value="detData.detEmail" readonly/>
                </div>
              </div>
            </form>
          </div>

          <div class="" v-if="tabs.Status" key="Status">
            <form>
              <div class="col-lg-6 form-group form-group-sm row flex">
                <div class="form">
                   <label for="eadStatus">EAD Address Status</label>
                   <select id="eadStatus" 
                            class="form-control" 
                            v-model="cadetData.statusEAD" 
                            :style="{color: colorStatus(cadetData.statusEAD)}" >
                    <option>Incomplete</option>
                    <option>Complete</option>
                  </select>                    
                  <label for="medicalStatus">Medical Profile Status</label>
                  <select id="medicalStatus" 
                            class="form-control" 
                            v-model="cadetData.statusMedical" 
                            :style="{color: colorStatus(cadetData.statusMedical)}">
                   <option>Incomplete</option>
                   <option>Complete</option>
                 </select>
                  <label for="securityStatus">Security Clearance Status</label>
                  <select id="securityStatus" 
                          class="form-control" 
                          v-model="cadetData.statusSecurity" 
                          :style="{color: colorStatus(cadetData.statusSecurity)}">
                   <option>Incomplete</option>
                   <option>Complete</option>
                 </select>
                 <label for="clearanceType">Security Clearance Required</label>
                 <select name="" id="clearanceType" class="form-control" :disabled="true">
                   <option>Secret</option>
                   <option>Top Secret</option>
                   <option>TS/SCI</option>
                 </select>
                 <label for="name">EAD Address</label>
                 <input type="text" class="form-control" id="name" value="" :readonly="true" />
                 <label for="name">EAD City, State</label>
                 <input type="text" class="form-control" id="name" value="" :readonly="true" />
                 <label for="name">HOR Address</label>
                 <input type="text" class="form-control" id="name" value="" :readonly="true" />
                 <label for="name">HOR City, State</label>
                 <input type="text" class="form-control" id="name" value="" :readonly="true" />
                 <label for="name">Temp Address</label>
                 <input type="text" class="form-control" id="name" value="" :readonly="true" />
                 <label for="name">Temp Address City, State</label>
                 <input type="text" class="form-control" id="name" value="" :readonly="true" />
               </div>
             </div>
             <div class="row">
              <div class="col-lg-6 form-group form-group-sm flex">
                <div class="form">
                  <label for="name">ROTC Contract Date</label>
                  <input type="text" class="form-control" id="name" :value="cadetData.dateROTCContract" :readonly="true"/>
                  <label for="name">Scroll Submission Date</label>
                  <input type="text" class="form-control" id="name" :value="cadetData.dateScrollSubmitted" :readonly="true"/>
                  <label for="name">Scroll Approval Date</label>
                  <input type="text" class="form-control" id="name" :value="cadetData.dateScrollApproved" :readonly="true"/>
                  <label for="name">Commission Date</label>
                  <input type="text" class="form-control" id="name" :value="cadetData.dateCommission" :readonly="true"/>
                  <label for="name">EAD Date</label>
                  <input type="text" class="form-control" id="name" :value="cadetData.dateEAD" :readonly="true"/>
                </div>
              </div>
            </form>
          </div>

          <div class="" v-if="tabs.Assignment" key="Assignment">
            <form>
              <div class="row">
                <div class="col-lg-6 form-group form-group-sm flex">
                  <div class="form">
                    <label for="name">Given AFSC</label>
                    <input type="text" class="form-control" id="name" :value="cadetData.afsc" readonly/>
                    <label for="name">Assigned Unit</label>
                    <input type="text" class="form-control" id="name" :value="cadetData.asgnUnit" readonly/>
                    <label for="name2">Assigned Base</label>
                    <input type="text" class="form-control" id="name2" :value="cadetData.asgnLocation" readonly/>
                    <label for="name2">Assigned MAJCOM</label>
                    <input type="text" class="form-control" id="name2" :value="cadetData.asgnMajcom" readonly/>
                    <label for="name2">Assigned RNLTD</label>
                    <input type="text" class="form-control" id="name2" :value="cadetData.asgnRNLTD" readonly/>
                  </div>
                </div>
                <div class="col-lg-6 form-group form-group-sm flex">
                  <label for="name3">AFPC Assignment Officer</label>
                  <input type="text" class="form-control" id="name3" :value = "asgnTeam.asgnOfficer"readonly/>
                  <label for="name4">AO Phone Number</label>
                  <input type="text" class="form-control" id="name4" :value="asgnTeam.aoPhoneNumber" readonly/>
                  <label for="name4">AO Email</label>
                  <input type="text" class="form-control" id="name4" :value="asgnTeam.aoEmail" readonly/>
                </div>
              </div>
            </form>
            <div class="row">
              <div class="col-lg-6 flex">
                <label for="name4">Initial Training Required</label>
                <div>
                  <p v-for="item in afscData.initialTrainingList">
                    {{item.name}}, {{item.location}}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" v-if="tabs.PPC" key="PPC">
            <div>
              <pre class="language-json"><code>{{ cadetData }}</code></pre>
            </div>
          </div>

          <div class="" v-if="tabs.Personal" key="Personal">
            <form>
              <div class="col-lg-6 form-group form-group-sm row flex">
                <div class="form">
                  <label for="name">Address</label>
                  <input type="text" class="form-control" id="name" :value="cadetData.address" readonly/>
                  <label for="name2">Hometown</label>
                  <input type="text" class="form-control" id="name2" :value="cadetData.hometown" readonly/>
                  <label for="name3">GPA</label>
                  <input type="text" class="form-control" id="name3" :value = "cadetData.GPA" readonly/>
                  <label for="name4">Projected Military Spouse</label>
                  <input type="text" class="form-control" id="name4" :value="cadetData.projectedMilSpouse" readonly/>
                  <label for="name4">Email</label>
                  <input type="text" class="form-control" id="name4" :value="cadetData.email" readonly/>
                  <label for="name4">Phone Number</label>
                  <input type="text" class="form-control" id="name4" :value="cadetData.homePhone" readonly/>
                </div>
              </div>
            </form>
          </div>

          <div v-if="tabs.Memo" key="Memo">
            <br>
            <div class="memoinputarea" v-show="true">
              <textarea name="" id="" cols="30" rows="5" v-model="memoTemp">
              </textarea>
              <br>
              <button class="btn btn-success" @click.prevent="memoSubmitted" type="submit">Submit</button>
              <button class="btn btn-primary" @click.prevent="showModal = true">Save</button>
              <button class="btn btn-default" type="submit">Default</button>
              <br>
              <p v-for="item in memo">{{item.message}} // {{item.author}} // {{item.timestamp.format('LLL')}} <i class="fa fa-times" @click="memoDeleted($event)" :id="item.memoId"></i></p>
            </div>

            <modal v-if="showModal" @close="showModal = false">
              <h5 slot="header">Are you sure?</h5>
            </modal>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import Multiselect from 'vue-multiselect'
import modal from './modal.vue'
import moment from 'moment'
import cadetList from '../../../data/rawdata/cadet_list.json'

//db = firebase.database()

export default {

  created(){

        //Sort only once using created hook
        this.memo.sort((a,b)=> {return b.timestamp - a.timestamp})
        //Quick hack to generate memoId
        this.memo.forEach((data)=>{
          data.memoId = data.timestamp.format('YYMMDDHHMM')+data.message.slice(0,5)
        })
      },
      components:{
        modal,
        Multiselect
      },
      data(){
        return {
          value: '',
          cadetList,
          showModal: false,
          searchInput: '',
          cadetData: '',
          memo: [
          {'timestamp': moment('20111129 16:30', 'YYYYMMDD HH:mm'), 'message': 'Entered Into System', 'author': 'TSgt Michael Johnson'},
          {'timestamp': moment('20130329 16:30', 'YYYYMMDD HH:mm'), 'message': 'Got his AFSC' , 'author': 'TSgt William Cruise'},
          {'timestamp': moment('20150409 12:30', 'YYYYMMDD HH:mm'), 'message': 'Found out his base', 'author': 'Isaac Cameron'},
          {'timestamp': moment('20120529 6:30', 'YYYYMMDD HH:mm'), 'message': 'Fixed in the System', 'author': 'Isaac Cameron'}
          ]
          ,
          detData: '',
          asgnTeam: '',
          afscData: {
            initialTrainingList: [
            {name: 'ORSAMAC', location: 'Fort Lee', duration: '6 weeks'},
            {name: 'SERE', location: 'Fairchild', duration: '4 weeks'}
            ]
          },
          tabs: {
           Home: true,
           Detachment: false,
           Status: false,
           Assignment: false,
           PPC: false,
           Personal: false,
           Memo: false
         },
         currentUser: 'Joe Han',
         memoTemp: '',
         readyToDisplay: false
       }
     },
     methods: {
      clickTab($event){
        var target = $event.target.id
        for (var key in this.tabs){
          if (key == target){
            this.tabs[key] = true
          }
          else{
            this.tabs[key] = false
          }
        }
      },

      memoSubmitted(){
       var rightNow = moment()
       var memoList = this.memo
       var memo = {'timestamp': rightNow, "message": this.memoTemp, "author": this.currentUser}
       memo.memoId = memo.timestamp.format('YYMMDDHHMM')+memo.message.slice(0,5)
       memoList.unshift(memo)
       this.memoTemp = ''
     },
     memoDeleted($event){
      this.memo.forEach((item,index)=> {
        if (item.memoId == $event.target.id){
          this.memo.splice(index,1)
        }
      })
    },
    fetchData($event){
      this.$http.get('cadets/'+$event.ID+'.json').then((response)=>response.json())
      .then((data)=>{
        var dateList=['dateBaseAssigned', 'dateBirth', 'dateCommission', 'dateEAD', 'dateProjectedMarriage', 'dateROTCContract', 'dateRecord', 'asgnRNLTD','dateScrollSubmitted','dateScrollApproved']
        for (let i = 0;i<dateList.length;i++){
          let start = moment([1960,1,1])
          data[dateList[i]] = start.add(data[dateList[i]],'days').format('L')
        }
        this.cadetData = data
      }).then(()=>{
        this.$http.get('detachments/'+this.cadetData.detachment+'.json').then((response)=>response.json()).then((data)=>{
          this.detData = data
        }).then(()=>{
          this.$http.get('asgnTeam/'+this.cadetData.afsc+'.json').then((response)=>response.json()).then((data)=>{
            this.asgnTeam = data
          }).then(()=>{this.readyToDisplay = true})
        })
      })
    },
    colorStatus(status){
      return status == 'Complete' ? 'green' : 'red'
    }
  },
  computed: {
    dataready(){
      return this.$store.dataready
    },
    AllStatus(){
      if (this.cadetData.statusEAD == 'Complete' && this.cadetData.statusMedical == 'Complete' && this.cadetData.statusSecurity == 'Complete'){
        return true
      }
      else {
        return false
      }
    }

  }
}
</script>
<style scoped>
  #searchBar {
    margin: 60px 0 20px 0;
  }

  a {
    text-decoration: none;
  }

  label {
   margin-bottom: 0px !important;
   margin-top: .8rem;
 }

/*Changes the color of dropdown menu for EAD status*/
select>option{
  color: black;
}

 .fa-times{
  cursor: pointer;
}

  #cadetHome {
    padding: 1rem;
    background: white;
  }

  .container {
    padding-bottom: 20rem;
  }

  textarea {
    border: solid 1px #ccc;
  }
</style>
<style>
  .multiselect__input {
    background: none !important;
    height: 37px;
    width: 30rem;
  }

  .multiselect__tags{
    background: none !important;
    border: none !important;
  }


  .nav-tabs a{
    font-size: 2rem !important;
  }
</style>
