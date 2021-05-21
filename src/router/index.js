import Vue from 'vue'
import VueRouter from 'vue-router'


 
// Dashboard Imports
import DashboardHome from '../views/dashboard/DashboardHome.vue'
import DashboardUsers from '../views/dashboard/DashboardUsers.vue'
import DashboardProfile from '../views/dashboard/DashboardProfile.vue'
import DashboardLogin from '../views/dashboard/DashboardLogin.vue'
import DashboardForget from '../views/dashboard/DashboardForget.vue'
import DashboardReset from '../views/dashboard/DashboardReset.vue'
// End Dashboard Imports




// Client Imports
import Home from '../views/client/Home.vue'
import About from '../views/client/About.vue'
// End Client Imports


// 
import notfound from '../components/notfound.vue'
//


Vue.use(VueRouter)
const routes = [


// Dashboard Routes
{
  path: '/dashboardhome',
  name: 'DashboardHome',
  component: DashboardHome
},
{
  path: '/dashboardusers',
  name: 'DashboardUsers',
  component: DashboardUsers
},
{
  path: '/dashboardprofile',
  name: 'DashboardProfile',
  component: DashboardProfile
},
{
  path: '/dashboardlogin',
  name: 'DashboardLogin',
  component: DashboardLogin
},
{
  path: '/dashboardforget',
  name: 'DashboardForget',
  component: DashboardForget
},
{
  path: '/dashboardreset',
  name: 'DashboardReset',
  component: DashboardReset
},
// End Dashboard Routes



// Client Routes
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
// End Client Routes

{
  path: '*',
  name:notfound,
  component:notfound
}

]






const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router




