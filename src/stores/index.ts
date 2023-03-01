import { defineStore } from 'pinia'

export const useMain = defineStore('use_main',{
    state: () => ({
        isFullScreen: false
    }),
    getters: {
        getIsFullScreen: (state) => state.isFullScreen
    },
    actions: {
        changeScreen(value:boolean) {
            this.isFullScreen = value
            console.log(value)
        }
    }
})

