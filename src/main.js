import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home/Home.vue';
import Sales from './components/Sales/Sales.vue'
import Contact from './components/Contact/Contact.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/sales', component: Sales },
        { path: '/contact', component: Contact },
    ]
})
createApp(App)
    .use(router)
    .mount('#app')
