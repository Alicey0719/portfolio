<template>
<div class="content-area container">
    <div class="row">

        <div class="col mt-5" v-for="item in products" :key="item.name" >        
            <a class="content-link" href="#">
                <div class="card" style="width: 18rem;">
                    <img src="https://alicey.dev/img/icon2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">{{item.name}}</p>
                    </div>
                </div>
            </a>
            
        </div>
    </div>
</div>
</template>


<script>
export default {
    data () {
        return{
            products : null
        }
    },
    methods:{
        async getProducts() {
            var url = '/static/doc/product-list.json'
            await this.axios.get(url).then(x => { this.products = x.data })
            console.log(this.products)
        }
    },
    mounted(){
        this.getProducts()
    }
}
</script>
