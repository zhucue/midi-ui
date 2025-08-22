<template>
  <ComponentDemo title="Table 表格" description="用于展示多条结构类似的数据">
    <DemoGroup title="基础表格">
      <mi-table :data="tableData" :columns="tableColumns" />
    </DemoGroup>
    
    <DemoGroup title="带斑马纹表格">
      <mi-table :data="tableData" :columns="tableColumns" stripe />
    </DemoGroup>

    <DemoGroup title="带边框表格">
      <mi-table :data="tableData" :columns="tableColumns" border />
    </DemoGroup>

    <!-- 暂时注释掉复杂功能 -->
    <!-- <DemoGroup title="多选表格">
      <mi-table
        :data="tableData"
        :columns="selectionColumns"
        @selection-change="handleSelectionChange"
      />
      <div class="selection-info" v-if="selectedRows.length > 0">
        已选择 {{ selectedRows.length }} 行
      </div>
    </DemoGroup>

    <DemoGroup title="排序表格">
      <mi-table
        :data="tableData"
        :columns="sortableColumns"
        @sort-change="handleSortChange"
      />
    </DemoGroup> -->
  </ComponentDemo>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentDemo from './ComponentDemo.vue'
import DemoGroup from './DemoGroup.vue'

defineOptions({
  name: 'TableDemo'
})

const selectedRows = ref([])

const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    age: 32
  },
  {
    date: '2016-05-04',
    name: '李小明',
    address: '上海市普陀区金沙江路 1517 弄',
    age: 28
  },
  {
    date: '2016-05-01',
    name: '张小红',
    address: '上海市普陀区金沙江路 1519 弄',
    age: 35
  },
  {
    date: '2016-05-03',
    name: '刘小强',
    address: '上海市普陀区金沙江路 1516 弄',
    age: 30
  }
])

const tableColumns = ref([
  {
    prop: 'date',
    label: '日期',
    width: '180'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '120'
  },
  {
    prop: 'address',
    label: '地址'
  }
])

const selectionColumns = ref([
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
    width: '120'
  },
  {
    prop: 'address',
    label: '地址'
  }
])

const sortableColumns = ref([
  {
    prop: 'date',
    label: '日期',
    width: '180',
    sortable: true
  },
  {
    prop: 'name',
    label: '姓名',
    width: '120'
  },
  {
    prop: 'age',
    label: '年龄',
    width: '80',
    sortable: true
  },
  {
    prop: 'address',
    label: '地址'
  }
])

const handleSelectionChange = (selection: any[]) => {
  selectedRows.value = selection
  console.log('选中的行:', selection)
}

const handleSortChange = ({ column, prop, order }: any) => {
  console.log('排序变化:', { column, prop, order })
}
</script>

<style scoped>
.selection-info {
  margin-top: 16px;
  padding: 8px 16px;
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 4px;
  color: #0369a1;
  font-size: 14px;
}
</style>
