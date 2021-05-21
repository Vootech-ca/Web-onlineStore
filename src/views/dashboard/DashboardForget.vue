<template>
    <div>
<div class="container centered">
	<div class="row p-2">
		<div class="col-10 col-sm-10 col-md-6 col-lg-4 m-auto text-center">
			<h4> گەڕانەوەی وشەنهێنی </h4>
			<img src="../../assets/img/forget.svg" style="width:10rem;">
		<div class="shadow m-1 p-2 text-center" action="" method="POST">
		
			<div class="form-group text-left">
		<label> ئیمەیڵ <span class="fa fa-envelope"></span></label>
		<input type="text" class="form-control" placeholder="ئیمەیڵ" v-model="email" required="">
			</div>

    <div class="m-2">
	<button @click="forget" class="btn w-75 btn-outline-light d-block m-auto">
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
        email:''
       }
   } ,
   methods:{
forget() {
this.axios.post('dashboard/auth/forget.php', {
action: 'forget',
email:this.email   		
}).then((response) => {
if (response.data.status==='success') {
this.$router.push('/dashboardreset');
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