import { createApp } from 'vue'
import App from './App.vue'
import MidiUI from './index'

const app = createApp(App)

// 使用组件库
app.use(MidiUI)

app.mount('#app') 