<template>
  <div class="app">
    <!-- 顶部导航 -->
    <DemoNavbar />

    <!-- 英雄区域 -->
    <DemoHero />

    <!-- 特性介绍 -->
    <DemoFeatures />

    <!-- 组件展示区域 -->
    <main class="components-section" id="components">
      <div class="components-container">
        <h2 class="section-title">组件展示</h2>
        
        <!-- 各个组件的演示 -->
        <ButtonDemo />
        <SwitchDemo />
        <InputDemo />
        <LoadingDemo />
        <TableDemo />
      </div>
    </main>

    <!-- 页脚 -->
    <DemoFooter />

    <!-- 全局Loading组件 -->
    <mi-global-loading />
  </div>
</template>

<script setup lang="ts">

import DemoNavbar from './components/demo/Navbar.vue'
import DemoHero from './components/demo/Hero.vue'
import DemoFeatures from './components/demo/Features.vue'
import DemoFooter from './components/demo/Footer.vue'
import ButtonDemo from './components/demo/ButtonDemo.vue'
import SwitchDemo from './components/demo/SwitchDemo.vue'
import InputDemo from './components/demo/InputDemo.vue'
import LoadingDemo from './components/demo/LoadingDemo.vue'
import TableDemo from './components/demo/TableDemo.vue'
</script>

<style scoped>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* 组件展示区域 */
.components-section {
  padding: 100px 0;
  background: #fafafa;
}

.components-container {
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

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
    margin-bottom: 60px;
  }
  
  .components-container {
    padding: 0 16px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 28px;
    margin-bottom: 40px;
  }
}

.demo-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.demo-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a1a1a;
}

.demo-row {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}
</style>
