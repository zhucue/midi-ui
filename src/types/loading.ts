export interface LoadingProps {
  visible?: boolean;
  text?: string;
  spinner?: 'dots' | 'circle' | 'bars';
  background?: string;
  customClass?: string;
  lock?: boolean;
}

export interface LoadingEmits {
  close: [];
}

export interface LoadingOptions {
  text?: string;
  spinner?: 'dots' | 'circle' | 'bars';
  background?: string;
  customClass?: string;
  lock?: boolean;
}

export interface UseLoadingReturn {
  showLoading: (text?: string, spinner?: 'dots' | 'circle' | 'bars') => void;
  hideLoading: () => void;
  isLoading: Readonly<Ref<boolean>>;
}