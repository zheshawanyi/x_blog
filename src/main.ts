import { createApp,createVNode,render } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/reset.less'
import Card from './components/card/index.vue'
import router from './router/router_config'
import pinia from './store/store'
//Particles
import Particles from 'particles.vue3'






createApp(App).component('Card',Card).use(pinia).use(Particles).use(router).use(ElementPlus).mount('#app')
