import './assets/main.css'

import { createApp } from 'vue'
import App from './App111.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
