import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap'
import routes from "./routes"
import '@/assets/css/main.css'


//const App = createApp(App).mount('#app')

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router)
app.mount('#app')