<template>
    <div>
<div class="container centered">
	<div class="row p-2">
		<div class="col-10 col-sm-10 col-md-6 col-lg-4 m-auto text-center">
			<h4> گۆڕینی وشەنهێنی </h4>
			<img src="../../assets/img/reset.svg" style="width:10rem;">
		<div class="shadow m-1 p-2 text-center" action="" method="POST">
		
			<div class="form-group text-left">
		<label> کۆد <span class="fa fa-code"></span></label>
		<input type="text" class="form-control" placeholder="کۆد" v-model="code" required="">
			</div>

			<div class="form-group text-left">
		<label> وشەنهێنی نوێ <span class="fa fa-lock"></span></label>
		<input type="password" class="form-control" placeholder="وشەنهێنی نوێ" v-model="password" required="">
			</div>

 
    <div class="m-2">
	<button @click="reset" class="btn w-75 btn-outline-light d-block m-auto">
	ناردن <span class="fa fa-paper-plane"></span>
    </button>
    </div>

			<router-link to="dashboardlogin" class="m-auto w-50 btn btn-danger  btn-sm d-block">گەڕانەوە</router-link>

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
        code:'',
        password:''
       }
   } ,
   methods:{
reset() {
this.axios.post('dashboard/auth/reset.php', {
action: 'forget',
code:this.code,   		
password:this.password   		
}).then((response) => {
if (response.data.status==='success') {
this.$router.push('/dashboardlogin');
swal('Authentication',response.data.message,response.data.status);
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