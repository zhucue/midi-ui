<template>
  <div :class="colorClass">
    <div
      ref="triggerRef"
      class="mi-color-picker__trigger"
      @click="togglePicker"
      :style="{ backgroundColor: displayValue }"
    >
      <div v-if="!displayValue" class="mi-color-picker__empty">
        <span>×</span>
      </div>
    </div>
    
    <Teleport to="body">
      <div
        v-if="visible"
        class="mi-color-picker__popper"
        :style="popperStyle"
        @click.stop
      >
        <div class="mi-color-picker__panel">
          <!-- 主色板 -->
          <div class="mi-color-picker__sv-panel">
            <div
              class="mi-color-picker__sv-panel-bg"
              :style="{ backgroundColor: `hsl(${hue}, 100%, 50%)` }"
            >
              <div class="mi-color-picker__white"></div>
              <div class="mi-color-picker__black"></div>
              <div
                class="mi-color-picker__cursor"
                :style="cursorStyle"
                @mousedown="handleSVMouseDown"
              ></div>
            </div>
          </div>
          
          <!-- 色相条 */
          <div class="mi-color-picker__hue-slider">
            <div class="mi-color-picker__hue-bar">
              <div
                class="mi-color-picker__hue-thumb"
                :style="{ left: `${(hue / 360) * 100}%` }"
                @mousedown="handleHueMouseDown"
              ></div>
            </div>
          </div>
          
          <!-- 透明度条 -->
          <div v-if="showAlpha" class="mi-color-picker__alpha-slider">
            <div class="mi-color-picker__alpha-bar" :style="alphaBarStyle">
              <div
                class="mi-color-picker__alpha-thumb"
                :style="{ left: `${alpha * 100}%` }"
                @mousedown="handleAlphaMouseDown"
              ></div>
            </div>
          </div>
          
          <!-- 预设颜色 -->
          <div v-if="predefine && predefine.length" class="mi-color-picker__predefine">
            <div class="mi-color-picker__predefine-title">预设颜色</div>
            <div class="mi-color-picker__predefine-colors">
              <div
                v-for="color in predefine"
                :key="color"
                class="mi-color-picker__predefine-color"
                :style="{ backgroundColor: color }"
                @click="selectPredefineColor(color)"
              ></div>
            </div>
          </div>
          
          <!-- 输入框和按钮 -->
          <div class="mi-color-picker__controls">
            <div class="mi-color-picker__input">
              <input
                v-model="inputValue"
                @blur="handleInputChange"
                @keyup.enter="handleInputChange"
                placeholder="请输入颜色值"
              />
            </div>
            <div class="mi-color-picker__buttons">
              <button @click="clear" class="mi-color-picker__btn mi-color-picker__btn--text">
                清空
              </button>
              <button @click="confirm" class="mi-color-picker__btn mi-color-picker__btn--primary">
                确定
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
    
    <!-- 遮罩 -->
    <div
      v-if="visible"
      class="mi-color-picker__mask"
      @click="hidePicker"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import type { ColorProps, ColorEmits } from '@/types/color';

defineOptions({
  name: 'MiColor',
});

const props = withDefaults(defineProps<ColorProps>(), {
  modelValue: '',
  disabled: false,
  size: 'default',
  showAlpha: false,
  colorFormat: 'hex',
  predefine: () => [
    '#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1',
    '#1e90ff', '#c71585', '#ff1493', '#00bfff', '#00ff00',
    '#ffff00', '#ff00ff', '#ff0000', '#00ffff', '#0000ff'
  ],
});

const emit = defineEmits<ColorEmits>();

// 响应式数据
const visible = ref(false);
const hue = ref(0);
const saturation = ref(100);
const value = ref(100);
const alpha = ref(1);
const inputValue = ref('');
const triggerRef = ref<HTMLElement>();

// 计算属性
const colorClass = computed(() => [
  'mi-color-picker',
  `mi-color-picker--${props.size}`,
  {
    'is-disabled': props.disabled,
  },
]);

const displayValue = computed(() => {
  if (!props.modelValue) return '';
  return props.modelValue;
});

const currentColor = computed(() => {
  const h = hue.value;
  const s = saturation.value;
  const v = value.value;
  const a = alpha.value;
  
  return hsvToColor(h, s, v, a);
});

const cursorStyle = computed(() => ({
  left: `${saturation.value}%`,
  top: `${100 - value.value}%`,
}));

const alphaBarStyle = computed(() => ({
  background: `linear-gradient(to right, transparent, ${hsvToColor(hue.value, saturation.value, value.value, 1)})`,
}));

const popperStyle = ref({});

// 工具函数
function hsvToRgb(h: number, s: number, v: number) {
  h = h / 360;
  s = s / 100;
  v = v / 100;
  
  const c = v * s;
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
  const m = v - c;
  
  let r = 0, g = 0, b = 0;
  
  if (h >= 0 && h < 1/6) {
    r = c; g = x; b = 0;
  } else if (h >= 1/6 && h < 2/6) {
    r = x; g = c; b = 0;
  } else if (h >= 2/6 && h < 3/6) {
    r = 0; g = c; b = x;
  } else if (h >= 3/6 && h < 4/6) {
    r = 0; g = x; b = c;
  } else if (h >= 4/6 && h < 5/6) {
    r = x; g = 0; b = c;
  } else {
    r = c; g = 0; b = x;
  }
  
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

function hsvToColor(h: number, s: number, v: number, a: number = 1) {
  const { r, g, b } = hsvToRgb(h, s, v);
  
  if (props.colorFormat === 'rgb') {
    return props.showAlpha ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
  } else if (props.colorFormat === 'hsl') {
    const hsl = rgbToHsl(r, g, b);
    return props.showAlpha ? `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${a})` : `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  } else {
    return rgbToHex(r, g, b, props.showAlpha ? a : undefined);
  }
}

function rgbToHex(r: number, g: number, b: number, a?: number) {
  const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  if (a !== undefined && a < 1) {
    const alphaHex = Math.round(a * 255).toString(16).padStart(2, '0');
    return `#${hex}${alphaHex}`;
  }
  return `#${hex}`;
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function parseColor(color: string) {
  if (!color) return { h: 0, s: 100, v: 100, a: 1 };
  
  // 简化的颜色解析，实际项目中可能需要更完善的解析
  if (color.startsWith('#')) {
    const hex = color.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
    
    return rgbToHsv(r, g, b, a);
  }
  
  return { h: 0, s: 100, v: 100, a: 1 };
}

function rgbToHsv(r: number, g: number, b: number, a: number = 1) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  
  let h = 0;
  const s = max === 0 ? 0 : diff / max;
  const v = max;
  
  if (diff !== 0) {
    switch (max) {
      case r: h = ((g - b) / diff + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / diff + 2) / 6; break;
      case b: h = ((r - g) / diff + 4) / 6; break;
    }
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
    a,
  };
}

// 事件处理
function togglePicker() {
  if (props.disabled) return;
  visible.value = !visible.value;
  
  if (visible.value) {
    nextTick(() => {
      updatePopperPosition();
    });
  }
}

function hidePicker() {
  visible.value = false;
}

function updatePopperPosition() {
  if (!triggerRef.value) return;
  
  const rect = triggerRef.value.getBoundingClientRect();
  popperStyle.value = {
    position: 'fixed',
    top: `${rect.bottom + 8}px`,
    left: `${rect.left}px`,
    zIndex: 9999,
  };
}

function handleSVMouseDown(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  
  function handleMouseMove(e: MouseEvent) {
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    
    saturation.value = x * 100;
    value.value = (1 - y) * 100;
    
    emit('activeChange', currentColor.value);
  }
  
  function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }
  
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  
  handleMouseMove(e);
}

function handleHueMouseDown(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).parentElement!.getBoundingClientRect();
  
  function handleMouseMove(e: MouseEvent) {
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    hue.value = x * 360;
    emit('activeChange', currentColor.value);
  }
  
  function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }
  
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  
  handleMouseMove(e);
}

function handleAlphaMouseDown(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).parentElement!.getBoundingClientRect();
  
  function handleMouseMove(e: MouseEvent) {
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    alpha.value = x;
    emit('activeChange', currentColor.value);
  }
  
  function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }
  
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  
  handleMouseMove(e);
}

function selectPredefineColor(color: string) {
  const hsv = parseColor(color);
  hue.value = hsv.h;
  saturation.value = hsv.s;
  value.value = hsv.v;
  alpha.value = hsv.a;
  inputValue.value = color;
}

function handleInputChange() {
  const color = inputValue.value.trim();
  if (color) {
    const hsv = parseColor(color);
    hue.value = hsv.h;
    saturation.value = hsv.s;
    value.value = hsv.v;
    alpha.value = hsv.a;
  }
}

function clear() {
  emit('update:modelValue', '');
  emit('change', '');
  hidePicker();
}

function confirm() {
  const color = currentColor.value;
  emit('update:modelValue', color);
  emit('change', color);
  hidePicker();
}

// 监听器
watch(() => props.modelValue, (newValue: string) => {
  if (newValue) {
    const hsv = parseColor(newValue);
    hue.value = hsv.h;
    saturation.value = hsv.s;
    value.value = hsv.v;
    alpha.value = hsv.a;
    inputValue.value = newValue;
  }
}, { immediate: true });

watch(currentColor, (newColor: string) => {
  inputValue.value = newColor;
});

// 生命周期
onMounted(() => {
  // triggerRef 现在通过 template ref 自动绑定
});

onUnmounted(() => {
  // 清理事件监听器
});
</script>