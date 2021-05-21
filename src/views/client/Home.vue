<template>
    <div>
<Header/>
        <h4 class=" text-white p-2 rounded centered">Home Page</h4>
<Footer/>
    </div>
</template>




<script>
import Header from '../../components/client/layouts/Header.vue'
import Footer from '../../components/client/layouts/Footer.vue'

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
@import '../../assets/css/dashboard.css';
</style>
