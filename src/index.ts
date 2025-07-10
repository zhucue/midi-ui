import type { App } from 'vue'
import { createPinia } from 'pinia'

// 导入所有组件
import Button from './components/Button/index.vue'
import Input from './components/Input/index.vue'

// 导入样式
import './styles/index.css'

// 所有组件列表
const components = [
  Button,
  Input
]

// 定义 install 方法
const install = (app: App): void => {
  // 安装 Pinia
  app.use(createPinia())
  
  // 注册所有组件
  components.forEach(component => {
    if (component.name) {
      app.component(component.name, component)
    }
  })
}

// 按需导入
export { Button, Input }

// 全量导入
export default {
  install,
  version: '1.0.0'
}

// 支持通过CDN方式使用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
} 