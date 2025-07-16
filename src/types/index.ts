// 组件尺寸
export type Size = 'small' | 'medium' | 'large'

// 组件类型
export type Type = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

// 按钮组件属性
export interface ButtonProps {
  type?: Type
  size?: Size
  disabled?: boolean
  loading?: boolean
  icon?: string
  round?: boolean
  circle?: boolean
  plain?: boolean
}

// 输入框组件属性
export interface InputProps {
  modelValue?: string | number
  type?: string
  size?: Size
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  showPassword?: boolean
  maxlength?: number
  minlength?: number
}

// Loading组件属性接口
export interface LoadingProps {
  visible?: boolean       // 是否显示Loading，默认false
  text?: string          // 加载文字，可选
  maskClosable?: boolean // 是否可点击遮罩关闭，默认false
  zIndex?: number        // 层级，默认9999
  spinner?:'dots' | 'circle' | 'bars'
}

// 全局组件实例类型
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    MiButton: typeof import('../components/Button/index.vue')['default']
    MiInput: typeof import('../components/Input/index.vue')['default']
    MiLoading: typeof import('../components/Loading/index.vue')['default']
  }
} 