<template>
  <div :class="tableClass" :style="tableStyle">
    <!-- 表格主体 -->
    <div class="mi-table__wrapper">
      <table class="mi-table__table">
        <!-- 表头 -->
        <thead v-if="showHeader" class="mi-table__header">
          <tr :class="headerRowClass" :style="headerRowStyle">
            <th
              v-for="(column, columnIndex) in computedColumns"
              :key="column.prop || columnIndex"
              :class="getHeaderCellClass(column, columnIndex)"
              :style="getHeaderCellStyle(column, columnIndex)"
              :width="column.width"
              @click="handleHeaderClick(column)"
            >
              <div class="mi-table__cell">
                <!-- 选择列 -->
                <template v-if="column.type === 'selection'">
                  <input
                    type="checkbox"
                    :checked="isAllSelected"
                    :indeterminate="isIndeterminate"
                    @change="handleSelectAll"
                    class="mi-table__checkbox"
                  />
                </template>
                <!-- 序号列 -->
                <template v-else-if="column.type === 'index'">
                  #
                </template>
                <!-- 普通列 -->
                <template v-else>
                  <span>{{ column.label }}</span>
                  <!-- 排序图标 -->
                  <span v-if="column.sortable" class="mi-table__sort-wrapper">
                    <i 
                      :class="getSortIconClass(column, 'ascending')"
                      @click.stop="handleSort(column, 'ascending')"
                    ></i>
                    <i 
                      :class="getSortIconClass(column, 'descending')"
                      @click.stop="handleSort(column, 'descending')"
                    ></i>
                  </span>
                </template>
              </div>
            </th>
          </tr>
        </thead>
        
        <!-- 表体 -->
        <tbody class="mi-table__body">
          <!-- 数据行 -->
          <tr
            v-for="(row, rowIndex) in sortedData"
            :key="getRowKey(row, rowIndex)"
            :class="getRowClass(row, rowIndex)"
            :style="getRowStyle(row, rowIndex)"
            @click="handleRowClick(row, rowIndex)"
          >
            <td
              v-for="(column, columnIndex) in computedColumns"
              :key="column.prop || columnIndex"
              :class="getCellClass(row, column, rowIndex, columnIndex)"
              :style="getCellStyle(row, column, rowIndex, columnIndex)"
            >
              <div class="mi-table__cell">
                <!-- 选择列 -->
                <template v-if="column.type === 'selection'">
                  <input
                    type="checkbox"
                    :checked="isRowSelected(row)"
                    @change="handleRowSelect(row, $event)"
                    class="mi-table__checkbox"
                  />
                </template>
                <!-- 序号列 -->
                <template v-else-if="column.type === 'index'">
                  {{ rowIndex + 1 }}
                </template>
                <!-- 展开列 -->
                <template v-else-if="column.type === 'expand'">
                  <i 
                    :class="getExpandIconClass(row)"
                    @click="handleExpandClick(row, rowIndex)"
                  ></i>
                </template>
                <!-- 普通列 -->
                <template v-else>
                  <slot 
                    :name="column.prop" 
                    :row="row" 
                    :column="column" 
                    :$index="rowIndex"
                  >
                    {{ formatCellValue(row, column, rowIndex) }}
                  </slot>
                </template>
              </div>
            </td>
          </tr>
          
          <!-- 展开行 -->
          <template v-for="(row, rowIndex) in sortedData" :key="`expand-${getRowKey(row, rowIndex)}`">
            <tr v-if="isRowExpanded(row)" class="mi-table__expand-row">
              <td :colspan="computedColumns.length" class="mi-table__expand-cell">
                <slot name="expand" :row="row" :$index="rowIndex">
                  <div class="mi-table__expand-content">
                    展开内容
                  </div>
                </slot>
              </td>
            </tr>
          </template>
          
          <!-- 空数据 -->
          <tr v-if="!sortedData.length" class="mi-table__empty-row">
            <td :colspan="computedColumns.length" class="mi-table__empty-cell">
              <div class="mi-table__empty">
                <slot name="empty">
                  {{ emptyText }}
                </slot>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { TableProps, TableColumn, SortOrder } from '@/types'

defineOptions({
  name: 'MiTable'
})

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  stripe: false,
  border: false,
  size: 'medium',
  fit: true,
  showHeader: true,
  highlightCurrentRow: false,
  emptyText: '暂无数据',
  defaultExpandAll: false,
  expandRowKeys: () => [],
  tooltipEffect: 'dark',
  showSummary: false,
  sumText: '合计',
  selectOnIndeterminate: true,
  indent: 16,
  lazy: false
})

const emit = defineEmits<{
  'selection-change': [selection: any[]]
  'select': [selection: any[], row: any]
  'select-all': [selection: any[]]
  'sort-change': [{ column: TableColumn; prop: string; order: SortOrder }]
  'row-click': [row: any, column: TableColumn, event: Event]
  'cell-click': [row: any, column: TableColumn, cell: HTMLElement, event: Event]
  'expand-change': [row: any, expandedRows: any[]]
  'current-change': [currentRow: any, oldCurrentRow: any]
}>()

// 响应式数据
const selectedRows = ref<any[]>([])
const expandedRows = ref<any[]>([])
const currentRow = ref<any>(null)
const sortColumn = ref<TableColumn | null>(null)
const sortOrder = ref<SortOrder>(null)

// 计算属性
const tableClass = computed(() => [
  'mi-table',
  `mi-table--${props.size}`,
  {
    'mi-table--striped': props.stripe,
    'mi-table--border': props.border,
    'mi-table--fit': props.fit
  }
])

const tableStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.height) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  if (props.maxHeight) {
    style.maxHeight = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight
  }
  return style
})

const computedColumns = computed(() => {
  return props.columns || []
})

const sortedData = computed(() => {
  let data = [...(props.data || [])]
  
  if (sortColumn.value && sortOrder.value && sortColumn.value.prop) {
    data.sort((a, b) => {
      const aVal = a[sortColumn.value!.prop!]
      const bVal = b[sortColumn.value!.prop!]
      
      if (aVal === bVal) return 0
      
      const result = aVal > bVal ? 1 : -1
      return sortOrder.value === 'ascending' ? result : -result
    })
  }
  
  return data
})

const isAllSelected = computed(() => {
  return sortedData.value.length > 0 && selectedRows.value.length === sortedData.value.length
})

const isIndeterminate = computed(() => {
  return selectedRows.value.length > 0 && selectedRows.value.length < sortedData.value.length
})

const headerRowClass = computed(() => {
  if (typeof props.headerRowClassName === 'function') {
    return props.headerRowClassName(0)
  }
  return props.headerRowClassName
})

const headerRowStyle = computed(() => {
  if (typeof props.headerRowStyle === 'function') {
    return props.headerRowStyle(0)
  }
  return props.headerRowStyle
})

// 方法
const getRowKey = (row: any, index: number): string => {
  if (typeof props.rowKey === 'function') {
    return props.rowKey(row)
  }
  return props.rowKey ? row[props.rowKey] : index.toString()
}

const getRowClass = (row: any, rowIndex: number) => {
  const classes = ['mi-table__row']
  
  if (props.stripe && rowIndex % 2 === 1) {
    classes.push('mi-table__row--striped')
  }
  
  if (props.highlightCurrentRow && currentRow.value === row) {
    classes.push('mi-table__row--current')
  }
  
  if (typeof props.rowClassName === 'function') {
    const customClass = props.rowClassName(row, rowIndex)
    if (customClass) classes.push(customClass)
  } else if (props.rowClassName) {
    classes.push(props.rowClassName)
  }
  
  return classes
}

const getRowStyle = (row: any, rowIndex: number) => {
  if (typeof props.rowStyle === 'function') {
    return props.rowStyle(row, rowIndex)
  }
  return props.rowStyle
}

const getCellClass = (row: any, column: TableColumn, rowIndex: number, columnIndex: number) => {
  const classes = ['mi-table__cell-wrapper']
  
  if (column.align) {
    classes.push(`mi-table__cell--${column.align}`)
  }
  
  if (typeof props.cellClassName === 'function') {
    const customClass = props.cellClassName(row, column, rowIndex, columnIndex)
    if (customClass) classes.push(customClass)
  } else if (props.cellClassName) {
    classes.push(props.cellClassName)
  }
  
  return classes
}

const getCellStyle = (row: any, column: TableColumn, rowIndex: number, columnIndex: number) => {
  if (typeof props.cellStyle === 'function') {
    return props.cellStyle(row, column, rowIndex, columnIndex)
  }
  return props.cellStyle
}

const getHeaderCellClass = (column: TableColumn, columnIndex: number) => {
  const classes = ['mi-table__header-cell']
  
  if (column.headerAlign || column.align) {
    classes.push(`mi-table__cell--${column.headerAlign || column.align}`)
  }
  
  if (column.sortable) {
    classes.push('mi-table__header-cell--sortable')
  }
  
  if (typeof props.headerCellClassName === 'function') {
    const customClass = props.headerCellClassName(column, columnIndex)
    if (customClass) classes.push(customClass)
  } else if (props.headerCellClassName) {
    classes.push(props.headerCellClassName)
  }
  
  return classes
}

const getHeaderCellStyle = (column: TableColumn, columnIndex: number) => {
  if (typeof props.headerCellStyle === 'function') {
    return props.headerCellStyle(column, columnIndex)
  }
  return props.headerCellStyle
}

const formatCellValue = (row: any, column: TableColumn, rowIndex: number) => {
  if (!column.prop) return ''
  
  const cellValue = row[column.prop]
  
  if (column.formatter) {
    return column.formatter(row, column, cellValue, rowIndex)
  }
  
  return cellValue
}

const getSortIconClass = (column: TableColumn, order: SortOrder) => {
  const classes = ['mi-table__sort-icon']
  
  if (sortColumn.value === column && sortOrder.value === order) {
    classes.push('mi-table__sort-icon--active')
  }
  
  classes.push(order === 'ascending' ? 'mi-table__sort-icon--asc' : 'mi-table__sort-icon--desc')
  
  return classes
}

const getExpandIconClass = (row: any) => {
  const classes = ['mi-table__expand-icon']
  
  if (isRowExpanded(row)) {
    classes.push('mi-table__expand-icon--expanded')
  }
  
  return classes
}

const isRowSelected = (row: any): boolean => {
  return selectedRows.value.includes(row)
}

const isRowExpanded = (row: any): boolean => {
  return expandedRows.value.includes(row)
}

const handleHeaderClick = (column: TableColumn) => {
  if (column.sortable) {
    handleSort(column)
  }
}

const handleSort = (column: TableColumn, order?: SortOrder) => {
  if (!column.sortable || !column.prop) return
  
  if (order) {
    sortOrder.value = order
  } else {
    if (sortColumn.value === column) {
      if (sortOrder.value === 'ascending') {
        sortOrder.value = 'descending'
      } else if (sortOrder.value === 'descending') {
        sortOrder.value = null
        sortColumn.value = null
      } else {
        sortOrder.value = 'ascending'
      }
    } else {
      sortOrder.value = 'ascending'
    }
  }
  
  if (sortOrder.value) {
    sortColumn.value = column
  }
  
  emit('sort-change', {
    column,
    prop: column.prop,
    order: sortOrder.value
  })
}

const handleSelectAll = (event: Event) => {
  const target = event.target as HTMLInputElement
  
  if (target.checked) {
    selectedRows.value = [...sortedData.value]
  } else {
    selectedRows.value = []
  }
  
  emit('select-all', selectedRows.value)
  emit('selection-change', selectedRows.value)
}

const handleRowSelect = (row: any, event: Event) => {
  const target = event.target as HTMLInputElement
  
  if (target.checked) {
    if (!selectedRows.value.includes(row)) {
      selectedRows.value.push(row)
    }
  } else {
    const index = selectedRows.value.indexOf(row)
    if (index > -1) {
      selectedRows.value.splice(index, 1)
    }
  }
  
  emit('select', selectedRows.value, row)
  emit('selection-change', selectedRows.value)
}

const handleRowClick = (row: any, rowIndex: number) => {
  if (props.highlightCurrentRow) {
    const oldCurrentRow = currentRow.value
    currentRow.value = row
    emit('current-change', currentRow.value, oldCurrentRow)
  }
  
  // 这里需要获取 column 和 event，暂时传 null
  emit('row-click', row, null as any, null as any)
}

const handleExpandClick = (row: any, rowIndex: number) => {
  const index = expandedRows.value.indexOf(row)
  
  if (index > -1) {
    expandedRows.value.splice(index, 1)
  } else {
    expandedRows.value.push(row)
  }
  
  emit('expand-change', row, expandedRows.value)
}

// 初始化默认排序
watch(() => props.defaultSort, (newSort) => {
  if (newSort && newSort.prop) {
    const column = computedColumns.value.find(col => col.prop === newSort.prop)
    if (column) {
      sortColumn.value = column
      sortOrder.value = newSort.order
    }
  }
}, { immediate: true })

// 初始化展开行
watch(() => props.expandRowKeys, (newKeys) => {
  if (newKeys && newKeys.length > 0) {
    expandedRows.value = sortedData.value.filter(row => {
      const key = getRowKey(row, 0)
      return newKeys.includes(key)
    })
  }
}, { immediate: true })

// 初始化默认展开所有行
watch(() => props.defaultExpandAll, (newVal) => {
  if (newVal) {
    expandedRows.value = [...sortedData.value]
  }
}, { immediate: true })
</script>
