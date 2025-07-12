<template>
  <!-- 全局Loading组件 - 通过useLoading composable统一管理状态 -->
  <teleport to="body">
    <!-- 淡入淡出过渡动画 -->
    <transition name="mi-loading-fade">
      <!-- 遮罩层 - 根据全局状态显示/隐藏 -->
      <div v-if="loadingState.visible" class="mi-loading-mask">
        <!-- 加载器容器 -->
        <div class="mi-loading-spinner">
          <!-- 四个跳动的圆点动画 -->
          <div class="mi-loading-animation">
            <div class="mi-loading-dot"></div>
            <div class="mi-loading-dot"></div>
            <div class="mi-loading-dot"></div>
            <div class="mi-loading-dot"></div>
          </div>
          <!-- 加载文字 - 根据全局状态显示 -->
          <div v-if="loadingState.text" class="mi-loading-text">
            {{ loadingState.text }}
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { useLoading } from '@/composables/useLoading';

// 定义组件选项
defineOptions({
  name: 'MiGlobalLoading',
});

// 获取全局Loading状态
// 通过useLoading composable获取共享的loading状态
const { state: loadingState } = useLoading();
</script>

<style scoped>
.mi-loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  z-index: 9999;
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

.mi-loading-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.mi-loading-dot:nth-child(2) {
  animation-delay: -0.16s;
}

.mi-loading-dot:nth-child(3) {
  animation-delay: 0s;
}

.mi-loading-dot:nth-child(4) {
  animation-delay: 0.16s;
}

.mi-loading-text {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  text-align: center;
  margin-top: 8px;
}

@keyframes mi-loading-bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
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
