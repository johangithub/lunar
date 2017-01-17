<template>
<div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <h1>About</h1>
                        <hr>
                        <p>Made by Joe Han &lt;joe.han0212@gmail.com&gt;</p>
                    </div>
                </div>
                 
                <button class="btn btn-primary" @click="">GET</button>
                <input type="text" v-model="filename" placeholder="Get ID..."/>

                <button class="btn btn-success" @click="">Set Cadet</button>
                <button class="btn btn-success" @click="">Set Detachment</button>
                <button class="btn btn-success" @click="">Set AsgnTeam</button>
                <button class="btn btn-success" @click="">Set Officer</button>
                <pre class="language-json"><code>{{testStr | toTitleCase}}</code></pre>
                <pre class="language-json"><code>{{testStr | lodashTitle}}</code></pre>

      



        </div>
</div>
</template>

<script>
import * as firebase from 'firebase'
import _ from 'lodash'
var config = {
  apiKey: "AIzaSyC7fchvlQL-8EDw1iKoJ6SKiaubP-rCUx8",
  authDomain: "lunar-f8ef6.firebaseapp.com",
  databaseURL: "https://lunar-f8ef6.firebaseio.com",
  storageBucket: "lunar-f8ef6.appspot.com",
  messagingSenderId: "8128412315"
};
firebase.initializeApp(config);
var auth = firebase.auth().signInWithEmailAndPassword('123@123.com','123123').catch((error)=>{
    console.log(error.message);
})
var db = firebase.database()

export default {
    data(){
        return {
            filepath: '',
            value: '',
            detachments: '',
            filename: '',
            monthDisplay: {
                       "01": "Jan",
                       "02": "Feb",
                       "03": "Mar",
                       "04": "Apr",
                       "05": "May",
                       "06": "Jun",
                       "07": "Jul",
                       "08": "Aug",
                       "09": "Sep",
                       "10": "Oct",
                       "11": "Nov",
                       "12": "Dec"
                   },
            testStr: ''
        }
    },
    computed: {
        invertCustom() {
        let obj = this.monthDisplay
          var new_obj = {};
          for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    new_obj[obj[prop]] = prop
                }
            }
          return new_obj
        },
        invertLodash(){
            let obj = this.monthDisplay
            return _.invert(obj);
        }
    },
    filters: {
      toTitleCase(str)
        { try{
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        } catch(e){
            return;
        }
      },
      lodashTitle(str){
        return _.startCase(_.toLower(str))
      }
    },
    methods: {

        /*
        setAsgnTeam(){
            var asgnTeam = require('../../data/rawdata/asgnTeam.json')
            var ref = db.ref('asgnTeam')
            for (let i=0;i<asgnTeam.length;i++){
                ref.child(asgnTeam[i].AFSC).set(asgnTeam[i])
            }
        },
        setCadet(){
            var ref = db.ref('cadets')
            var cadets = require('../../data/rawdata/cadets.json')
            for (let i=0;i<cadets.length;i++){
                ref.child(cadets[i].ID).set(cadets[i])
            }
        },
        setDetachment(){
            var ref = db.ref('detachments')
            var det = require('../../data/rawdata/detachments.json')
            for (let i=0;i<det.length;i++){
            ref.child(det[i].detachment).set(det[i])
        }
        },
        
        setOfficer(){
            var ref = db.ref('officers')
            var officers = require('../../data/rawdata/officers.json')
            for (let i=0;i<officers.length;i++){
            ref.child(officers[i].id).set(officers[i])
        }
        },
        
        getData(){
            this.$http.get('cadets/'+this.filename+'.json').then((response)=>response.json()).then((data)=>{
                this.value = data
            })
        }
        */
    }

}
</script>