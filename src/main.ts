import { createApp } from 'vue'
import { createPinia} from 'pinia'
import { ipcRenderer } from 'electron'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { userRouter } from './router'
import "./style.css"
import App from './App.vue'
import './samples/node-api'

const app =createApp(App)
const router = userRouter(app)
      app.use(createPinia())
         .mount('#app')
         .$nextTick(() => {
           postMessage({ payload: 'removeLoading' }, '*')
         })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
          app.component(key, component)
}
 if(window && window.process && window.process.type === 'renderer'){
          ipcRenderer.on('change-view',(el, url) =>{
            router.replace(url)
          })
 }
