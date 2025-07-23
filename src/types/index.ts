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

// 表格排序方向
export type SortOrder = 'ascending' | 'descending' | null

// 表格列配置接口
export interface TableColumn {
  prop?: string          // 对应列内容的字段名
  label?: string         // 显示的标题
  width?: string | number // 对应列的宽度
  minWidth?: string | number // 对应列的最小宽度
  fixed?: boolean | 'left' | 'right' // 列是否固定
  sortable?: boolean     // 对应列是否可以排序
  align?: 'left' | 'center' | 'right' // 对齐方式
  headerAlign?: 'left' | 'center' | 'right' // 表头对齐方式
  showOverflowTooltip?: boolean // 当内容过长被隐藏时显示 tooltip
  formatter?: (row: any, column: TableColumn, cellValue: any, index: number) => string // 用来格式化内容
  type?: 'selection' | 'index' | 'expand' // 对应列的类型
}

// 表格组件属性接口
export interface TableProps {
  data?: any[]           // 显示的数据
  columns?: TableColumn[] // 表格列的配置描述
  height?: string | number // Table 的高度
  maxHeight?: string | number // Table 的最大高度
  stripe?: boolean       // 是否为斑马纹 table
  border?: boolean       // 是否带有纵向边框
  size?: Size           // Table 的尺寸
  fit?: boolean         // 列的宽度是否自撑开
  showHeader?: boolean  // 是否显示表头
  highlightCurrentRow?: boolean // 是否要高亮当前行
  rowClassName?: string | ((row: any, rowIndex: number) => string) // 行的 className 的回调方法
  rowStyle?: object | ((row: any, rowIndex: number) => object) // 行的 style 的回调方法
  cellClassName?: string | ((row: any, column: TableColumn, rowIndex: number, columnIndex: number) => string) // 单元格的 className 的回调方法
  cellStyle?: object | ((row: any, column: TableColumn, rowIndex: number, columnIndex: number) => object) // 单元格的 style 的回调方法
  headerRowClassName?: string | ((rowIndex: number) => string) // 表头行的 className 的回调方法
  headerRowStyle?: object | ((rowIndex: number) => object) // 表头行的 style 的回调方法
  headerCellClassName?: string | ((column: TableColumn, columnIndex: number) => string) // 表头单元格的 className 的回调方法
  headerCellStyle?: object | ((column: TableColumn, columnIndex: number) => object) // 表头单元格的 style 的回调方法
  rowKey?: string | ((row: any) => string) // 行数据的 Key
  emptyText?: string    // 空数据时显示的文本内容
  defaultExpandAll?: boolean // 是否默认展开所有行
  expandRowKeys?: any[] // 可以通过该属性设置 Table 目前的展开行
  defaultSort?: { prop: string; order: SortOrder } // 默认的排序列的 prop 和顺序
  tooltipEffect?: 'dark' | 'light' // tooltip effect 属性
  showSummary?: boolean // 是否在表尾显示合计行
  sumText?: string      // 合计行第一列的文本
  summaryMethod?: (columns: TableColumn[], data: any[]) => string[] // 自定义的合计计算方法
  spanMethod?: (row: any, column: TableColumn, rowIndex: number, columnIndex: number) => number[] | { rowspan: number; colspan: number } // 合并行或列的计算方法
  selectOnIndeterminate?: boolean // 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为
  indent?: number       // 展示树形数据时，树节点的缩进
  lazy?: boolean        // 是否懒加载子节点数据
  load?: (row: any, treeNode: any, resolve: (data: any[]) => void) => void // 加载子节点数据的函数
  treeProps?: { children?: string; hasChildren?: string } // 渲染嵌套数据的配置选项
}

// 全局组件实例类型
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    MiButton: typeof import('../components/Button/index.vue')['default']
    MiInput: typeof import('../components/Input/index.vue')['default']
    MiLoading: typeof import('../components/Loading/index.vue')['default']
    MiSwitch: typeof import('../components/Switch/index.vue')['default']
    MiTable: typeof import('../components/Table/index.vue')['default']
  }
}