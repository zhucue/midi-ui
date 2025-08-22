<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Midi UI</h4>
          <p>基于 Vue 3.5 + TypeScript 的现代化组件库</p>
        </div>
        <div class="footer-section">
          <h4>快速链接</h4>
          <ul class="footer-links">
            <li><a href="#components">组件</a></li>
            <li><a href="#examples">示例</a></li>
            <li><a href="https://github.com/zhucue/midi-ui" target="_blank">GitHub</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>技术栈</h4>
          <ul class="footer-links">
            <li>Vue 3.5</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>VitePress</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Midi UI. All rights reserved.</p>
        <p>Made with ❤️ by developers</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DemoFooter'
})
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: white;
  padding: 60px 0 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #873bf4;
}

.footer-section p {
  color: #ccc;
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #873bf4;
}

.footer-bottom {
  padding-top: 30px;
  border-top: 1px solid #333;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  margin: 0;
  opacity: 0.8;
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
