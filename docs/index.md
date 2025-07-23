# Midi UI

基于 Vue 3.5 + Pinia + Vite + TypeScript 的现代化组件库

## 特性

✨ **现代化技术栈**：Vue 3.5 + TypeScript + Vite  
🎨 **精美设计**：简洁现代的设计风格  
📦 **开箱即用**：丰富的组件和完善的文档  
🔧 **TypeScript**：完整的类型定义  
🎯 **按需引入**：支持 Tree Shaking，减少包体积  
⚡ **快速开发**：基于 Vite 的极速开发体验  
🌟 **全局状态管理**：内置Loading状态管理，支持全局和局部Loading

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
import { createApp } from 'vue';
import MidiUI from 'midi-ui';
import 'midi-ui/dist/style.css';

const app = createApp(App);
app.use(MidiUI);
```

## 组件预览

### 按钮组件

<div style="margin: 20px 0;">
  <button style="margin-right: 8px; padding: 8px 16px; background: #409eff; color: white; border: none; border-radius: 4px;">主要按钮</button>
  <button style="margin-right: 8px; padding: 8px 16px; background: #67c23a; color: white; border: none; border-radius: 4px;">成功按钮</button>
  <button style="margin-right: 8px; padding: 8px 16px; background: #e6a23c; color: white; border: none; border-radius: 4px;">警告按钮</button>
  <button style="margin-right: 8px; padding: 8px 16px; background: #f56c6c; color: white; border: none; border-radius: 4px;">危险按钮</button>
</div>

### 输入框组件

<div style="margin: 20px 0;">
  <input style="margin-right: 8px; padding: 8px 12px; border: 1px solid #dcdfe6; border-radius: 4px;" placeholder="请输入内容">
  <input style="margin-right: 8px; padding: 8px 12px; border: 1px solid #dcdfe6; border-radius: 4px;" placeholder="禁用状态" disabled>
</div>

### Switch开关组件

<div style="margin: 20px 0;">
  <div style="display: inline-block; width: 40px; height: 20px; background: #409eff; border-radius: 10px; position: relative; margin-right: 16px;">
    <div style="position: absolute; top: 2px; right: 2px; width: 16px; height: 16px; background: white; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></div>
  </div>
  <div style="display: inline-block; width: 40px; height: 20px; background: #dcdfe6; border-radius: 10px; position: relative;">
    <div style="position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background: white; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></div>
  </div>
</div>

### Table表格组件

<div style="margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid #ebeef5; border-radius: 4px; overflow: hidden;">
    <thead style="background: #f2f3f5;">
      <tr>
        <th style="padding: 12px 8px; border-bottom: 1px solid #ebeef5; text-align: left; font-weight: 500;">姓名</th>
        <th style="padding: 12px 8px; border-bottom: 1px solid #ebeef5; text-align: left; font-weight: 500;">日期</th>
        <th style="padding: 12px 8px; border-bottom: 1px solid #ebeef5; text-align: left; font-weight: 500;">地址</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #fff;">
        <td style="padding: 12px 8px; border-bottom: 1px solid #ebeef5;">王小虎</td>
        <td style="padding: 12px 8px; border-bottom: 1px solid #ebeef5;">2016-05-02</td>
        <td style="padding: 12px 8px; border-bottom: 1px solid #ebeef5;">上海市普陀区金沙江路 1518 弄</td>
      </tr>
      <tr style="background: #f9f9f9;">
        <td style="padding: 12px 8px; border-bottom: 1px solid #ebeef5;">王小虎</td>
        <td style="padding: 12px 8px; border-bottom: 1px solid #ebeef5;">2016-05-04</td>
        <td style="padding: 12px 8px; border-bottom: 1px solid #ebeef5;">上海市普陀区金沙江路 1517 弄</td>
      </tr>
    </tbody>
  </table>
</div>

### Loading组件

<div style="margin: 20px 0; text-align: center;">
  <div style="display: inline-block; padding: 20px; border: 1px solid #e6e6e6; border-radius: 8px; background: #f9f9f9;">
    <div style="display: flex; gap: 4px; justify-content: center; margin-bottom: 10px;">
      <div style="width: 8px; height: 8px; background: #409eff; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both;"></div>
      <div style="width: 8px; height: 8px; background: #409eff; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; animation-delay: -0.16s;"></div>
      <div style="width: 8px; height: 8px; background: #409eff; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; animation-delay: 0s;"></div>
      <div style="width: 8px; height: 8px; background: #409eff; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; animation-delay: 0.16s;"></div>
    </div>
    <div style="font-size: 14px; color: #666;">加载中...</div>
  </div>
</div>

<style>
@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
</style>

## 主要组件

- **Button 按钮** - 常用的操作按钮，支持多种类型和状态
- **Input 输入框** - 功能丰富的输入框组件，支持多种类型和验证
- **Switch 开关** - 表示两种相互对立状态间的切换，支持禁用、颜色控制、文字描述和尺寸控制
- **Table 表格** - 用于展示多条结构类似的数据，支持排序、选择、自定义列等功能
- **Loading 加载** - 优雅的加载组件，支持全局和局部Loading效果
