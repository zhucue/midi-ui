# Color 颜色选择器

用于颜色选择，支持多种颜色格式。

## 基础用法

基础的颜色选择器用法。

```vue
<template>
  <div>
    <mi-color v-model="color1" />
    <p>选中的颜色：{{ color1 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const color1 = ref('#409EFF')
</script>
```

## 支持透明度

设置 `show-alpha` 属性，支持透明度选择。

```vue
<template>
  <div>
    <mi-color v-model="color2" show-alpha />
    <p>选中的颜色：{{ color2 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const color2 = ref('rgba(64, 158, 255, 0.8)')
</script>
```

## 不同尺寸

提供四种不同的尺寸。

```vue
<template>
  <div style="display: flex; align-items: center; gap: 16px;">
    <mi-color v-model="color3" size="large" />
    <mi-color v-model="color3" size="medium" />
    <mi-color v-model="color3" />
    <mi-color v-model="color3" size="small" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const color3 = ref('#67C23A')
</script>
```

## 颜色格式

支持多种颜色格式输出。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <span>HEX 格式：</span>
      <mi-color v-model="colorHex" color-format="hex" />
      <span>{{ colorHex }}</span>
    </div>
    <div>
      <span>RGB 格式：</span>
      <mi-color v-model="colorRgb" color-format="rgb" />
      <span>{{ colorRgb }}</span>
    </div>
    <div>
      <span>HSL 格式：</span>
      <mi-color v-model="colorHsl" color-format="hsl" />
      <span>{{ colorHsl }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const colorHex = ref('#409EFF')
const colorRgb = ref('rgb(64, 158, 255)')
const colorHsl = ref('hsl(210, 100%, 63%)')
</script>
```

## 预设颜色

通过 `predefine` 属性可以预设常用的颜色。

```vue
<template>
  <mi-color 
    v-model="color4" 
    :predefine="predefineColors"
    show-alpha
  />
</template>

<script setup>
import { ref } from 'vue'

const color4 = ref('#409EFF')
const predefineColors = [
  '#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1',
  '#1e90ff', '#c71585', '#ff1493', '#00bfff', '#00ff00',
  '#ffff00', '#ff00ff', '#ff0000', '#00ffff', '#0000ff'
]
</script>
```

## 禁用状态

通过 `disabled` 属性可以禁用颜色选择器。

```vue
<template>
  <div style="display: flex; align-items: center; gap: 16px;">
    <mi-color v-model="color5" />
    <mi-color v-model="color5" disabled />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const color5 = ref('#F56C6C')
</script>
```

## 事件监听

支持监听颜色变化事件。

```vue
<template>
  <div>
    <mi-color 
      v-model="color6"
      @change="handleChange"
      @active-change="handleActiveChange"
    />
    <p>当前颜色：{{ color6 }}</p>
    <p>实时颜色：{{ activeColor }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const color6 = ref('#E6A23C')
const activeColor = ref('')

const handleChange = (color) => {
  console.log('颜色确认变化:', color)
}

const handleActiveChange = (color) => {
  activeColor.value = color
  console.log('颜色实时变化:', color)
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| model-value / v-model | 绑定值 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| size | 尺寸 | string | large / medium / default / small | default |
| show-alpha | 是否支持透明度选择 | boolean | — | false |
| color-format | 写入 v-model 的颜色的格式 | string | hsl / hex / rgb | hex |
| predefine | 预定义颜色 | array | — | — |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发 | 当前值 |
| active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |