<template>
    <div>
<div class="container ">
<div class="row p-2" style="margin-top:3rem;">


  <div class="col-11 col-xs-11 col-sm-10 col-md-6 col-lg-4 col-xl-4 p-2 m-auto radius-sm centered text-center centered">

			<h4 class="bg-light p-2 rounded text-dark w-50 m-auto">  چونەژوورەوە </h4>

<div  class="p-2 shadow bg-card radius-sm">
<img style="width:8rem;cursor:pointer;" src="../../assets/img/login.svg">


  <div class="form-group">
<label> ناو یان ئیمەیڵ  <span class="fa fa-user"></span> </label>
<input type="text" placeholder="ناو یان ئیمەیڵ"  v-model="username"  required="" class="form-control" >
  </div>


  <div class="form-group">
<label>  وشەنهێنی     <span class="fa fa-lock"></span></label>
<input type="password" v-model="password" placeholder="وشەنهێنی"   required="" class="form-control" autocomplete="off">
  </div>

<button @click="login" class="btn btn-outline-light m-2 btn-lg w-75 h-25"> چونەژوورەوە  <span class="fa fa-sign-in-alt"></span></button><br>
<router-link to="/dashboardforget" class="text-light p-2"> وشەنهێنیم لەبیرکردووە  ؟</router-link> <br>
</div>

  </div>





</div>
</div>
    </div>
</template>


<script>

import Header from '../../components/dashboard/layouts/Header.vue'
import Footer from '../../components/dashboard/layouts/Footer.vue'


export default {
    components: {
        Header,Footer
    },
   data() {
       return {
        username:'',
        password:''
       }
   } ,
   methods:{
   	login() {
   		this.axios.post('dashboard/auth/login.php', {
   		   action: 'login',
         username:this.username,
         password:this.password
   		}).then((response) => {
         if (response.data.status==='success') {
this.$router.push('/dashboardhome')
}
         else {
swal('Authentication',response.data.message,response.data.status);
         }
   		}).catch((error) => {
   		  console.error(error);
   		});
   	}
  


   }
   ,
   mounted() {
  		this.axios.post('dashboard/auth/checkauth.php', {
   		   action: 'checkauth',
   		}).then((response) => {
         if (response.data.status==='success') {
this.$router.push('/dashboardhome')
}
   		}).catch((error) => {
   		  console.error(error);
   		});
   }
}


</script>



<style scoped>

</style>