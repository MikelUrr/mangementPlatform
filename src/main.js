import { createApp } from 'vue'
import App from './App.vue'
//styles fonts & bootstrap
import './style.css'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css';

//import vuerouter

import { createRouter, createWebHistory } from 'vue-router'



//router setup
import routes from './router/router.js'


const router = createRouter({
    history: createWebHistory(),
    routes
})



const app = createApp(App)
app.use(router)
app.mount('#app')

