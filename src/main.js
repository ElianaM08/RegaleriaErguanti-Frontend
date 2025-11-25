import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
AOS.init()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast)
app.mount('#app')
