<template>
<div class="content-area container">
    <div class="row product">
        <div v-for="p in ['work','programming','server', 'movie', 'other']" :key="p">
            <div class="category-title">
                <h2>{{p}}</h2>
            </div>
            <div class="row">
                <div class="col mt-5" v-for='item in filterProducts(`${p}`)' :key="`${p}-${item.name}`" >
                    <div class="card" style="width: 18rem;">
                        <a class="content-link" target="_blank" v-bind:href="item.url">
                            <img v-bind:src="item.img" decoding="async" class="card-img-top" v-bind:alt="item.name">
                            <div class="card-body">
                                <p class="card-title">{{item.name}}</p>
                                <p class="card-form">開発形態 : {{item.form}}</p>
                                <p class="card-period">開発期間 : {{item.period}}</p>
                                <p class="card-period">使用技術 : {{item.tech}}</p>
                                <div class="card-partition"></div>
                                <p class="card-text">{{ item.dist }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
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
            const url = '/static/doc/product-list.json';
            await this.axios.get(url).then(x => { this.products = x.data });
        }
    },
    mounted(){
        this.getProducts();
    },
    computed: {
        filterProducts: function(){
            return function(cat){
                if (this.products != null){
                    let res = Array.from(this.products);
                    res = res.filter(function(v){
                        return v.category == cat;
                    });
                    //console.log(res);
                    return res;
                }else{
                    return null;
                }
            }
        }
    }
}
</script>
