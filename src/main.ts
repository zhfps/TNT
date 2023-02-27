import { createApp } from 'vue'
import { createPinia} from 'pinia'
import { ipcRenderer } from 'electron'
import { userRouter } from './router'
import { Icon } from '@vicons/utils'
import "./style.css"
import App from './App.vue'
import './samples/node-api'

const app =createApp(App)
const router = userRouter(app)
      app.component('Icon',Icon)
      app.use(createPinia)
         .mount('#app')
         .$nextTick(() => {
           postMessage({ payload: 'removeLoading' }, '*')
         })
         if(window && window.process && window.process.type === 'renderer'){
          ipcRenderer.on('change-view',(el, url) =>{
            router.replace(url)
          })
        }
