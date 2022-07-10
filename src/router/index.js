import Vue from 'vue'
import VueRouter from 'vue-router'

const LayoutMain = () => import('../layouts/layout.vue');

Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: LayoutMain, meta: {},
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/views/home.vue')
            }
        ]

    },

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router


