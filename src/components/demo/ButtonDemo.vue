<template>
  <ComponentDemo title="Button 按钮" description="常用的操作按钮，支持多种类型和状态">
    <DemoGroup title="基础用法">
      <mi-button>默认按钮</mi-button>
      <mi-button type="primary">主要按钮</mi-button>
      <mi-button type="success">成功按钮</mi-button>
      <mi-button type="warning">警告按钮</mi-button>
      <mi-button type="danger">危险按钮</mi-button>
      <mi-button type="info">信息按钮</mi-button>
    </DemoGroup>
    
    <DemoGroup title="朴素按钮">
      <mi-button plain>朴素按钮</mi-button>
      <mi-button type="primary" plain>主要按钮</mi-button>
      <mi-button type="success" plain>成功按钮</mi-button>
      <mi-button type="warning" plain>警告按钮</mi-button>
      <mi-button type="danger" plain>危险按钮</mi-button>
      <mi-button type="info" plain>信息按钮</mi-button>
    </DemoGroup>

    <DemoGroup title="圆角按钮">
      <mi-button round>圆角按钮</mi-button>
      <mi-button type="primary" round>主要按钮</mi-button>
      <mi-button type="success" round>成功按钮</mi-button>
      <mi-button type="warning" round>警告按钮</mi-button>
      <mi-button type="danger" round>危险按钮</mi-button>
      <mi-button type="info" round>信息按钮</mi-button>
    </DemoGroup>

    <DemoGroup title="不同尺寸">
      <mi-button size="large">大型按钮</mi-button>
      <mi-button>默认按钮</mi-button>
      <mi-button size="small">小型按钮</mi-button>
    </DemoGroup>

    <DemoGroup title="加载状态">
      <mi-button :loading="loading" @click="toggleLoading">
        {{ loading ? '加载中' : '点击加载' }}
      </mi-button>
      <mi-button type="primary" :loading="loading" @click="toggleLoading">主要按钮</mi-button>
    </DemoGroup>

    <DemoGroup title="禁用状态">
      <mi-button disabled>默认按钮</mi-button>
      <mi-button type="primary" disabled>主要按钮</mi-button>
      <mi-button type="success" disabled>成功按钮</mi-button>
      <mi-button type="warning" disabled>警告按钮</mi-button>
      <mi-button type="danger" disabled>危险按钮</mi-button>
      <mi-button type="info" disabled>信息按钮</mi-button>
    </DemoGroup>
  </ComponentDemo>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentDemo from './ComponentDemo.vue'
import DemoGroup from './DemoGroup.vue'

defineOptions({
  name: 'ButtonDemo'
})

const loading = ref(false)

const toggleLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
