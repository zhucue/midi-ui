<template>
  <div class="component-demo">
    <div class="demo-header">
      <h3 class="demo-title">{{ title }}</h3>
      <p class="demo-description">{{ description }}</p>
    </div>
    <div class="demo-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ComponentDemo'
})

interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<style scoped>
.component-demo {
  background: white;
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.component-demo:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.demo-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;
}

.demo-title {
  font-size: 32px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.demo-description {
  font-size: 16px;
  color: #666;
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

@media (max-width: 768px) {
  .component-demo {
    padding: 24px;
    margin-bottom: 24px;
  }
  
  .demo-title {
    font-size: 24px;
  }
  
  .demo-content {
    gap: 24px;
  }
}
</style>
