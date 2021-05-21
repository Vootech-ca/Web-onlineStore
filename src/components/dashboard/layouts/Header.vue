<template>
    <div>


<div class="container fixed-top" style="zoom:85%;">




<nav class="navbar  navbar-expand-lg m-1  " dir="rtl">
<div class="container shadow-sm p-2">




  <router-link to="/dashboardhome">
<img style="width:2.5rem;cursor:pointer;" src="../../../assets/img/home.svg">
  </router-link>


<button 
class="navbar-toggler border-0 mt-2" data-bs-toggle="collapse" data-bs-target="#profile_type" >
<img style="width:3.2rem;cursor:pointer;" src="../../../assets/img/profile.svg">
</button>



  <div class="collapse navbar-collapse" id="profile_type">
    <ul class="navbar-nav me-auto" style="float:left">




      <li class="nav-item active">
        <h5>
        <router-link to="/dashboardprofile" class="nav-link " href="/">
<span class="badge badge-light text-purple">
<img src="../../../assets/img/user.svg" style="width:2rem;">
<span  style="font-size:1.2rem;">{{username}}</span>
</span>
       </router-link>
        </h5>
      </li>


      <li class="nav-item active">
<h5>
  <router-link to="/dashboardprofile" class="nav-link " href="#">
<span class="badge badge-light text-purple">
<img src="../../../assets/img/permission.svg" style="width:2rem;">
<span  style="font-size:1.2rem;">{{per}}</span>
</span>
</router-link>
</h5>
      </li>


      <li class="nav-item active">
        <h5 class="nav-link" @click="logout()">
  چوونەدەر
<img src="../../../assets/img/out.svg"  style="width:2rem;cursor:pointer">

        </h5>
      </li>


    </ul>



  </div>


</div>
</nav>



</div>


<!-- <div class="row mt-5"></div>
<div class="row mt-5"></div> -->

    </div>
</template>

<script>
export default {
  data(){
    return {
        username:'',
        per:''
    }
  },
  methods:{
      autoloaddata(){
      this.axios.get('autoloaddata.php')
      .then(r =>{
        this.$store.state.users = r.data.users
      })
      .catch(e =>{
        console.log(e);
      })
    },
       logout() {
  		this.axios.post('dashboard/auth/logout.php', {
   		   action: 'logout',
   		}).then((response) => {
         if (response.data.status==='success') {
        this.$router.push('/dashboardlogin');
         }
   		}).catch((error) => {
   		  console.error(error);
   		});
     },

     checkauth() {
        this.axios.post('dashboard/auth/checkauth.php', {
         action: 'checkauth',
      }).then((response) => {
if (response.data.status==='success') {
//
}
else if (response.data.status==='invalid') {
this.$router.push('/dashboardlogin')
}
else if (response.data.status==='expired') {
this.$router.push('/dashboardlogin')
}
else {
this.$router.push('/dashboardlogin')
}
      }).catch((error) => {
        console.error(error);
      });
     },

     getinfo() {
this.axios.post('dashboard/auth/getinfo.php', {
         action: 'getinfo',
      }).then((response) => {
        this.username=response.data.username;
        this.per=response.data.per;
      }).catch((error) => {
        console.error(error);
      });    
     }

  },
  mounted(){
    this.autoloaddata();
    this.checkauth();
    this.getinfo();
  }

}
</script>










