<template>
  <div class="demo-group">
    <h4 class="demo-group-title">{{ title }}</h4>
    <div class="demo-showcase">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DemoGroup'
})

interface Props {
  title: string
}

defineProps<Props>()
</script>

<style scoped>
.demo-group {
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.demo-group:hover {
  background: #f0f2f5;
}

.demo-group-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.demo-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

@media (max-width: 768px) {
  .demo-showcase {
    flex-direction: column;
    align-items: stretch;
  }
  
  .demo-showcase > * {
    width: 100%;
  }
}
</style>
