# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

```vue
<template>
  <div>
    <m-button>默认按钮</m-button>
    <m-button type="primary">主要按钮</m-button>
    <m-button type="success">成功按钮</m-button>
    <m-button type="warning">警告按钮</m-button>
    <m-button type="danger">危险按钮</m-button>
    <m-button type="info">信息按钮</m-button>
  </div>
</template>
```

## 朴素按钮

朴素按钮同样设置了 `plain` 属性，它们的文本颜色为其对应色彩，背景颜色为白色。

```vue
<template>
  <div>
    <m-button plain>朴素按钮</m-button>
    <m-button type="primary" plain>主要按钮</m-button>
    <m-button type="success" plain>成功按钮</m-button>
    <m-button type="warning" plain>警告按钮</m-button>
    <m-button type="danger" plain>危险按钮</m-button>
    <m-button type="info" plain>信息按钮</m-button>
  </div>
</template>
```

## 禁用状态

按钮不可用状态。

```vue
<template>
  <div>
    <m-button disabled>默认按钮</m-button>
    <m-button type="primary" disabled>主要按钮</m-button>
  </div>
</template>
```

## 尺寸

除了默认尺寸外，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

```vue
<template>
  <div>
    <m-button size="large">大型按钮</m-button>
    <m-button>默认按钮</m-button>
    <m-button size="small">小型按钮</m-button>
  </div>
</template>
```

## API

### Props

| 参数     | 说明           | 类型    | 可选值                                                | 默认值  |
| -------- | -------------- | ------- | ----------------------------------------------------- | ------- |
| type     | 类型           | string  | primary / success / warning / danger / info / default | default |
| size     | 尺寸           | string  | large / default / small                               | default |
| disabled | 是否禁用状态   | boolean | —                                                     | false   |
| loading  | 是否加载中状态 | boolean | —                                                     | false   |
| icon     | 图标           | string  | —                                                     | —       |
| round    | 是否圆角按钮   | boolean | —                                                     | false   |
| circle   | 是否圆形按钮   | boolean | —                                                     | false   |
| plain    | 是否朴素按钮   | boolean | —                                                     | false   |

### Events

| 事件名 | 说明       | 回调参数          |
| ------ | ---------- | ----------------- |
| click  | 点击时触发 | (evt: MouseEvent) |
