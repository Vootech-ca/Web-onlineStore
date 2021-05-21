<template>
    <div>
<Header/>
    <div class="container wrapper">

    <div class="row p-2">
<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center m-auto">
<span class="badge bg-light text-dark  p-2 float-end" style="font-size:1rem;">
بەکارهێنەرەکان  <img src="../../assets/img/users.svg" style="width:2.5rem;">
</span>

<button class="btn btn-success btn-lg shadow-lg float-start" data-bs-toggle="modal" data-bs-target="#addmodal">
<span class="fa fa-plus"></span>
</button>

</div>

    </div>

    <div class="row p-2">
<div class="col-10 col-sm-8 col-md-5 col-lg-4 text-center p-2 m-auto">
        <input :keyup="searchusers" v-model="keyword" class=" form-control p-2 m-auto rounded-1" placeholder="گەڕان">
    </div>
</div>
    <div class="row p-2" >

<div class="col-12 col-sm-10 col-md-6 col-lg-4 text-center p-2 m-sm-auto"  v-for="(user,index) in getusers" :key="index">
   <div class="btn btn-light w-100  btn-lg shadow-lg border-0">
 <span class="d-block badge text-dark m-2 p-2">{{user.name}}</span>
 <span class="d-block badge text-dark m-2 p-2">{{user.email}}</span>
 <span class="d-block badge text-dark m-2 p-2">{{user.per}}</span>
 <div class="justify-content-around">
<button class="btn btn-warning btn-sm m-1"><span class="fa fa-edit"></span></button>
<button @click="drop(user.id)" class="btn btn-danger btn-sm m-1"><span class="fa fa-trash"></span></button>
<button class="btn btn-primary btn-sm m-1 "><span class="fa fa-lock"></span></button>
 </div>
   </div>
</div>

    </div>
    </div>





<div class="modal fade"  id="addmodal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header" dir="ltr">
        <button class="btn-btn-danger bg-danger border-0 text-light btn-sm" data-bs-dismiss="modal">&times;</button>
        <h4 class="modal-title text-dark"> زیادکردن </h4>
      </div>
      <div class="modal-body">
        <form action="" method="POST" class="text-right">
<div class="form-group">
  <label class="text-dark"><span class="fa fa-user"></span> ناو </label>
  <input type="text"  class="form-control" name="name" required="">
</div>
  

<div class="form-group">
  <label class="text-dark"><span class="fa fa-envelope"></span> ئیمەیڵ </label>
  <input type="email" placeholder="" class="form-control" name="email" required="">
</div>


<div class="form-group">
  <label class="text-dark"><span class="fa fa-lock"></span> وشەنهێنی  </label>
  <input type="password" minlength="8" maxlength="20"  class="form-control" 
  name="pass" required="" autocomplete="off">
</div>

<label class="text-dark"><span class="fa fa-user-shield"></span>  دەسەڵات  </label>
  <select class="custom-select" required="" name="per">
    <option></option>
    <option>User</option>
    <option>Admin</option>
    <option>Manager</option>

  </select>


<button class="btn btn-success m-2 shadow" name="add" type="submit"><span class="fa fa-plus"></span> زیادکردن</button>
        </form>
      </div>
    </div>
  </div>
</div>




    </div>
</template>


<script>

 
import Header from '../../components/dashboard/layouts/Header.vue'
export default {
    components: {
        Header
    },
   data() {
       return {
           keyword:null,
           name:null,
           email:null,
           per:null
       }
   },
   computed: {
        getusers(){
        return this.$store.getters.users;
        },
        searchusers() {
            this.axios.post('dashboard/users/search.php',{
                action:'search',
                keyword:this.keyword                
            })
            .then(r=>{
                this.$store.state.users = r.data.users
            })
            .catch(error=>{
                console.log(error);
            });
        }

   },
   methods:{
        drop(id) {
swal({
  title: "دەیسڕیتەوە ؟ ",
  icon: "warning",
  buttons: true,
  dangerMode: true,
}).then(drop=>{
    if(drop){
      this.axios.post('dashboard/users/drop.php',{
                 action:'drop',
                 id:id                
             })
             .then(r=>{
swal('Users',r.data.message,r.data.status);
this.$store.state.users = r.data.users
             })
             .catch(error=>{
                 console.log(error);
             });
    }
});
       
        }
   }
}




</script>

