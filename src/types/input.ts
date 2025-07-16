export interface InputProps {
  modelValue?: string | number;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  size?: 'large' | 'medium' | 'small';
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  showPassword?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  maxlength?: number;
  minlength?: number;
  showWordLimit?: boolean;
  autocomplete?: string;
  name?: string;
  form?: string;
  label?: string;
  tabindex?: string | number;
  validateEvent?: boolean;
}

export interface InputEmits {
  'update:modelValue': [value: string | number];
  blur: [evt: FocusEvent];
  focus: [evt: FocusEvent];
  change: [value: string | number];
  input: [value: string | number];
  clear: [];
}