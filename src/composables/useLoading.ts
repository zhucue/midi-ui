import { ref, reactive } from 'vue'

/**
 * Loading状态接口
 */
interface LoadingState {
  visible: boolean  // 是否显示Loading
  text: string      // 加载文字
}

/**
 * 全局Loading状态
 * 使用reactive创建响应式状态，支持跨组件共享
 */
const state = reactive<LoadingState>({
  visible: false,   // 默认不显示
  text: ''          // 默认无文字
})

/**
 * 全局Loading管理Composable
 * 提供统一的Loading状态管理功能
 * 
 * 特性：
 * - 全局状态共享
 * - 简单的API调用
 * - 支持自定义加载文字
 * - 自动状态管理
 * 
 * @returns {Object} 返回状态和控制方法
 */
export function useLoading() {
  /**
   * 显示全局Loading
   * @param text 加载文字，默认为"加载中..."
   */
  const showLoading = (text: string = '加载中...') => {
    state.visible = true
    state.text = text
  }

  /**
   * 隐藏全局Loading
   * 同时清空加载文字
   */
  const hideLoading = () => {
    state.visible = false
    state.text = ''
  }

  return {
    state,          // 全局Loading状态
    showLoading,    // 显示Loading方法
    hideLoading     // 隐藏Loading方法
  }
} 