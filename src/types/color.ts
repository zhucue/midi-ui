export interface ColorProps {
  modelValue?: string;
  disabled?: boolean;
  size?: 'large' | 'medium' | 'default' | 'small';
  showAlpha?: boolean;
  colorFormat?: 'hsl' | 'hex' | 'rgb';
  predefine?: string[];
}

export interface ColorEmits {
  'update:modelValue': [value: string];
  change: [value: string];
  activeChange: [value: string];
}
