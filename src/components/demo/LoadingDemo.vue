<template>
  <ComponentDemo title="Loading 加载" description="加载数据时显示动效">
    <DemoGroup title="全局加载">
      <mi-button @click="showGlobalLoading">显示全局加载</mi-button>
      <mi-button @click="showGlobalLoadingWithText">带文字加载</mi-button>
      <mi-button @click="showDotsLoading">点状加载</mi-button>
      <mi-button @click="showCircleLoading">圆形加载</mi-button>
      <mi-button @click="showBarsLoading">条形加载</mi-button>
    </DemoGroup>
    
    <DemoGroup title="局部加载">
      <div class="loading-container">
        <div class="loading-content" :class="{ 'loading-active': localLoading }">
          <p>这里是一些内容</p>
          <p>当加载状态开启时，这些内容会被遮罩</p>
          <mi-button @click="toggleLocalLoading">
            {{ localLoading ? '停止加载' : '开始加载' }}
          </mi-button>
          <div v-if="localLoading" class="local-loading-overlay">
            <div class="loading-spinner"></div>
            <span>加载中...</span>
          </div>
        </div>
      </div>
    </DemoGroup>

    <DemoGroup title="不同样式">
      <div class="loading-examples">
        <div class="loading-example">
          <h5>点状加载</h5>
          <div class="example-content">
            内容区域
            <div class="loading-overlay">
              <div class="loading-dots"></div>
              <span>加载中...</span>
            </div>
          </div>
        </div>
        <div class="loading-example">
          <h5>圆形加载</h5>
          <div class="example-content">
            内容区域
            <div class="loading-overlay">
              <div class="loading-circle"></div>
              <span>加载中...</span>
            </div>
          </div>
        </div>
        <div class="loading-example">
          <h5>条形加载</h5>
          <div class="example-content">
            内容区域
            <div class="loading-overlay">
              <div class="loading-bars"></div>
              <span>加载中...</span>
            </div>
          </div>
        </div>
      </div>
    </DemoGroup>
  </ComponentDemo>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLoading } from '@/composables/useLoading'
import ComponentDemo from './ComponentDemo.vue'
import DemoGroup from './DemoGroup.vue'

defineOptions({
  name: 'LoadingDemo'
})

const { showLoading, hideLoading } = useLoading()
const localLoading = ref(false)

const showGlobalLoading = () => {
  showLoading()
  setTimeout(() => {
    hideLoading()
  }, 3000)
}

const showGlobalLoadingWithText = () => {
  showLoading('数据加载中，请稍候...')
  setTimeout(() => {
    hideLoading()
  }, 3000)
}

const showDotsLoading = () => {
  showLoading('点状加载中...', 'dots')
  setTimeout(() => {
    hideLoading()
  }, 3000)
}

const showCircleLoading = () => {
  showLoading('圆形加载中...', 'circle')
  setTimeout(() => {
    hideLoading()
  }, 3000)
}

const showBarsLoading = () => {
  showLoading('条形加载中...', 'bars')
  setTimeout(() => {
    hideLoading()
  }, 3000)
}

const toggleLocalLoading = () => {
  localLoading.value = !localLoading.value
  if (localLoading.value) {
    setTimeout(() => {
      localLoading.value = false
    }, 3000)
  }
}
</script>

<style scoped>
.loading-container {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  min-height: 120px;
}

.loading-content {
  padding: 20px;
}

.loading-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.loading-example {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  position: relative;
  min-height: 100px;
}

.loading-example h5 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666;
}

.example-content {
  padding: 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
  position: relative;
}

.loading-overlay, .local-loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.loading-spinner, .loading-dots, .loading-circle, .loading-bars {
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #873bf4;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-dots {
  border: none;
  background: none;
  display: flex;
  gap: 4px;
}

.loading-dots::before,
.loading-dots::after {
  content: '';
  width: 8px;
  height: 8px;
  background: #873bf4;
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite both;
}

.loading-dots::before {
  animation-delay: -0.32s;
}

.loading-dots::after {
  animation-delay: -0.16s;
}

.loading-bars {
  border: none;
  background: none;
  display: flex;
  gap: 2px;
  align-items: end;
  height: 32px;
}

.loading-bars::before,
.loading-bars::after {
  content: '';
  width: 4px;
  height: 100%;
  background: #873bf4;
  animation: bars 1.2s ease-in-out infinite;
}

.loading-bars::before {
  animation-delay: -0.4s;
}

.loading-bars::after {
  animation-delay: -0.2s;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@keyframes bars {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
