import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import top from '@/components/top'
import tech from '@/components/tech'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/css/main.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
    routes: [{
            path: '/',
            name: 'Top',
            component: top
        },
        {
            path: '/tech',
            name: 'tech',
            component: tech
        }
    ]
})