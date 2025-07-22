import DefaultTheme from 'vitepress/theme'
import './wave-theme.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 在客户端初始化波浪动画
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        initWaveAnimation()
      }, 100)
    }
  }
}

// 波浪动画实现
function initWaveAnimation() {
  let isAnimating = false
  
  // 创建波浪容器
  const waveContainer = document.createElement('div')
  waveContainer.className = 'wave-container'
  waveContainer.innerHTML = '<div class="wave-circle"></div>'
  document.body.appendChild(waveContainer)
  
  // 监听主题切换按钮点击
  document.addEventListener('click', (e) => {
    const switchBtn = e.target.closest('.VPSwitch')
    if (!switchBtn || isAnimating) return
    
    isAnimating = true
    
    // 获取点击位置
    const rect = switchBtn.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    
    // 获取当前主题状态
    const isDark = document.documentElement.classList.contains('dark')
    
    // 设置波浪位置和颜色
    const waveCircle = waveContainer.querySelector('.wave-circle')
    waveCircle.style.left = x + 'px'
    waveCircle.style.top = y + 'px'
    waveCircle.style.background = isDark 
      ? 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)'
      : 'radial-gradient(circle, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.6) 50%, rgba(26,26,26,0) 100%)'
    
    // 显示并触发动画
    waveContainer.style.display = 'block'
    waveCircle.classList.add('wave-expand')
    
    // 延迟切换主题以配合动画
    setTimeout(() => {
      if (isDark) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('vitepress-theme-appearance', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('vitepress-theme-appearance', 'dark')
      }
    }, 150)
    
    // 清理动画
    setTimeout(() => {
      waveContainer.style.display = 'none'
      waveCircle.classList.remove('wave-expand')
      isAnimating = false
    }, 800)
    
    // 阻止默认的主题切换
    e.preventDefault()
    e.stopPropagation()
  }, true)
}
