<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
            <h3>TRENDING</h3>
        </div>
        <hr>

        


        <!-- ehs nakat am slider xatay jquery ya  -->


        <carousel :margin="30" :touchDrag="true" :responsive="responsive" :autoplay="true" >



            <router-link v-for="(item,index) in this.$store.state.items" :key="index" :to="'/detail_product/'+item.id" class="col text-dark" style="text-decoration:none;">
                <div class="card">
                    <img height="280"
                        :src="'http://mamostakanm.com/dev/public/items/'+item.item_image"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{item.item_title}}</h5>
                        <hr>
                        <p class="card-text">{{item.item_description}}</p>
 
                        <h4 class="text-purple">${{item.item_price}}</h4>
                    </div>
                </div>
            </router-link>


            <!-- <router-link to="/detail_product" class="col text-dark" style="text-decoration:none">
                <div class="card">
                    <img height="280"
                        src="https://www.alphaindustries.eu/media/image/03/82/e7/178318-03-alpha-industries-back-print-hoody-sweat-002.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Sample Product</h5>
                        <hr>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>

                        <h4 class="text-purple">$200.00</h4>
                    </div>
                </div>
            </router-link>



            <router-link to="/detail_product" class="col text-dark " style="text-decoration:none">
                <div class="card">
                    <img height="280"
                        src="https://www.alphaindustries.eu/media/image/03/82/e7/178318-03-alpha-industries-back-print-hoody-sweat-002.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Sample Product</h5>
                        <hr>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>

                        <h4 class="text-purple">$200.00</h4>
                    </div>
                </div>
            </router-link>


            <router-link to="/detail_product" class="col text-dark" style="text-decoration:none">
                <div class="card">
                    <img height="280"
                        src="https://www.alphaindustries.eu/media/image/03/82/e7/178318-03-alpha-industries-back-print-hoody-sweat-002.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Sample Product</h5>
                        <hr>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>

                        <h4 class="text-purple">$200.00</h4>
                    </div>
                </div>
            </router-link> -->

        </carousel>



<!-- for desktop --->
        <!-- <div class="row d-flex justify-content-center mt-5 collection-desktop">

            <router-link to="/" class="col-lg-3 mb-3"
                style=" position: relative;text-align: center;color: white;width:15rem">
                <img class="radius-15"
                    src="https://www.theperfumestudio.com/media/catalog/product/f/o/for-men-cologne-gift-set_1.jpg"
                    alt="Snow" style="width:13rem;height:200px">
                <div class="centered">Women Collection</div>
            </router-link>

            <router-link to="/" class="col-lg-3 mb-3"
                style=" position: relative;text-align: center;color: white;width:15rem">
                <img class="radius-15"
                    src="https://www.theperfumestudio.com/media/catalog/product/f/o/for-men-cologne-gift-set_1.jpg"
                    alt="Snow" style="width:13rem;height:200px">
                <div class="centered">Women Collection</div>
            </router-link>

            <router-link to="/" class="col-lg-3 mb-3"
                style=" position: relative;text-align: center;color: white;width:15rem">
                <img class="radius-15"
                    src="https://www.theperfumestudio.com/media/catalog/product/f/o/for-men-cologne-gift-set_1.jpg"
                    alt="Snow" style="width:13rem;height:200px">
                <div class="centered">Women Collection</div>
            </router-link>

            <router-link to="/" class="col-lg-3 mb-3"
                style=" position: relative;text-align: center;color: white;width:15rem">
                <img class="radius-15"
                    src="https://www.theperfumestudio.com/media/catalog/product/f/o/for-men-cologne-gift-set_1.jpg"
                    alt="Snow" style="width:13rem;height:200px">
                <div class="centered">Women Collection</div>
            </router-link>

            <router-link to="/" class="col-lg-3 mb-3"
                style=" position: relative;text-align: center;color: white;width:15rem">
                <img class="radius-15"
                    src="https://www.theperfumestudio.com/media/catalog/product/f/o/for-men-cologne-gift-set_1.jpg"
                    alt="Snow" style="width:13rem;height:200px">
                <div class="centered">Women Collection</div>
            </router-link>

            <router-link to="/" class="col-lg-3 mb-3"
                style=" position: relative;text-align: center;color: white;width:15rem">
                <img class="radius-15"
                    src="https://www.theperfumestudio.com/media/catalog/product/f/o/for-men-cologne-gift-set_1.jpg"
                    alt="Snow" style="width:13rem;height:200px">
                <div class="centered">Women Collection</div>
            </router-link>

            <router-link to="/" class="col-lg-3 mb-3"
                style=" position: relative;text-align: center;color: white;width:15rem">
                <img class="radius-15"
                    src="https://www.theperfumestudio.com/media/catalog/product/f/o/for-men-cologne-gift-set_1.jpg"
                    alt="Snow" style="width:13rem;height:200px">
                <div class="centered">Women Collection</div>
            </router-link>

            <router-link to="/" class="col-lg-3 mb-3"
                style=" position: relative;text-align: center;color: white;width:15rem">
                <img class="radius-15"
                    src="https://www.theperfumestudio.com/media/catalog/product/f/o/for-men-cologne-gift-set_1.jpg"
                    alt="Snow" style="width:13rem;height:200px">
                <div class="centered">Women Collection</div>
            </router-link>

        </div> -->

        <!-- end for desktop --->



        <div class="row mt-5 p-5 d-flex flex-wrap">
            <div class="d-flex justify-content-between new-arrival">
                <div>
                    <h4>NEW ARRIVALS</h4>
                </div>

    <div class="list-arrival" >

    <button :class="{ active_arrival: (category.id === isAddClass) }" v-for="(category,index) in this.$store.state.categories" :key="index" @click="filteritems(category.id)"  class="btn border-0 shadow-none p-1 m-2">{{ category.category_name }}</button>
    </div>
            </div>
            <hr>
        </div>

        <carousel :margin="30" :touchDrag="true" :responsive="responsive" :autoplay="true">



         <router-link v-for="(item,index) in this.$store.state.fitems" :key="index" :to="'/detail_product/'+item.id" class="col text-dark" style="text-decoration:none;">
                <div class="card">
                    <img height="280"
                        :src="'http://mamostakanm.com/dev/public/items/'+item.item_image"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{item.item_title}}</h5>
                        <hr>
                        <p class="card-text">{{item.item_description}}</p>
 
                        <h4 class="text-purple">${{item.item_price}}</h4>
                    </div>
                </div>
            </router-link>




        </carousel>






        <div class="bg-moment mt-5 mb-5 " style="padding:30px">
            <div class="row d-flex text-center justify-content-center">
                <h2 class="text-white mb-4">On Sale Now !</h2>
                <h5 class="text-white mb-4">shop this week's sale & save</h5>
                <a href="#" class="btn btn-primary radius-10 shadow col-lg-2 col-4">Shop Now</a>
            </div>
        </div>

    </div>
</template>

<script>
    import carousel from "vue-owl-carousel";
    import axios from "axios";
    export default {
        name: "App",
        components: {
            carousel
        },
        data() {
            return {
                isAddClass:0,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 3,
                        nav: false
                    }
                },
                responsive_collection: {
                    0: {
                        items: 3,
                        nav: false
                    },
                    600: {
                        items: 4,
                        nav: false
                    }
                }
            };
        },
        methods:{
            filteritems(keyword) {
 
  axios.get('/items/all')
      .then(r =>{
        this.$store.state.fitems = r.data.result.filter(event => !event.item_category_id.indexOf(keyword));
      })
      .catch(e =>{
        console.log(e);
      })

            this.isAddClass=keyword

            }
        }
    };
</script>



<style>
    /* Centered text */
    .centered {
        width: 86% !important;
        padding: 18px;
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, -1%);
        background: rgba(92, 92, 92, 0.932);
        font-size: 14px !important;
        border-radius: 15px !important;
    }
</style>