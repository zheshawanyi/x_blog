import { createApp,createVNode,render } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/reset.less'
import Card from './components/card/index.vue'
import router from './router/router_config'
import {createPinia} from 'pinia'
//Particles
import Particles from 'particles.vue3'




const store = createPinia()


createApp(App).component('Card',Card).use(store).use(Particles).use(router).use(ElementPlus).mount('#app')
