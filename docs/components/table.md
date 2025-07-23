# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。

```vue
<template>
  <mi-table :data="tableData" :columns="columns" />
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }
])

const columns = ref([
  {
    prop: 'date',
    label: '日期',
    width: '180'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '180'
  },
  {
    prop: 'address',
    label: '地址'
  }
])
</script>
```

## 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

```vue
<template>
  <mi-table :data="tableData" :columns="columns" stripe />
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }
])

const columns = ref([
  {
    prop: 'date',
    label: '日期',
    width: '180'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '180'
  },
  {
    prop: 'address',
    label: '地址'
  }
])
</script>
```

## 带边框表格

```vue
<template>
  <mi-table :data="tableData" :columns="columns" border />
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }
])

const columns = ref([
  {
    prop: 'date',
    label: '日期',
    width: '180'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '180'
  },
  {
    prop: 'address',
    label: '地址'
  }
])
</script>
```

## 固定表头

纵向内容过多时，可选择固定表头。

```vue
<template>
  <mi-table :data="tableData" :columns="columns" height="250" />
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref(
  Array.from({ length: 20 }).map((_, index) => ({
    date: '2016-05-02',
    name: `王小虎 ${index}`,
    address: '上海市普陀区金沙江路 1518 弄'
  }))
)

const columns = ref([
  {
    prop: 'date',
    label: '日期',
    width: '180'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '180'
  },
  {
    prop: 'address',
    label: '地址'
  }
])
</script>
```

## 多选

选择多行数据时使用 Checkbox。

```vue
<template>
  <mi-table 
    :data="tableData" 
    :columns="columns" 
    @selection-change="handleSelectionChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }
])

const columns = ref([
  {
    type: 'selection',
    width: '55'
  },
  {
    prop: 'date',
    label: '日期',
    width: '180'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '180'
  },
  {
    prop: 'address',
    label: '地址'
  }
])

const handleSelectionChange = (selection) => {
  console.log('选中的行:', selection)
}
</script>
```

## 排序

对表格进行排序，可快速查找或对比数据。

```vue
<template>
  <mi-table 
    :data="tableData" 
    :columns="columns" 
    @sort-change="handleSortChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }
])

const columns = ref([
  {
    prop: 'date',
    label: '日期',
    width: '180',
    sortable: true
  },
  {
    prop: 'name',
    label: '姓名',
    width: '180'
  },
  {
    prop: 'address',
    label: '地址'
  }
])

const handleSortChange = ({ column, prop, order }) => {
  console.log('排序变化:', { column, prop, order })
}
</script>
```

## 自定义列模板

自定义列的显示内容，可组合其他组件使用。

```vue
<template>
  <mi-table :data="tableData" :columns="columns">
    <template #name="{ row }">
      <mi-button type="primary" size="small">{{ row.name }}</mi-button>
    </template>
    <template #operations="{ row, $index }">
      <mi-button size="small" @click="handleEdit($index, row)">编辑</mi-button>
      <mi-button size="small" type="danger" @click="handleDelete($index, row)">删除</mi-button>
    </template>
  </mi-table>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }
])

const columns = ref([
  {
    prop: 'date',
    label: '日期',
    width: '180'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '180'
  },
  {
    prop: 'address',
    label: '地址'
  },
  {
    prop: 'operations',
    label: '操作',
    width: '180'
  }
])

const handleEdit = (index, row) => {
  console.log('编辑:', index, row)
}

const handleDelete = (index, row) => {
  console.log('删除:', index, row)
}
</script>
```

## 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。

```vue
<template>
  <mi-table :data="tableData" :columns="columns">
    <template #expand="{ row }">
      <div style="padding: 20px;">
        <p>姓名: {{ row.name }}</p>
        <p>地址: {{ row.address }}</p>
        <p>详细信息: {{ row.detail }}</p>
      </div>
    </template>
  </mi-table>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    detail: '这是一些详细信息...'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
    detail: '这是一些详细信息...'
  }
])

const columns = ref([
  {
    type: 'expand',
    width: '50'
  },
  {
    prop: 'date',
    label: '日期',
    width: '180'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '180'
  },
  {
    prop: 'address',
    label: '地址'
  }
])
</script>
```

## API

### Table Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 显示的数据 | array | — | — |
| columns | 表格列的配置描述 | array | — | — |
| height | Table 的高度 | string / number | — | — |
| max-height | Table 的最大高度 | string / number | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false |
| border | 是否带有纵向边框 | boolean | — | false |
| size | Table 的尺寸 | string | large / medium / small | medium |
| fit | 列的宽度是否自撑开 | boolean | — | true |
| show-header | 是否显示表头 | boolean | — | true |
| highlight-current-row | 是否要高亮当前行 | boolean | — | false |
| row-class-name | 行的 className 的回调方法 | Function(row, rowIndex) / string | — | — |
| row-style | 行的 style 的回调方法 | Function(row, rowIndex) / object | — | — |
| cell-class-name | 单元格的 className 的回调方法 | Function(row, column, rowIndex, columnIndex) / string | — | — |
| cell-style | 单元格的 style 的回调方法 | Function(row, column, rowIndex, columnIndex) / object | — | — |
| header-row-class-name | 表头行的 className 的回调方法 | Function(rowIndex) / string | — | — |
| header-row-style | 表头行的 style 的回调方法 | Function(rowIndex) / object | — | — |
| header-cell-class-name | 表头单元格的 className 的回调方法 | Function(column, columnIndex) / string | — | — |
| header-cell-style | 表头单元格的 style 的回调方法 | Function(column, columnIndex) / object | — | — |
| row-key | 行数据的 Key | Function(row) / string | — | — |
| empty-text | 空数据时显示的文本内容 | string | — | 暂无数据 |
| default-expand-all | 是否默认展开所有行 | boolean | — | false |
| expand-row-keys | 可以通过该属性设置 Table 目前的展开行 | array | — | — |
| default-sort | 默认的排序列的 prop 和顺序 | object | order: ascending / descending | — |
| tooltip-effect | tooltip effect 属性 | string | dark / light | dark |
| show-summary | 是否在表尾显示合计行 | boolean | — | false |
| sum-text | 合计行第一列的文本 | string | — | 合计 |
| summary-method | 自定义的合计计算方法 | Function(columns, data) | — | — |
| span-method | 合并行或列的计算方法 | Function(row, column, rowIndex, columnIndex) | — | — |

### Table Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| cell-click | 当某个单元格被点击时会触发该事件 | row, column, cell, event |
| row-click | 当某一行被点击时会触发该事件 | row, column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| expand-change | 当用户对某一行展开或者关闭的时候会触发该事件 | row, expandedRows |
| current-change | 当表格的当前行发生变化的时候会触发该事件 | currentRow, oldCurrentRow |

### Table Column

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 对应列的类型 | string | selection / index / expand | — |
| prop | 对应列内容的字段名 | string | — | — |
| label | 显示的标题 | string | — | — |
| width | 对应列的宽度 | string / number | — | — |
| min-width | 对应列的最小宽度 | string / number | — | — |
| fixed | 列是否固定 | string / boolean | true / left / right | — |
| sortable | 对应列是否可以排序 | boolean | — | false |
| align | 对齐方式 | string | left / center / right | left |
| header-align | 表头对齐方式 | string | left / center / right | — |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip | boolean | — | false |
| formatter | 用来格式化内容 | Function(row, column, cellValue, index) | — | — |

### Table Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| — | 自定义列的内容 | { row, column, $index } |
| expand | 展开行的内容 | { row, $index } |
| empty | 空数据时的内容 | — |
