import type { App } from 'vue'
import { createPinia } from 'pinia'

// 导入所有组件
import Button from './components/Button/index.vue'
import Input from './components/Input/index.vue'
import Loading from './components/Loading/index.vue'

// 导入样式
import './styles/index.css'

// 导入composables
import { useLoading } from './composables/useLoading'

// 所有组件列表
// 用于批量注册组件
const components = [
  Button,   // 按钮组件
  Input,    // 输入框组件
  Loading   // Loading组件
]

/**
 * 插件安装方法
 * 用于全量导入时注册所有组件
 * @param app Vue应用实例
 */
const install = (app: App): void => {
  // 安装 Pinia 状态管理
  app.use(createPinia())
  
  // 批量注册所有组件
  components.forEach(component => {
    if (component.name) {
      app.component(component.name, component)
    }
  })
}

// 按需导入
// 支持单独导入组件和composables
export { Button, Input, Loading, useLoading }

// 全量导入
// 支持通过app.use()方式全量导入
export default {
  install,            // 安装方法
  version: '1.0.0'    // 版本号
}

// 支持通过CDN方式使用
// 如果在浏览器环境中检测到Vue，则自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
} 