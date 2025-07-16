<template>
  <teleport to="body">
    <transition name="mi-loading-fade">
      <div
        v-if="visible"
        class="mi-loading-mask"
        @click="maskClosable && close()"
      >
        <div class="mi-loading-spinner" @click.stop>
          <!-- 根据spinner类型显示不同动画 -->
          <div v-if="spinner === 'dots'" class="mi-loading-animation">
            <div class="mi-loading-dot"></div>
            <div class="mi-loading-dot"></div>
            <div class="mi-loading-dot"></div>
            <div class="mi-loading-dot"></div>
          </div>
          
          <div v-else-if="spinner === 'circle'" class="mi-loading-circle">
            <svg viewBox="0 0 50 50" class="mi-loading-circular">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                class="mi-loading-path"
              />
            </svg>
          </div>
          
          <div v-else-if="spinner === 'bars'" class="mi-loading-bars">
            <div class="mi-loading-bar"></div>
            <div class="mi-loading-bar"></div>
            <div class="mi-loading-bar"></div>
            <div class="mi-loading-bar"></div>
            <div class="mi-loading-bar"></div>
          </div>
          
          <div v-if="text" class="mi-loading-text">{{ text }}</div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { LoadingProps } from '@/types';

defineOptions({
  name: 'MiLoading',
});

const props = withDefaults(defineProps<LoadingProps>(), {
  visible: false,
  text: '',
  maskClosable: false,
  zIndex: 9999,
  spinner: 'dots', // 默认使用圆点动画
});

const emit = defineEmits<{
  close: [];
}>();

const visible = ref(props.visible);

watch(
  () => props.visible,
  (newVal: boolean) => {
    visible.value = newVal;
  }
);

const close = () => {
  visible.value = false;
  emit('close');
};

watch(
  visible,
  (newVal: boolean) => {
    if (newVal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* 原有样式保持不变 */
.mi-loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  z-index: v-bind(zIndex);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mi-loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-width: 120px;
}

/* 圆点动画样式 */
.mi-loading-animation {
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
}

.mi-loading-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #409eff;
  animation: mi-loading-bounce 1.4s infinite ease-in-out both;
}

.mi-loading-dot:nth-child(1) { animation-delay: -0.32s; }
.mi-loading-dot:nth-child(2) { animation-delay: -0.16s; }
.mi-loading-dot:nth-child(3) { animation-delay: 0s; }
.mi-loading-dot:nth-child(4) { animation-delay: 0.16s; }

/* 圆环动画样式 */
.mi-loading-circle {
  margin-bottom: 12px;
}

.mi-loading-circular {
  width: 32px;
  height: 32px;
  animation: mi-loading-rotate 2s linear infinite;
}

.mi-loading-path {
  stroke: #409eff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  animation: mi-loading-dash 1.5s ease-in-out infinite;
}

/* 条形动画样式 */
.mi-loading-bars {
  display: flex;
  gap: 3px;
  margin-bottom: 12px;
}

.mi-loading-bar {
  width: 4px;
  height: 24px;
  background-color: #409eff;
  border-radius: 2px;
  animation: mi-loading-scale 1.2s infinite ease-in-out;
}

.mi-loading-bar:nth-child(1) { animation-delay: -1.1s; }
.mi-loading-bar:nth-child(2) { animation-delay: -1.0s; }
.mi-loading-bar:nth-child(3) { animation-delay: -0.9s; }
.mi-loading-bar:nth-child(4) { animation-delay: -0.8s; }
.mi-loading-bar:nth-child(5) { animation-delay: -0.7s; }

.mi-loading-text {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  text-align: center;
  margin-top: 8px;
}

/* 动画定义 */
@keyframes mi-loading-bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

@keyframes mi-loading-rotate {
  100% { transform: rotate(360deg); }
}

@keyframes mi-loading-dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

@keyframes mi-loading-scale {
  0%, 40%, 100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
}

.mi-loading-fade-enter-active,
.mi-loading-fade-leave-active {
  transition: opacity 0.3s ease;
}

.mi-loading-fade-enter-from,
.mi-loading-fade-leave-to {
  opacity: 0;
}
</style>
