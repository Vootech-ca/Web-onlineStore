<template>
    <div>
<Header/>
<div class="container " style="zoom:80%;margin-top:10rem;">
<div class="row p-2 mt-5" dir="rtl">




<div class="col-6 col-md-4 col-lg-3   text-center p-2   ">
<router-link to="/dashboardusers" class="btn radius-lg btn-light btn-lg p-2 text-light rounded" 
style="width:100%;height:140px;">
<p><img src="../../assets/img/users.svg" style="width:5rem;"></p>
<p class="badge text-dark" style="font-size:20px;">بەکارهێنەر</p>
</router-link>
</div>

  


</div>
</div>
<Footer/>
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

       }
   } 
}
</script>






<style scoped>
.col-6:hover p{
    color:#2C3E50;
  }
  .col-6:hover {
    transition:0.2s;
    transform:rotate(6deg);
  }
  .item:hover {
    transition:0.2s;
    transform:rotate(6deg);
  }
</style>



