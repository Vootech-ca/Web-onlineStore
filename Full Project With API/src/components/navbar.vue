
<template>

   <div>





      <!-- <div class="container bg-white top-header  d-flex p-2">
         <div class="col-lg-10 col-md-10 d-flex justify-content-between">

               <div class="d-flex">
                         <input class="form-control input100 shadow-sm" style="width:340px;zoom:65%" type="text" placeholder="Search">
       
            <a href="#" class="mt-1" style="margin-left:10px"><i class="fas fa-search"></i></a>
               </div>
     

         </div>

         <div class="col-lg-2 col-md-2">
         <router-link to="/cart" style="text-decoration:none;color:gray"><i class="fas fa-shopping-cart"></i><span
                  class="m-2">cart</span></router-link>
         </div>


      </div> -->

      <nav class="navbar navbar-expand-lg p-3 shadow" id="header">
         <div class="container navbar-container" style="padding:0px 60px">
            <a class="navbar-brand text-dark" style="font-size:30px;font-weight:700" href="#">Fortune</a>

            <div class="d-none searchAndCart d-flex justify-content-space">
               <router-link to="/search" style="padding: 40px;" class="text-dark"><i class="fas fa-search"></i></router-link>
               <a href="#" class="text-dark"><i class="fas fa-shopping-cart"></i> </a>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
               aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <i class="fas fa-bars text-white"></i>

            </button>


            <div class="collapse navbar-collapse  d-lg-flex justify-content-lg-end" id="navbarNav">
               <ul class="navbar-nav text-center" dir="ltr">
                  <li class="nav-item">
                     <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link to="/product" class="nav-link">Product</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link to="/about" class="nav-link">About Us</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link to="/contact" class="nav-link">Contact Us</router-link>
                  </li>

                  <li class="nav-item">
                           <router-link to="/cart" class="nav-link" style="text-decoration:none;color:gray"><i class="fas fa-shopping-cart"></i> Cart</router-link>
                  </li>

               </ul>
               


            </div>
         </div>
      </nav>




   </div>


</template>


<script>
import axios from 'axios'
export default {
   name:'navbar',
   data() {
      return {
      }
   },
   mounted(){
  axios.get('/categories/all')
      .then(r =>{
         this.$store.state.categories = r.data.result;
      })
      .catch(e =>{
        console.log(e);
      })

  axios.get('/items/all')
      .then(r =>{
         this.$store.state.items = r.data.result;
      })
      .catch(e =>{
        console.log(e);
      })


     axios.get('/items/newest')
      .then(r =>{
         this.$store.state.fitems = r.data.result;
      })
      .catch(e =>{
        console.log(e);
      })

   }
}
</script>