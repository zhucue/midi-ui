import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Midi UI',
  description: '基于 Vue 3.5 + Pinia + Vite + TypeScript 的现代化组件库',
  
  // 网站头部配置
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    ['meta', { name: 'theme-color', content: '#409eff' }]
  ],
  
  themeConfig: {
    // 导航栏logo
    logo: '/logo.jpg',
    
    // 网站标题（会显示在logo旁边）
    siteTitle: 'Midi UI',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' },
      { text: '指南', link: '/guide/installation' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开发指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '主题定制', link: '/guide/theme' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Color 颜色选择器', link: '/components/color' },
            { text: 'Loading 加载', link: '/components/loading' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/midi-ui' }
    ]
  }
}) 