<template>
<div class="container">
    <div class="row" id="searchBar">
      <div class="col-md-5 flex">
        <multiselect 
        v-model="value" 
        deselect-label="Can't remove this value" 
        track-by="fullName" 
        label="fullName"
        :show-labels="false"
        placeholder="Search by Name, ID" 
        :options="officerList" 
        :searchable="true" 
        :allow-empty="false"
        :multiple="false"
        :optionsLimit="500"
        :resetAfter="true"
        @input="fetchData($event)"
        ><span slot="noResult">Not in the database. Search again</span>
        <template slot="option" scope="props">
      <div class="option__desc">
      <span class="option__title">{{ props.option.GRADE_T }}</span>
      <span class="option__small">{{ props.option.fullName }}</span></div>
    </template>
        </multiselect>
    </div>
  </div>

    <div class="row nav-tabs" id="officerHome" v-show="readyToDisplay">
        <div class="col-md-9 form-group form-group-sm">
          <label for="name"></label>
          <input type="text" class="form-control" :value="officerData.GRADE_T + ' '+officerData.fullName + ' 123456789 ' + officerData.id" readonly>
        </div>
        <div class="col-md-12 flex">
            <ul class="nav nav-tabs">
                <li 
                :class="{'active': tabs[module.name]}" 
                v-for="module in modules"
                @click="clickTab($event)"
                :id="module.name"
                ><a :id="module.tabId" href="#">{{module.name}}</a>
                </li>
            </ul>
            <div id="myTabContent">
            <transition-group
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
          >
        <officer-main key="main" :data="officerData" v-show="tabs.Main"></officer-main>
        <officer-status key="status" v-show="tabs.Status" :data="officerData"></officer-status>
        <officer-history key="history" v-show="tabs.History" :data="officerData"></officer-history>
        <officer-education-training key="education" v-show="tabs.EducationTraining" :data="officerData"></officer-education-training>        
        <officer-rated-acq key="ratedacq" v-show="tabs.RatedAcq" :data="officerData"></officer-rated-acq>
        <officer-adp key="adp" v-show="tabs.ADP"></officer-adp>
        <officer-memo key="memo" v-show="tabs.Memo" :data="officerData"></officer-memo>
        <officer-paperwork key="paperwork" v-show="tabs.Paperwork" :data="officerData"></officer-paperwork>
        </transition-group>
        </div>
    </div>
</div>
</template>
<script>
import Multiselect from 'vue-multiselect'
import officerList from '../../../static/data/officer_list.json'
import OfficerMain from './officer/OfficerMain'
import OfficerHistory from './officer/OfficerHistory'
import OfficerStatus from './officer/OfficerStatus'
import OfficerEducationTraining from './officer/OfficerEducationTraining'
import OfficerRatedAcq from './officer/OfficerRatedAcq'
import OfficerAdp from './officer/OfficerAdp'
import OfficerMemo from './officer/OfficerMemo'
import OfficerPaperwork from './officer/OfficerPaperwork'

    export default {
        components: {
            Multiselect,
            OfficerMain,
            OfficerStatus,
            OfficerHistory,
            OfficerEducationTraining,
            OfficerRatedAcq,
            OfficerAdp,
            OfficerMemo,
            OfficerPaperwork
        },
    data(){
        return {
            modules: [
            {name: 'Main' ,tabId: 'Main'},
            {name: 'Status',tabId: 'Status'},
            {name: 'History',tabId: 'History'},
            {name: 'EducationTraining',tabId: 'EducationTraining'},
            {name: 'RatedAcq',tabId: 'RatedAcq'},
            {name: 'ADP',tabId: 'ADP'},
            {name: 'Memo',tabId: 'Memo'},
            {name: 'Paperwork',tabId: 'Paperwork'},
        ],
        tabs: {
            Main: true,
            EducationTraining: false,
            Status: false,
            History: false,
            RatedAcq: false,
            ADP: false,
            Memo: false,
            Paperwork: false

        },
        officerData: '',
        value: '',
        officerList,
        readyToDisplay: false
    }
    },
    methods: {
            fetchData($event){
                this.$http.get('officers/'+$event.id+'.json').then((response)=>response.json()).then((data)=>{
                    this.officerData = data
                    this.readyToDisplay = true
                })
            },
            clickTab($event){
              var target = $event.target.id
              for (let key in this.tabs){
                if (key == target){
                   this.tabs[key] = true
                }
                else{
                  this.tabs[key] = false
                }
              }
            },
            rankName({id, fullName}){
                return '${id}-${fullName}'
            }
        },
    computed: {
        dataready(){
            return this.$store.dataready
        },
    }
}
</script>
<style scoped>
#searchBar {
    margin: 60px 0 20px 0;
}
.fadeIn{
  -webkit-animation: fadeIn 1s; /* Safari 4+ */
  -moz-animation:    fadeIn 1s; /* Fx 5+ */
  -o-animation:      fadeIn 1s; /* Opera 12+ */
  animation:         fadeIn 1s; /* IE 10+, Fx 29+ */  
}

.fadeOut{
  -webkit-animation: fadeOut .1s; /* Safari 4+ */
  -moz-animation:    fadeOut .1s; /* Fx 5+ */
  -o-animation:      fadeOut .1s; /* Opera 12+ */
  animation:         fadeOut .1s; /* IE 10+, Fx 29+ */  
}


</style>
