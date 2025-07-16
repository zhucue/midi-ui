import { reactive } from 'vue'

interface LoadingState {
  visible: boolean
  text: string
  spinner: 'dots' | 'circle' | 'bars'
}

const state = reactive<LoadingState>({
  visible: false,
  text: '',
  spinner: 'dots'
})

export function useLoading() {
  const showLoading = (text: string = '加载中...', spinner: 'dots' | 'circle' | 'bars' = 'dots') => {
    state.visible = true
    state.text = text
    state.spinner = spinner
  }

  const hideLoading = () => {
    state.visible = false
    state.text = ''
    state.spinner = 'dots'
  }

  return {
    state,
    showLoading,
    hideLoading
  }
} 
