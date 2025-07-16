# Midi UI

基于 Vue 3.5 + Pinia + Vite + TypeScript 的组件库

## 🚀 快速开始

### 安装

```bash
npm install midi-ui
```

### 全量导入

```ts
import { createApp } from 'vue';
import MidiUI from 'midi-ui';
import 'midi-ui/dist/style.css';

const app = createApp(App);
app.use(MidiUI);
app.mount('#app');
```

### 按需导入

```ts
import { Button, Input, Loading, useLoading } from 'midi-ui';
```

## 📦 组件

### Button 按钮

基础的按钮组件，支持多种类型、尺寸和状态。

```vue
<template>
  <mi-button type="primary">主要按钮</mi-button>
  <mi-button type="success" loading>加载中</mi-button>
</template>
```

### Input 输入框

功能丰富的输入框组件。

```vue
<template>
  <mi-input v-model="value" placeholder="请输入内容" />
  <mi-input type="password" show-password />
</template>
```

### Loading 加载

支持全局和局部两种使用方式，提供多种动画效果。

#### 全局Loading（推荐）

```vue
<template>
  <div>
    <mi-button @click="showDotsLoading">圆点动画</mi-button>
    <mi-button @click="showCircleLoading">圆环动画</mi-button>
    <mi-button @click="showBarsLoading">条形动画</mi-button>
    <mi-global-loading />
  </div>
</template>

<script setup lang="ts">
import { useLoading } from 'midi-ui';

const { showLoading, hideLoading } = useLoading();

const showDotsLoading = () => {
  showLoading('加载中...', 'dots');
  setTimeout(hideLoading, 3000);
};

const showCircleLoading = () => {
  showLoading('加载中...', 'circle');
  setTimeout(hideLoading, 3000);
};

const showBarsLoading = () => {
  showLoading('加载中...', 'bars');
  setTimeout(hideLoading, 3000);
};
</script>
```

#### 局部Loading

```vue
<template>
  <mi-loading
    :visible="loading"
    text="数据加载中..."
    spinner="circle"
    @close="loading = false"
  />
</template>
```

## 🎯 特性

- 📦 **开箱即用**：简单易用的API设计
- 🎨 **美观现代**：精心设计的UI界面
- 🔧 **高度可定制**：丰富的配置选项
- 🌈 **主题支持**：支持深色模式和自定义主题
- 📱 **响应式**：完美适配移动端和桌面端
- 🚀 **高性能**：基于Vue 3.5 + Composition API
- 💪 **TypeScript**：完整的类型支持
- 🎪 **现代化**：使用最新的Web技术

## 🔧 开发

```bash
# 克隆项目
git clone https://github.com/your-username/midi-ui.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build:lib

# 构建文档
npm run docs:build
```

## 📖 文档

详细文档请访问：[文档地址](https://your-docs-url.com)

## 📄 许可证

MIT License © 2024 Midi UI
