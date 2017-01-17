<template>
    <div id="officerMain">
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped table-condensed table-hover">
              <thead>
                <tr>
                  <th>SSN</th>
                  <th>Name</th>
                  <th>Rank</th>
                  <th>DAFSC</th>
                  <th>PAFSC</th>
                  <th v-show="data.SECONDAFSC!=''">2AFSC</th>
                  <th v-show="data.THIRDAFSC!=''">3AFSC</th>
                  <th>BPZ</th>
                  <th>SOC</th>
                  <th>Functional Cateogry</th>
                </tr>
              </thead>
              <tbody>
                <tr class="active" >
                  <td>123456789</td>
                  <td>{{data.fullName}}</td>
                  <td>{{data.GRADE_T}}</td>
                  <td>{{data.DAFSC}}</td>
                  <td>{{data.PAFSC}}</td>
                  <td v-show="data.SECONDAFSC!=''">{{data.SECONDAFSC}}</td>
                  <td v-show="data.THIRDAFSC!=''">{{data.THIRDAFSC}}</td>
                  <td>{{data.BPZ}}</td>
                  <td>{{data.SOC_T}}</td>
                  <td>{{data.FUNC_CAT_GROUP}}</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
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
    <div class="row">
        <div class="col-md-2">

            <table class="table table-striped table-condensed table-hover">
                <thead>
                    Service Dates
                    <tr>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                    <!-- Total Active Federal Military Service Date -->
                    <tr class="active">
                        <td>TAFMSD</td>
                        <td>{{serviceDates.TAFMSD | addDash}}</td>
                    </tr>

                    <!-- Total Active Federal Commissioned Service Date -->
                    <tr class="active">
                        <td>TAFCSD</td>
                        <td>{{serviceDates.TAFCSD | addDash}}</td>
                    </tr>

                    <!-- Entered Active Duty -->
                    <tr class="active">
                        <td>EAD</td>
                        <td>{{serviceDates.EAD | addDash}}</td>
                    </tr>

                    <tr class="active" v-show="serviceDates.PAYDATE">
                        <td>PAYDATE</td>
                        <td>{{serviceDates.PAYDATE | addDash}}</td>
                    </tr>

                    <!-- Date of Rank -->
                    <tr class="active">
                        <td>DOR</td>
                        <td>{{serviceDates.DOR | addDash}}</td>
                    </tr>

                    <!-- Overseas Duty Selection Date -->
                    <tr class="active">
                        <td>ODSD</td>
                        <td>{{serviceDates.ODSD | addDash}}</td>
                    </tr>

                    <!-- Short Tour Return Date -->
                    <tr class="active">
                        <td>STRD</td>
                        <td>{{serviceDates.STRD | addDash}}</td>
                    </tr>

                    <!-- Date Departed Last Duty Station -->
                    <tr class="active">
                        <td>DDLDS</td>
                        <td>{{serviceDates.DDLDS | addDash}}</td>
                    </tr>

                    <!-- Date Arrived Station -->
                    <tr class="active">
                        <td>DAS</td>
                        <td>{{serviceDates.DAS | addDash}}</td>
                    </tr>

                    <!-- Date Eligible for Return from Overseas -->
                    <tr class="active" v-show="serviceDates.DEROS">
                        <td>DEROS</td>
                        <td>{{serviceDates.DEROS | addDash}}</td>
                    </tr>

                    <!-- Date of Separation -->
                    <tr class="active">
                        <td>DOS</td>
                        <td :style="{color: dosColor}">{{serviceDates.DOS | addDash}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-md-10" id="personal">

            <table class="table table-striped table-condensed table-hover">
                <thead>
                    Personal
                    <tr>
                        <th>Home of Record</th>
                        <th>Current Address</th>
                        <th>Home Phome</th>
                        <th>Work Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="active">
                        <td>5000 Pennsylvania Avenue Apt 3 San Antonio, TX 78150</td>
                        <td>5000 Pennsylvania Avenue Apt 3 San Antonio, TX 78150</td>
                        <td>{{data.homePhone}}</td>
                        <td>{{data.workPhone}}</td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </table>
            <table class="table table-striped table-condensed table-hover">
              <thead>
                <tr>
                  <th>Race</th>
                  <th>Ethnicity</th>
                  <th>Gender</th>
                  <th>Religion</th>
                  <th>Citizenship</th>

                </tr>
              </thead>
              <tbody>
                <tr class="active" >
                    <td>{{data.RACE}}</td>
                    <td>{{data.HISPANIC_LATINO_DECL}}</td>
                    <td>{{data.GENDER_T}}</td>
                    <td>{{data.RELIGION_T}}</td>
                    <td>{{data.CITIZENSHIP_T}}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Dependents</th>
                  <th>EFMP Status</th>
                  <th>Marital Status</th>
                  <th>Mil Spouse</th>
                </tr>
              </thead>
              <tbody>
                <tr class="active" >
                    <td>4</td>
                    <td>None</td>
                    <td>{{data.MARITAL_STATUS_T}}</td>
                    <td>None</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>

    </div>
</template>
<script>
export default{
    props:['data'],
    data(){
        return {

        }
    },
    computed: {
        serviceDates(){
            let varlist = ['TAFMSD','TAFCSD','EAD','PAYDATE','DOR','ODSD','STRD','DDLDS','DAS','DEROS','DOS']
            let serviceDates = {
              TAFMSD: this.data.TAFMSD,
              TAFCSD: this.data.TAFCSD,
              EAD: this.data.EAD,
              PAYDATE: this.data.PAYDATE,
              DOR: this.data.DOR,
              ODSD: this.data.ODSD,
              STRD: this.data.STRD,
              DDLDS: this.data.DDLDS,
              DAS: this.data.DAS,
              DEROS: this.data.DEROS,
              DOS: this.data.DOS
            }
            return serviceDates
        },
        //For now, Flag anyone with DOS earlier than 2020
        dosColor(){
           if (this.data.DOS < 20200530) {
            return 'red'
           }
        }
    },
    methods:{
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

<style>
    .DOS{
        color: red !important;
    }
</style>