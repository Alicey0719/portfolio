<template>
<div class="content-area container">
    <div class="row  product">

        <div class="col mt-5" v-for="item in products" :key="item.name" >        
            <a class="content-link" target="_blank" v-bind:href="item.url">
                <div class="card" style="width: 18rem;">
                    <img v-bind:src="item.img" decoding="async" class="card-img-top" v-bind:alt="item.name">
                    <div class="card-body">
                        <p class="card-title">{{item.name}}</p>
                        <p class="card-form">開発形態 : {{item.form}}</p>
                        <p class="card-period">開発期間 : {{item.period}}</p>
                        <div class="card-partition"></div>
                        <p class="card-text">{{item.dist}}</p>
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
            //console.log(this.products)
        }
    },
    mounted(){
        this.getProducts()
    }
}
</script>
