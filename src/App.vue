<template>
  <div class="app">
    <header class="app-header">
      <h1>Midi UI</h1>
      <p>基于 Vue 3.5 + Pinia + Vite + TypeScript 的组件库</p>
    </header>

    <main class="app-main">
      <!-- 按钮组件演示 -->
      <section class="demo-section">
        <h2>按钮 Button</h2>
        <div class="demo-block">
          <h3>基础用法</h3>
          <div class="demo-row">
            <mi-button>默认按钮</mi-button>
            <mi-button type="primary">主要按钮</mi-button>
            <mi-button type="success">成功按钮</mi-button>
            <mi-button type="warning">警告按钮</mi-button>
            <mi-button type="danger">危险按钮</mi-button>
            <mi-button type="info">信息按钮</mi-button>
          </div>
        </div>

        <div class="demo-block">
          <h3>朴素按钮</h3>
          <div class="demo-row">
            <mi-button plain>朴素按钮</mi-button>
            <mi-button type="primary" plain>主要按钮</mi-button>
            <mi-button type="success" plain>成功按钮</mi-button>
            <mi-button type="warning" plain>警告按钮</mi-button>
            <mi-button type="danger" plain>危险按钮</mi-button>
            <mi-button type="info" plain>信息按钮</mi-button>
          </div>
        </div>

        <div class="demo-block">
          <h3>圆角按钮</h3>
          <div class="demo-row">
            <mi-button round>圆角按钮</mi-button>
            <mi-button type="primary" round>主要按钮</mi-button>
            <mi-button type="success" round>成功按钮</mi-button>
            <mi-button type="warning" round>警告按钮</mi-button>
            <mi-button type="danger" round>危险按钮</mi-button>
            <mi-button type="info" round>信息按钮</mi-button>
          </div>
        </div>

        <div class="demo-block">
          <h3>图标按钮</h3>
          <div class="demo-row">
            <mi-button icon="🔍" circle></mi-button>
            <mi-button type="primary" icon="✏️" circle></mi-button>
            <mi-button type="success" icon="✓" circle></mi-button>
            <mi-button type="warning" icon="⚠️" circle></mi-button>
            <mi-button type="danger" icon="✕" circle></mi-button>
            <mi-button type="info" icon="ℹ️" circle></mi-button>
          </div>
        </div>

        <div class="demo-block">
          <h3>不同尺寸</h3>
          <div class="demo-row">
            <mi-button size="large">大型按钮</mi-button>
            <mi-button>默认按钮</mi-button>
            <mi-button size="small">小型按钮</mi-button>
          </div>
        </div>

        <div class="demo-block">
          <h3>加载状态</h3>
          <div class="demo-row">
            <mi-button :loading="loading" @click="toggleLoading">
              {{ loading ? '加载中' : '点击加载' }}
            </mi-button>
            <mi-button type="primary" loading>加载中</mi-button>
          </div>
        </div>

        <div class="demo-block">
          <h3>禁用状态</h3>
          <div class="demo-row">
            <mi-button disabled>禁用按钮</mi-button>
            <mi-button type="primary" disabled>主要按钮</mi-button>
            <mi-button type="success" disabled>成功按钮</mi-button>
          </div>
        </div>
      </section>

      <!-- 输入框组件演示 -->
      <section class="demo-section">
        <h2>输入框 Input</h2>
        <div class="demo-block">
          <h3>基础用法</h3>
          <div class="demo-row">
            <mi-input
              v-model="inputValue"
              placeholder="请输入内容"
              style="width: 200px"
            ></mi-input>
            <span class="demo-text">输入的值：{{ inputValue }}</span>
          </div>
        </div>

        <div class="demo-block">
          <h3>禁用状态</h3>
          <div class="demo-row">
            <mi-input
              disabled
              placeholder="禁用状态"
              style="width: 200px"
            ></mi-input>
          </div>
        </div>

        <div class="demo-block">
          <h3>可清空</h3>
          <div class="demo-row">
            <mi-input
              v-model="clearableValue"
              clearable
              placeholder="可清空的输入框"
              style="width: 200px"
            ></mi-input>
          </div>
        </div>

        <div class="demo-block">
          <h3>密码框</h3>
          <div class="demo-row">
            <mi-input
              v-model="passwordValue"
              type="password"
              show-password
              placeholder="请输入密码"
              style="width: 200px"
            ></mi-input>
          </div>
        </div>

        <div class="demo-block">
          <h3>不同尺寸</h3>
          <div class="demo-row">
            <mi-input
              size="large"
              placeholder="大型输入框"
              style="width: 200px"
            ></mi-input>
            <mi-input placeholder="默认输入框" style="width: 200px"></mi-input>
            <mi-input
              size="small"
              placeholder="小型输入框"
              style="width: 200px"
            ></mi-input>
          </div>
        </div>
      </section>

      <!-- Loading组件演示 -->
      <section class="demo-section">
        <h2>Loading 加载</h2>
        <div class="demo-block">
          <h3>全局Loading</h3>
          <div class="demo-row">
            <mi-button type="primary" @click="showGlobalLoading">
              显示全局Loading
            </mi-button>
            <mi-button type="success" @click="showGlobalLoadingWithText">
              显示带文字的Loading
            </mi-button>
          </div>
        </div>
      </section>
    </main>

    <!-- 全局Loading组件 -->
    <mi-global-loading />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GlobalLoading from './components/GlobalLoading/index.vue';
import { useLoading } from './composables/useLoading';

const loading = ref(false);
const inputValue = ref('');
const clearableValue = ref('可清空的内容');
const passwordValue = ref('');

const { showLoading, hideLoading } = useLoading();

const toggleLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

/**
 * 显示全局Loading演示
 * 展示基础的Loading效果，3秒后自动隐藏
 */
const showGlobalLoading = () => {
  showLoading();
  setTimeout(() => {
    hideLoading();
  }, 3000);
};

/**
 * 显示带文字的全局Loading演示
 * 展示带自定义文字的Loading效果，3秒后自动隐藏
 */
const showGlobalLoadingWithText = () => {
  showLoading('数据加载中，请稍候...');
  setTimeout(() => {
    hideLoading();
  }, 3000);
};
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: linear-gradient(
    135deg,
    var(--m-color-primary),
    var(--m-color-primary-light-3)
  );
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.app-header h1 {
  font-size: 48px;
  margin: 0 0 16px 0;
  font-weight: 300;
}

.app-header p {
  font-size: 18px;
  margin: 0;
  opacity: 0.9;
}

.app-main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
  box-sizing: border-box;
}

.demo-section {
  margin-bottom: 60px;
}

.demo-section h2 {
  font-size: 32px;
  color: var(--m-color-text-primary);
  margin: 0 0 30px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--m-color-primary);
}

.demo-block {
  margin-bottom: 30px;
  padding: 24px;
  border: 1px solid var(--m-border-color-lighter);
  border-radius: 8px;
  background: var(--m-bg-color);
}

.demo-block h3 {
  font-size: 18px;
  color: var(--m-color-text-primary);
  margin: 0 0 16px 0;
  font-weight: 500;
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-text {
  color: var(--m-color-text-secondary);
  font-size: 14px;
}

.app-footer {
  background: var(--m-bg-color-page);
  padding: 20px;
  text-align: center;
  color: var(--m-color-text-secondary);
  border-top: 1px solid var(--m-border-color-lighter);
}

.app-footer p {
  margin: 0;
}
</style>
