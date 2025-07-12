---
title: Loading 加载
description: 显示加载状态的组件
---

# Loading 加载

显示加载状态的组件，支持全局和局部加载。

## 基本用法

### 全局Loading

使用 `useLoading` composable 来管理全局Loading状态，这是推荐的使用方式。

```vue
<template>
  <div>
    <mi-button @click="showGlobalLoading">显示全局Loading</mi-button>
    <mi-button @click="showGlobalLoadingWithText">
      显示带文字的Loading
    </mi-button>

    <!-- 全局Loading组件 -->
    <mi-global-loading />
  </div>
</template>

<script setup lang="ts">
import { useLoading } from 'midi-ui';

const { showLoading, hideLoading } = useLoading();

const showGlobalLoading = () => {
  showLoading();
  setTimeout(() => {
    hideLoading();
  }, 3000);
};

const showGlobalLoadingWithText = () => {
  showLoading('数据加载中，请稍候...');
  setTimeout(() => {
    hideLoading();
  }, 3000);
};
</script>
```

### 局部Loading

使用 `mi-loading` 组件来显示局部Loading。

```vue
<template>
  <div>
    <mi-button @click="loading = true">显示局部Loading</mi-button>

    <mi-loading
      :visible="loading"
      text="加载中..."
      :mask-closable="true"
      @close="loading = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);
</script>
```

## 高级用法

### 自定义层级

```vue
<template>
  <mi-loading :visible="loading" text="高层级Loading" :z-index="10000" />
</template>
```

### 点击遮罩关闭

```vue
<template>
  <mi-loading
    :visible="loading"
    text="点击遮罩可关闭"
    :mask-closable="true"
    @close="loading = false"
  />
</template>
```

## API

### Loading Props

| 参数         | 说明               | 类型    | 默认值 |
| ------------ | ------------------ | ------- | ------ |
| visible      | 是否显示Loading    | boolean | false  |
| text         | 加载文字           | string  | -      |
| maskClosable | 点击遮罩层是否关闭 | boolean | false  |
| zIndex       | 层级               | number  | 9999   |

### Loading Events

| 事件名 | 说明              | 回调参数 |
| ------ | ----------------- | -------- |
| close  | 关闭Loading时触发 | -        |

### useLoading Composable

提供全局Loading状态管理功能。

```ts
import { useLoading } from 'midi-ui';

const { state, showLoading, hideLoading } = useLoading();

// 显示Loading
showLoading('加载中...');

// 隐藏Loading
hideLoading();
```

## 特性

- 📦 **两种使用方式**：支持全局和局部Loading
- 🎨 **美观动画**：精心设计的跳动圆点动画
- 🔧 **可自定义**：支持自定义加载文字和层级
- 🎯 **交互友好**：支持点击遮罩关闭
- 🌈 **响应式**：完美适配各种屏幕尺寸
- 🎪 **Portal渲染**：使用Teleport渲染到body
- 🔒 **防滚动**：Loading显示时自动阻止页面滚动
- 🚀 **状态管理**：内置全局状态管理，跨组件共享

## 样式定制

Loading组件支持通过CSS变量进行样式定制：

```css
:root {
  --mi-loading-bg: rgba(255, 255, 255, 0.8);
  --mi-loading-spinner-bg: rgba(255, 255, 255, 0.9);
  --mi-loading-dot-color: #409eff;
  --mi-loading-text-color: #666;
  --mi-loading-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
```

## 最佳实践

### 在异步操作中使用

```vue
<script setup lang="ts">
import { useLoading } from 'midi-ui';

const { showLoading, hideLoading } = useLoading();

const fetchData = async () => {
  try {
    showLoading('正在获取数据...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('数据获取成功');
  } catch (error) {
    console.error('数据获取失败:', error);
  } finally {
    hideLoading();
  }
};
</script>
```

### 避免Loading闪烁

对于很快完成的操作，可以设置最小显示时间：

```vue
<script setup lang="ts">
const { showLoading, hideLoading } = useLoading();

const fetchDataWithMinDelay = async () => {
  showLoading('加载中...');
  const startTime = Date.now();

  try {
    await fetchData();
  } finally {
    const elapsed = Date.now() - startTime;
    const minDelay = 500; // 最小显示500ms

    if (elapsed < minDelay) {
      setTimeout(hideLoading, minDelay - elapsed);
    } else {
      hideLoading();
    }
  }
};
</script>
```
