import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion';
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'


import "bootstrap/dist/css/bootstrap.css";


const app = createApp(App)

import "bootstrap/dist/js/bootstrap.js";

app.use(router)
app.use(MotionPlugin)
app.mount('#app')
