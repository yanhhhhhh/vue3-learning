import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 父子组件demo
// import Parent from './Parent.vue'
// router demo
// import Router from './components/router/RouterView.vue'
// pinia demo
import App from './App.vue'
// 1.创建pinia实例
const pinia = createPinia()
const app = createApp(App)
// 挂载到vue根实例
app.use(pinia)
app.mount('#app')
