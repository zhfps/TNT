<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { ipcRenderer } from 'electron'

const closeWindow = () => {
  ipcRenderer.send('close')
}
</script>
<template>
  <div>
    <div class="header">
      <div class="btn-tool" @click="() => closeWindow()">
        <el-icon class="icon" color="#fff"><Close /></el-icon>
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
  height: 28px;
  line-height: 28px;
  background: RGBA(50, 50, 51,.5);
  width: 100%;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
  -webkit-app-region: drag;
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
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9FEAF9);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
