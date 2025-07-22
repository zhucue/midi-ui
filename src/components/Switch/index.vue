<template>
  <div 
    :class="switchClass"
    :style="switchStyle"
    @click="handleClick"
  >
    <!-- 左侧文字 -->
    <span 
      v-if="inactiveText && !textInside" 
      class="mi-switch__text mi-switch__text--left"
      :class="{ 'is-active': !modelValue }"
    >
      {{ inactiveText }}
    </span>
    
    <!-- 开关主体 -->
    <div class="mi-switch__core" :style="coreStyle">
      <!-- 内部文字 -->
      <span 
        v-if="textInside && (activeText || inactiveText)" 
        class="mi-switch__inner"
      >
        {{ modelValue ? activeText : inactiveText }}
      </span>
      
      <!-- 滑块 -->
      <div class="mi-switch__action" :style="actionStyle"></div>
    </div>
    
    <!-- 右侧文字 -->
    <span 
      v-if="activeText && !textInside" 
      class="mi-switch__text mi-switch__text--right"
      :class="{ 'is-active': modelValue }"
    >
      {{ activeText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SwitchProps } from "@/types";

defineOptions({
  name: "MiSwitch",
});

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  size: "medium",
  activeColor: "",
  inactiveColor: "",
  activeText: "",
  inactiveText: "",
  textInside: false,
  width: ""
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'change': [value: boolean]
}>();

// 计算开关的类名
const switchClass = computed(() => [
  'mi-switch',
  `mi-switch--${props.size}`,
  {
    'is-checked': props.modelValue,
    'is-disabled': props.disabled,
    'mi-switch--with-text': props.activeText || props.inactiveText
  }
]);

// 计算开关的样式
const switchStyle = computed(() => {
  const style: Record<string, string> = {};
  if (props.width) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  return style;
});

// 计算核心区域的样式
const coreStyle = computed(() => {
  const style: Record<string, string> = {};
  
  if (props.modelValue) {
    if (props.activeColor) {
      style.backgroundColor = props.activeColor;
      style.borderColor = props.activeColor;
    }
  } else {
    if (props.inactiveColor) {
      style.backgroundColor = props.inactiveColor;
      style.borderColor = props.inactiveColor;
    }
  }
  
  return style;
});

// 计算滑块的样式
const actionStyle = computed(() => {
  const style: Record<string, string> = {};
  
  // 如果有自定义颜色，滑块保持白色
  if ((props.modelValue && props.activeColor) || (!props.modelValue && props.inactiveColor)) {
    style.backgroundColor = '#ffffff';
  }
  
  return style;
});

// 处理点击事件
const handleClick = () => {
  if (props.disabled) return;
  
  const newValue = !props.modelValue;
  emit('update:modelValue', newValue);
  emit('change', newValue);
};
</script>
