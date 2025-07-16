export interface ButtonProps {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  loading?: boolean;
  round?: boolean;
  circle?: boolean;
  plain?: boolean;
  icon?: string;
}