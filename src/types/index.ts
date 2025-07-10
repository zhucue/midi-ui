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

// 全局组件实例类型
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    MButton: typeof import('../components/Button/index.vue')['default']
    MInput: typeof import('../components/Input/index.vue')['default']
  }
} 