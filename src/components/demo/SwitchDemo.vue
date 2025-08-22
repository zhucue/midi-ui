<template>
  <ComponentDemo title="Switch 开关" description="表示两种相互对立状态间的切换">
    <DemoGroup title="基础用法">
      <mi-switch v-model="switchValue1" />
      <mi-switch 
        v-model="switchValue2" 
        active-color="#13ce66" 
        inactive-color="#ff4949"
      />
      <span class="demo-text">开关状态：{{ switchValue1 ? '开启' : '关闭' }}</span>
    </DemoGroup>
    
    <DemoGroup title="文字描述">
      <mi-switch
        v-model="switchValue3"
        active-text="开启"
        inactive-text="关闭"
      />
      <mi-switch
        v-model="switchValue4"
        active-text="ON"
        inactive-text="OFF"
        text-inside
      />
    </DemoGroup>

    <DemoGroup title="禁用状态">
      <mi-switch v-model="switchValue5" disabled />
      <mi-switch v-model="switchValue6" disabled />
    </DemoGroup>

    <DemoGroup title="不同尺寸">
      <mi-switch v-model="switchValue7" size="large" />
      <mi-switch v-model="switchValue7" size="medium" />
      <mi-switch v-model="switchValue7" size="small" />
    </DemoGroup>

    <DemoGroup title="自定义宽度">
      <mi-switch 
        v-model="switchValue8" 
        :width="60"
        active-text="开启"
        inactive-text="关闭"
        text-inside
      />
    </DemoGroup>
  </ComponentDemo>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentDemo from './ComponentDemo.vue'
import DemoGroup from './DemoGroup.vue'

defineOptions({
  name: 'SwitchDemo'
})

const switchValue1 = ref(true)
const switchValue2 = ref(false)
const switchValue3 = ref(true)
const switchValue4 = ref(false)
const switchValue5 = ref(true)
const switchValue6 = ref(false)
const switchValue7 = ref(true)
const switchValue8 = ref(false)
</script>

<style scoped>
.demo-text {
  color: #666;
  font-size: 14px;
}
</style>
