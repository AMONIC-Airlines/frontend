import { createRouter, createWebHistory } from "vue-router"
import Home from './components/home.vue'
import scheduleTable from './components/scheduleTable.vue'
import bookingTable from './components/bookingTable.vue'
import Register from './components/flightRegister.vue'
import enter from './components/enter.vue'
import test from './components/test.vue'
import service from './components/addServiceTable.vue'

const routes = [
    {
        path: "/",
        component: enter,
    },
    {
        path: "/flightRegister",
        component: Register,
    },
    {
        path: "/booking",
        component: bookingTable,
    },
    {
        path: "/table",
        component: scheduleTable,
    },
    {
        path: "/test",
        component: test,
    },
    {
        path: "/service",
        component: service,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router

/*
import { createRouter, createWebHashHistory } from 'vue-router'



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: Home, alias: '/' },
        { path: '/schedule', component: Schedule },
        { path: '/booking', component: Booking },
        { path: '/register_flight', component: Register },
    ]
})
*/