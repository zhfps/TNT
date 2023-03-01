<script setup lang="ts">
import { computed  } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import { ipcRenderer } from 'electron'
import { useMain } from '../stores/index'

const mainStroe = useMain()

const isFullScreen = computed(()=>mainStroe.getIsFullScreen)

const closeWindow = () => {
  ipcRenderer.send('close')
}
const maximize = () => {
  ipcRenderer.send('maximize')
  mainStroe.changeScreen(true)
  
}
const minimize = () => {
  ipcRenderer.send('minimize')
 // mainStroe.changeScreen(false)
}
const cancleFullScreen = () => {
  ipcRenderer.send('cancleFullScreen')
  mainStroe.changeScreen(false)
}
</script>
<template>
  <div>
    <div class="header">
      <div class="logo">
        <img style="width:20px; height: 20px; margin-top:4px" src="/logo.png">
      </div>
      <div class="tools">
        <div class="btn-tool" @click="() => closeWindow()">
          <el-icon class="icon" color="#fff"><Close /></el-icon>
        </div>
        <div v-if="isFullScreen" class="btn-tool" @click="() =>cancleFullScreen()">
          <el-icon class="icon" color="#fff"><CopyDocument /></el-icon>
        </div>  
        <div v-else class="btn-tool" @click="() =>maximize()">
          <el-icon class="icon" color="#fff"><FullScreen /></el-icon>
        </div>
        <div class="btn-tool" @click="() => minimize()">
          <el-icon class="icon" color="#fff"><Minus /></el-icon>
        </div>
      </div>
    </div>
  </div>
  <HelloWorld msg="Electron + Vite + Vue" />
  <div class="flex-center">
    Place static files into the <code>/public</code> folder
    <img style="width:5em;" src="/node.svg" alt="Node logo">
  </div>
</template>

<style lang="scss">
.header{
  display: flex;
  height: 28px;
  line-height: 28px;
  background: RGBA(50, 50, 51,.5);
  width: 100%;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
  -webkit-app-region: drag;
  .logo{
    width: 40px;
    height: 100%;
    line-height: 100%;
    text-align: center;
  }
  .tools{
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1;
    .btn-tool{
      -webkit-app-region: no-drag;
      // background-color: green;
      width: 40px;
      height: 100%;
      line-height: 100%;
      text-align: center;
      &:hover{
        background-color: rgba(255, 255, 255, 0.2);
      }
      .icon{
        width: 40px;
        height: 100%;
        line-height: 100%;
        text-align: center;
      }
    }
 }
}
</style>
