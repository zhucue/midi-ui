<template>
  <section class="features">
    <div class="features-container">
      <h2 class="section-title">核心特性</h2>
      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.title">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'DemoFeatures'
})

const features = ref([
  {
    icon: '🎨',
    title: '设计优雅',
    description: '精心设计的组件样式，提供一致的视觉体验'
  },
  {
    icon: '⚡',
    title: '高性能',
    description: '基于 Vue 3 Composition API，性能卓越'
  },
  {
    icon: '🔧',
    title: '易于使用',
    description: '简洁的 API 设计，开箱即用'
  },
  {
    icon: '📱',
    title: '响应式',
    description: '完美适配各种屏幕尺寸'
  },
  {
    icon: '🛠️',
    title: 'TypeScript',
    description: '完整的 TypeScript 支持，类型安全'
  },
  {
    icon: '📦',
    title: '按需引入',
    description: '支持按需引入，减小打包体积'
  }
])
</script>

<style scoped>
.features {
  padding: 100px 0;
  background: white;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 80px;
  color: #1a1a1a;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.feature-card {
  text-align: center;
  padding: 40px 24px;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #fafafa;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: white;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 24px;
}

.feature-card h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a1a1a;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
    margin-bottom: 60px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .feature-card {
    padding: 24px 16px;
  }
}
</style>
