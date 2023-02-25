import { createApp } from 'vue'
import { createPinia} from 'pinia'
import "./style.css"
import App from './App.vue'
import './samples/node-api'

const app =createApp(App)
      app.use(createPinia)
         .mount('#app')
         .$nextTick(() => {
           postMessage({ payload: 'removeLoading' }, '*')
         })
