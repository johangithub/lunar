import Home from './components/Home.vue'
import About from './components/About.vue'
import Hello from './components/Hello.vue'

//Officer Module
import Officer from './components/officer/Officer.vue'
import OfficerDetail from './components/officer/officer/OfficerDetail.vue'
import OfficerPersonal from './components/officer/officer/OfficerPersonal.vue'
import OfficerEducationTraining from './components/officer/officer/OfficerEducationTraining.vue'
import OfficerDutyHistory from './components/officer/officer/OfficerDutyHistory.vue'
import OfficerRated from './components/officer/officer/OfficerRated.vue'


import OfficerAuth from './components/officer/OfficerAuth.vue'
import OfficerCFH from './components/officer/OfficerCFH.vue'
import AuthAsgn from './components/officer/AuthAsgn.vue'

//Enlisted Module
import Airman from './components/airman/Airman.vue'
import AirmanCFH from './components/airman/AirmanCFH.vue'

//Cadet Module
import Cadet from './components/cadet/Cadet.vue'
import CadetEAD from './components/cadet/CadetEAD.vue'

//Recruit Module
import Recruit from './components/recruit/Recruit.vue'
import Recruiter from './components/recruit/Recruiter.vue'
import RecruitingSQ from './components/recruit/RecruitingSQ.vue'

export const routes = [
	{path: '', component: Home},
	{path: '/hello', component: Hello},
	{path: '/about', component: About},
	{path: '/officer', component: Officer, children: [
		{path: ':id', component: OfficerDetail},
		{path: ':id/personal', component: OfficerPersonal},
		{path: ':id/education_training', component: OfficerEducationTraining},
		{path: ':id/duty_history', component: OfficerDutyHistory},
		{path: ':id/rated', component: OfficerRated},
		]},
	{path: '/officer_cfh', component: OfficerCFH},
	{path: '/officer_authasgn', component: AuthAsgn},
	{path: '/officer_auth', component: OfficerAuth},
	{path: '/airman', component: Airman},
	{path: '/airman_cfh', component: AirmanCFH},
	{path: '/cadet', component: Cadet},
	{path: '/cadet_ead', component: CadetEAD},
	{path: '/recruit', component: Recruit},
	{path: '/recruiter', component: Recruiter},
	{path: '/recruiting_Sq', component: RecruitingSQ},

	//Wildcard Redirect
	{path: '*', redirect: '/'}
]