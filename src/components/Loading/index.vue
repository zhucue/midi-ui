<template>
  <!-- 使用teleport将Loading组件渲染到body下，避免层级问题 -->
  <teleport to="body">
    <!-- 淡入淡出过渡动画 -->
    <transition name="mi-loading-fade">
      <!-- 
        遮罩层：覆盖整个页面 
        - 支持点击遮罩关闭（当maskClosable为true时）
        - 阻止事件冒泡到内部加载器
      -->
      <div
        v-if="visible"
        class="mi-loading-mask"
        @click="maskClosable && close()"
      >
        <!-- 
          加载器容器：居中显示的白色卡片
          - @click.stop: 阻止点击事件冒泡到遮罩层
        -->
        <div class="mi-loading-spinner" @click.stop>
          <!-- 加载动画容器：四个跳动的圆点 -->
          <div class="mi-loading-animation">
            <div class="mi-loading-dot"></div>
            <div class="mi-loading-dot"></div>
            <div class="mi-loading-dot"></div>
            <div class="mi-loading-dot"></div>
          </div>
          <!-- 加载文字：可选显示 -->
          <div v-if="text" class="mi-loading-text">{{ text }}</div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { LoadingProps } from '@/types';

// 定义组件选项
defineOptions({
  name: 'MiLoading',
});

// 定义组件props，设置默认值
const props = withDefaults(defineProps<LoadingProps>(), {
  visible: false, // 是否显示Loading
  text: '', // 加载文字
  maskClosable: false, // 是否可点击遮罩关闭
  zIndex: 9999, // 层级
});

// 定义组件事件
const emit = defineEmits<{
  close: []; // 关闭Loading事件
}>();

// 内部可见状态，用于控制显示/隐藏
const visible = ref(props.visible);

// 监听props.visible变化，同步更新内部状态
watch(
  () => props.visible,
  (newVal: boolean) => {
    visible.value = newVal;
  }
);

/**
 * 关闭Loading
 * 更新内部状态并触发close事件
 */
const close = () => {
  visible.value = false;
  emit('close');
};

/**
 * 防止页面滚动
 * 当Loading显示时，禁止body滚动
 * 当Loading隐藏时，恢复body滚动
 */
watch(
  visible,
  (newVal: boolean) => {
    if (newVal) {
      // 显示Loading时禁止滚动
      document.body.style.overflow = 'hidden';
    } else {
      // 隐藏Loading时恢复滚动
      document.body.style.overflow = '';
    }
  },
  { immediate: true } // 立即执行一次
);
</script>

<style scoped>
/* 遮罩层样式 - 覆盖整个屏幕 */
.mi-loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
  backdrop-filter: blur(2px); /* 背景模糊效果 */
  z-index: v-bind(zIndex); /* 动态绑定层级 */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 加载器容器 - 居中的白色卡片 */
.mi-loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9); /* 不透明的白色背景 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 卡片阴影 */
  min-width: 120px; /* 最小宽度 */
}

/* 动画容器 - 水平排列的圆点 */
.mi-loading-animation {
  display: flex;
  gap: 4px; /* 圆点间距 */
  margin-bottom: 12px;
}

/* 加载圆点 - 基础样式和动画 */
.mi-loading-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%; /* 圆形 */
  background-color: #409eff; /* 主题色 */
  animation: mi-loading-bounce 1.4s infinite ease-in-out both; /* 跳动动画 */
}

/* 圆点动画延迟 - 创建波浪效果 */
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

/* 加载文字样式 */
.mi-loading-text {
  font-size: 14px;
  color: #666; /* 次要文字颜色 */
  line-height: 1.5;
  text-align: center;
  margin-top: 8px;
}

/* 圆点跳动动画 */
@keyframes mi-loading-bounce {
  0%,
  80%,
  100% {
    transform: scale(0); /* 缩小到0 */
  }
  40% {
    transform: scale(1); /* 放大到原始大小 */
  }
}

/* 淡入淡出过渡动画 */
.mi-loading-fade-enter-active,
.mi-loading-fade-leave-active {
  transition: opacity 0.3s ease;
}

.mi-loading-fade-enter-from,
.mi-loading-fade-leave-to {
  opacity: 0;
}
</style>
