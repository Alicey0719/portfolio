import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import top from '@/components/top'
import tech from '@/components/tech'
import terms from '@/components/terms'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/css/main.css'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

export default new Router({
    routes: [{
            path: '/',
            name: 'Top',
            component: top
        },
        {
            path: '/tech',
            name: 'Tech',
            component: tech
        },
        {
            path: '/terms',
            name: 'Terms',
            component: terms
        }
    ]
})