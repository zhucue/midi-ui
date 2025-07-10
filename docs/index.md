# Midi UI

基于 Vue 3.5 + Pinia + Vite + TypeScript 的现代化组件库

## 特性

✨ **现代化技术栈**：Vue 3.5 + TypeScript + Vite  
🎨 **精美设计**：简洁现代的设计风格  
📦 **开箱即用**：丰富的组件和完善的文档  
🔧 **TypeScript**：完整的类型定义  
🎯 **按需引入**：支持 Tree Shaking，减少包体积  
⚡ **快速开发**：基于 Vite 的极速开发体验

## 快速开始

### 安装

```bash
npm install midi-ui
# 或者
pnpm add midi-ui
# 或者
yarn add midi-ui
```

### 使用

```typescript
import { createApp } from "vue";
import MidiUI from "midi-ui";
import "midi-ui/dist/style.css";

const app = createApp(App);
app.use(MidiUI);
```

## 组件预览

<div style="margin: 20px 0;">
  <button style="margin-right: 8px; padding: 8px 16px; background: #409eff; color: white; border: none; border-radius: 4px;">主要按钮</button>
  <button style="margin-right: 8px; padding: 8px 16px; background: #67c23a; color: white; border: none; border-radius: 4px;">成功按钮</button>
  <button style="margin-right: 8px; padding: 8px 16px; background: #e6a23c; color: white; border: none; border-radius: 4px;">警告按钮</button>
  <button style="margin-right: 8px; padding: 8px 16px; background: #f56c6c; color: white; border: none; border-radius: 4px;">危险按钮</button>
</div>

<div style="margin: 20px 0;">
  <input style="margin-right: 8px; padding: 8px 12px; border: 1px solid #dcdfe6; border-radius: 4px;" placeholder="请输入内容">
  <input style="margin-right: 8px; padding: 8px 12px; border: 1px solid #dcdfe6; border-radius: 4px;" placeholder="禁用状态" disabled>
</div>
