# 快速开始

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue';
import MidiUI from 'midi-ui';
import 'midi-ui/dist/style.css';

import App from './App.vue';

const app = createApp(App);

app.use(MidiUI);
app.mount('#app');
```

## 按需引入

Midi UI 提供了基于 ES modules 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <div>
    <mi-button @click="showLoading">按钮</mi-button>
    <mi-input v-model="input" placeholder="请输入内容"></mi-input>

    <!-- 全局Loading组件 -->
    <mi-global-loading />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Input, useLoading } from 'midi-ui';
import 'midi-ui/dist/style.css';

const input = ref('');
const { showLoading, hideLoading } = useLoading();

const handleShowLoading = () => {
  showLoading('加载中...');
  setTimeout(() => {
    hideLoading();
  }, 2000);
};
</script>
```

### 使用Loading组件

```vue
<template>
  <div>
    <!-- 使用全局Loading -->
    <mi-button @click="fetchData">获取数据</mi-button>

    <!-- 使用局部Loading -->
    <mi-loading :visible="loading" text="处理中..." />

    <!-- 全局Loading组件 -->
    <mi-global-loading />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Loading, useLoading } from 'midi-ui';

const loading = ref(false);
const { showLoading, hideLoading } = useLoading();

const fetchData = async () => {
  try {
    showLoading('正在获取数据...');
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 2000));
  } finally {
    hideLoading();
  }
};
</script>
```

## 开始使用

现在你可以启动你的项目了。对于各个组件的使用方法，请参阅它们各自的文档。
