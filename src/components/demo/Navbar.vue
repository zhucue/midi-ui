<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <h1>Midi UI</h1>
        <span class="version">v1.0.0</span>
      </div>
      <div class="navbar-nav">
        <a href="#components" class="nav-link">组件</a>
        <a href="#examples" class="nav-link">示例</a>
        <a href="https://github.com/zhucue/midi-ui" class="nav-link" target="_blank">GitHub</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DemoNavbar'
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eee;
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar-brand h1 {
  font-size: 24px;
  font-weight: 600;
  color: #873bf4;
  margin: 0;
}

.version {
  padding: 2px 8px;
  background: #f0f0f0;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
}

.navbar-nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #873bf4;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 16px;
  }
  
  .navbar-nav {
    gap: 16px;
  }
}
</style>
