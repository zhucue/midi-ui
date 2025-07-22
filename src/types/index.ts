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

// Switch开关组件属性接口
export interface SwitchProps {
  modelValue?: boolean    // 开关状态，默认false
  disabled?: boolean      // 是否禁用，默认false
  size?: Size            // 开关尺寸
  activeColor?: string   // 激活状态的颜色
  inactiveColor?: string // 非激活状态的颜色
  activeText?: string    // 激活状态的文字描述
  inactiveText?: string  // 非激活状态的文字描述
  textInside?: boolean   // 文字是否显示在开关内部，默认false
  width?: number | string // 开关的宽度
}

// 全局组件实例类型
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    MiButton: typeof import('../components/Button/index.vue')['default']
    MiInput: typeof import('../components/Input/index.vue')['default']
    MiLoading: typeof import('../components/Loading/index.vue')['default']
    MiSwitch: typeof import('../components/Switch/index.vue')['default']
  }
}