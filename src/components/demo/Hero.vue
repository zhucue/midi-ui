<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Midi UI</h1>
        <p class="hero-subtitle">基于 Vue 3.5 + TypeScript 的现代化组件库</p>
        <p class="hero-description">
          简单易用、功能完备、设计优雅的 Vue 3 组件库，
          为开发者提供高质量的组件和最佳的开发体验。
        </p>
        <div class="hero-actions">
          <mi-button type="primary" size="large" @click="scrollToComponents">开始使用</mi-button>
          <mi-button size="large" @click="openGitHub">查看源码</mi-button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="component-showcase">
          <div class="showcase-item">
            <mi-button type="primary">Primary</mi-button>
          </div>
          <div class="showcase-item">
            <mi-switch v-model="heroSwitch" active-color="#873bf4" />
          </div>
          <div class="showcase-item">
            <mi-input v-model="heroInput" placeholder="输入内容..." />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'DemoHero'
})

// 响应式数据
const heroSwitch = ref(true)
const heroInput = ref('Hello Midi UI')

// 方法
const scrollToComponents = () => {
  const element = document.getElementById('components')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const openGitHub = () => {
  window.open('https://github.com/zhucue/midi-ui', '_blank')
}
</script>

<style scoped>
.hero {
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-content {
  max-width: 500px;
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 24px;
  color: #666;
  margin-bottom: 24px;
  font-weight: 500;
}

.hero-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.component-showcase {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.showcase-item {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 48px;
  }
  
  .hero-subtitle {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 36px;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .component-showcase {
    padding: 24px;
  }
}
</style>
