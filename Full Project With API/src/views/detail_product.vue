<template>
    <div>
        <div class="container mt-5">
         

            <div class="row d-flex">
                <div class="col-lg-3 carousel-product col-md-5 col-10">

<img height="320" :src="'http://mamostakanm.com/dev/public/items/'+result.item_image" class="d-block w-100 radius-10" alt="...">

                </div>

                <div class="col-lg-9 carousel-detail" style="align-self:center;padding-left: 65px;">
                    <h5 class="mb-4 mt-4">{{result.item_title}}</h5>
                    <h6 class="text-light" style="font-weight:300;">Overview</h6>
                    <p>{{result.item_description}}</p>
                    <h3>${{result.item_price}}</h3>
                    <div class="row d-flex justify-content-around text-center mt-3 ">
                        <div class="quantity-toggle">
                            <button class="btn btn-dark btn-sm shadow-sm" @click="decrement()">&mdash;</button>
                            <input type="text" :value="quantity" readonly>
                            <button class="btn btn-dark btn-sm shadow-sm" @click="increment()">&#xff0b;</button>
                        </div>
                    </div>

                    <button class="mt-5 addcart btn btn-outline-primary btn-sm radius-10 shadow"><i class="fas fa-shopping-cart"></i> ADD TO
                        CART</button>

                </div>


            </div>
            <hr class="mt-5 mb-5">

            
            <div class="row">
                <h3 class="mb-3">Detail</h3>
                <p style="text-align:justify">
                {{result.item_description}}
                </p>
            </div>

        </div>
            <hr class="mt-5 mb-4">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                result:{},
                quantity: 1
            }
        },
        mounted() {
            var id = this.$route.params.id;
            axios.get('/items/show/'+id).then(r=>{
               this.result = r.data.result
            }).catch(e=>{
                console.log(e)
            })
        },

        methods: {

            increment() {
                this.quantity++
            },
            decrement() {
                if (this.quantity === 1) {
                    alert('Negative quantity not allowed')
                } else {
                    this.quantity--
                }
            }
        }
    }
</script>


<style>
    pre {
        background: #eee;
        padding: 1rem;
        border-radius: 5px;
    }


    .quantity-toggle {
        display: flex;
    }

    .quantity-toggle input {
        border: 0;
        border-top: 2px solid #ddd;
        border-bottom: 2px solid #ddd;
        width: 2.5rem;
        text-align: center;
        padding: 0 0.5rem;
    }

    .quantity-toggle sbutton {
        border: 2px solid #ddd;
        padding: 0.5rem;
        background: #f5f5f5;
        color: #888;
        font-size: 1rem;
        cursor: pointer;
    }
</style>