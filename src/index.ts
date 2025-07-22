import type { App } from 'vue'
import Button from './components/Button/index.vue'
import Input from './components/Input/index.vue'
import Loading from './components/Loading/index.vue'
import GlobalLoading from './components/GlobalLoading/index.vue'
import Color from './components/Color/index.vue'
import Switch from './components/Switch/index.vue'
import { useLoading } from './composables/useLoading'

// 样式
import './styles/index.css'

const components = [Button, Input, Loading, GlobalLoading, Color, Switch]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name || component.__name, component)
  })
}

export {
  Button,
  Input,
  Loading,
  GlobalLoading,
  Color,
  Switch,
  useLoading,
  install,
}

export default {
  install,
}

// 类型导出
export * from './types'
