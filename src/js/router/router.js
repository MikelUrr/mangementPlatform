import LoginView from "./../../views/LoginView.vue"
import DashboardView from "./../../views/DashboardView.vue"



const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/overview',
        name: 'DashboardView',
        component: DashboardView
    }
]

export default routes