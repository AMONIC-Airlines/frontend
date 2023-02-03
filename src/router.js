import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/home.vue'
import Schedule from './components/scheduleTable.vue'
import Booking from './components/bookingTable.vue'
import Register from './components/flightRegister.vue'
import AddService from './components/addServiceTable.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: Home, alias: '/' },
        { path: '/schedule', component: Schedule },
        { path: '/booking', component: Booking },
        { path: '/register_flight', component: Register },
        { path: '/register_flight/additional_service', component: AddService },
    ]
})