# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。可以使用 `active-color` 属性与 `inactive-color` 属性来设置开关的背景色。

```vue
<template>
  <div>
    <mi-switch v-model="value1" />
    <mi-switch 
      v-model="value2" 
      active-color="#13ce66" 
      inactive-color="#ff4949"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
```

## 文字描述

使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。使用 `text-inside` 属性控制文字是否显示在开关内部。

```vue
<template>
  <div>
    <!-- 外部文字 -->
    <mi-switch
      v-model="value1"
      active-text="开启"
      inactive-text="关闭"
    />
    
    <!-- 内部文字 -->
    <mi-switch
      v-model="value2"
      active-text="ON"
      inactive-text="OFF"
      text-inside
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
```

## 禁用状态

设置 `disabled` 属性，接受一个 `Boolean`，设置 `true` 即可禁用。

```vue
<template>
  <div>
    <mi-switch v-model="value1" disabled />
    <mi-switch v-model="value2" disabled />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
```

## 不同尺寸

使用 `size` 属性配置尺寸，可选值为 `large`、`medium`、`small`。

```vue
<template>
  <div>
    <mi-switch v-model="value" size="large" />
    <mi-switch v-model="value" size="medium" />
    <mi-switch v-model="value" size="small" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>
```

## 自定义宽度

使用 `width` 属性可以自定义开关的宽度。

```vue
<template>
  <div>
    <mi-switch 
      v-model="value" 
      :width="60"
      active-text="开启"
      inactive-text="关闭"
      text-inside
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>
```

## 事件

Switch 组件提供 `change` 事件，当开关状态发生变化时触发，回调函数会接收新状态作为参数。

```vue
<template>
  <mi-switch 
    v-model="value" 
    @change="handleChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref(false)

const handleChange = (val) => {
  console.log('开关状态变化:', val)
}
</script>
```

## API

### Switch Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| model-value / v-model | 绑定值 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| size | 开关的尺寸 | string | large / medium / small | medium |
| width | 开关的宽度（像素） | number / string | — | — |
| active-text | 开关打开时的文字描述 | string | — | — |
| inactive-text | 开关关闭时的文字描述 | string | — | — |
| text-inside | 文字是否显示在开关内部 | boolean | — | false |
| active-color | 开关打开时的背景色 | string | — | — |
| inactive-color | 开关关闭时的背景色 | string | — | — |

### Switch Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 开关状态发生变化时的回调函数 | 新状态的值 |
