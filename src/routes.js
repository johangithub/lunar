import Home from './components/Home.vue'
import About from './components/About.vue'
import NoPage from './components/NoPage.vue'

//Officer Module
import Officer from './components/officer/Officer.vue'



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
	{path: '/404', component: NoPage},
	{path: '/about', component: About},
	{path: '/officer', component: Officer},
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