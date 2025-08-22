<template>
  <ComponentDemo title="Input 输入框" description="通过鼠标或键盘输入字符">
    <DemoGroup title="基础用法">
      <mi-input v-model="inputValue" placeholder="请输入内容" style="width: 200px;" />
      <mi-input v-model="clearableValue" clearable placeholder="可清空" style="width: 200px;" />
      <mi-input v-model="passwordValue" type="password" placeholder="请输入密码" style="width: 200px;" />
    </DemoGroup>
    
    <DemoGroup title="禁用状态">
      <mi-input v-model="inputValue" disabled placeholder="禁用状态" style="width: 200px;" />
      <mi-input v-model="inputValue" readonly placeholder="只读状态" style="width: 200px;" />
    </DemoGroup>

    <DemoGroup title="不同尺寸">
      <mi-input v-model="inputValue" size="large" placeholder="大尺寸" style="width: 200px;" />
      <mi-input v-model="inputValue" placeholder="默认尺寸" style="width: 200px;" />
      <mi-input v-model="inputValue" size="small" placeholder="小尺寸" style="width: 200px;" />
    </DemoGroup>

    <DemoGroup title="带图标">
      <mi-input v-model="inputValue" placeholder="搜索内容" style="width: 200px;">
        <template #prefix>🔍</template>
      </mi-input>
      <mi-input v-model="inputValue" placeholder="用户名" style="width: 200px;">
        <template #suffix>👤</template>
      </mi-input>
    </DemoGroup>

    <DemoGroup title="文本域">
      <mi-input 
        v-model="textareaValue" 
        type="textarea" 
        placeholder="请输入多行文本"
        :rows="4"
        style="width: 300px;"
      />
    </DemoGroup>
  </ComponentDemo>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentDemo from './ComponentDemo.vue'
import DemoGroup from './DemoGroup.vue'

defineOptions({
  name: 'InputDemo'
})

const inputValue = ref('')
const clearableValue = ref('可清空的内容')
const passwordValue = ref('')
const textareaValue = ref('')
</script>
