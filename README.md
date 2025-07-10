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

### 安装依赖

```bash
# 推荐使用 pnpm
pnpm install

# 或者使用 npm
npm install

# 或者使用 yarn
yarn install
```

### 启动开发服务器

```bash
# 启动演示应用
pnpm dev

# 或者
npm run dev
```

### 构建组件库

```bash
# 构建库文件
pnpm build:lib

# 或者
npm run build:lib
```

## 使用方式

### 完整引入

```typescript
import { createApp } from "vue";
import MidiUI from "midi-ui";
import "midi-ui/dist/style.css";

const app = createApp(App);
app.use(MidiUI);
```

### 按需引入

```typescript
import { Button, Input } from "midi-ui";
import "midi-ui/dist/style.css";

export default {
  components: {
    MButton: Button,
    MInput: Input,
  },
};
```

## 组件列表

- 🔘 Button 按钮
- 📝 Input 输入框
- 更多组件正在开发中...

## 开发指南

### 项目结构

```
midi-ui/
├── src/
│   ├── components/          # 组件源码
│   │   ├── Button/         # 按钮组件
│   │   └── Input/          # 输入框组件
│   ├── styles/             # 样式文件
│   │   ├── components/     # 组件样式
│   │   ├── variables.css   # CSS 变量
│   │   ├── reset.css      # 重置样式
│   │   └── utils.css      # 工具类
│   ├── types/             # 类型定义
│   ├── index.ts           # 库入口文件
│   ├── main.ts           # 演示应用入口
│   └── App.vue           # 演示应用组件
├── package.json
├── tsconfig.json
├── vite.config.ts        # 开发配置
└── vite.lib.config.ts    # 库构建配置
```

### 添加新组件

1. 在 `src/components/` 下创建新组件目录
2. 编写组件代码和样式
3. 在 `src/types/index.ts` 中添加类型定义
4. 在 `src/index.ts` 中导出组件
5. 在 `src/App.vue` 中添加演示代码

### 脚本命令

- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建演示应用
- `pnpm build:lib` - 构建组件库
- `pnpm preview` - 预览构建结果
- `pnpm type-check` - 类型检查

## 浏览器支持

现代浏览器及 IE11+

| IE / Edge  | Firefox         | Chrome          | Safari          |
| ---------- | --------------- | --------------- | --------------- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions |

## 贡献指南

欢迎提交 issue 和 PR 来帮助改进项目！
