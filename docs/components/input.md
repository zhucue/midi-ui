# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

```vue
<template>
  <m-input v-model="input" placeholder="请输入内容" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

```vue
<template>
  <m-input disabled placeholder="请输入内容" />
</template>
```

## 可清空

使用 `clearable` 属性即可得到一个可清空的输入框

```vue
<template>
  <m-input v-model="input" clearable placeholder="请输入内容" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>
```

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

```vue
<template>
  <m-input
    v-model="input"
    type="password"
    show-password
    placeholder="请输入密码"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>
```

## 尺寸

```vue
<template>
  <div>
    <m-input size="large" placeholder="大型输入框" />
    <m-input placeholder="默认输入框" />
    <m-input size="small" placeholder="小型输入框" />
  </div>
</template>
```

## API

### Props

| 参数                  | 说明                 | 类型            | 可选值                      | 默认值  |
| --------------------- | -------------------- | --------------- | --------------------------- | ------- |
| model-value / v-model | 绑定值               | string / number | —                           | —       |
| type                  | 类型                 | string          | text / password / number 等 | text    |
| size                  | 尺寸                 | string          | large / default / small     | default |
| placeholder           | 输入框占位文本       | string          | —                           | —       |
| disabled              | 是否禁用             | boolean         | —                           | false   |
| readonly              | 是否只读             | boolean         | —                           | false   |
| clearable             | 是否可清空           | boolean         | —                           | false   |
| show-password         | 是否显示切换密码图标 | boolean         | —                           | false   |
| maxlength             | 最大输入长度         | number          | —                           | —       |
| minlength             | 最小输入长度         | number          | —                           | —       |

### Events

| 事件名 | 说明                                                          | 回调参数                  |
| ------ | ------------------------------------------------------------- | ------------------------- |
| input  | 在 Input 值改变时触发                                         | (value: string \| number) |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按 Enter 时触发 | (value: string \| number) |
| focus  | 在 Input 获得焦点时触发                                       | (evt: FocusEvent)         |
| blur   | 在 Input 失去焦点时触发                                       | (evt: FocusEvent)         |
| clear  | 在点击由 clearable 属性生成的清空按钮时触发                   | —                         |

### Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | —    |
| blur   | 使 input 失去焦点 | —    |
