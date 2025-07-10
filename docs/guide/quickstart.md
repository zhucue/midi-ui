# 快速开始

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from "vue";
import MidiUI from "midi-ui";
import "midi-ui/dist/style.css";

import App from "./App.vue";

const app = createApp(App);

app.use(MidiUI);
app.mount("#app");
```

## 按需引入

Midi UI 提供了基于 ES modules 的开箱即用的 Tree Shaking 功能。

```typescript
<template>
  <m-button>按钮</m-button>
  <m-input v-model="input" placeholder="请输入内容"></m-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input } from 'midi-ui'
import 'midi-ui/dist/style.css'

const input = ref('')
</script>
```

## 开始使用

现在你可以启动你的项目了。对于各个组件的使用方法，请参阅它们各自的文档。
