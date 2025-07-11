<template>
  <div :class="inputClass">
    <div class="mi-input__wrapper">
      <span v-if="$slots.prefix" class="mi-input__prefix">
        <slot name="prefix"></slot>
      </span>

      <input
        ref="inputRef"
        :class="['mi-input__inner']"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />

      <span
        v-if="$slots.suffix || clearable || showPassword"
        class="mi-input__suffix"
      >
        <span
          v-if="clearable && modelValue && !disabled && !readonly"
          class="mi-input__clear"
          @click="handleClear"
        >
          ✕
        </span>
        <span
          v-if="showPassword"
          class="mi-input__password"
          @click="togglePassword"
        >
          {{ passwordVisible ? "👁" : "👁‍🗨" }}
        </span>
        <slot name="suffix"></slot>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from "vue";
import type { InputProps } from "@/types";

defineOptions({
  name: "MiInput",
});

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  size: "medium",
  disabled: false,
  readonly: false,
  clearable: false,
  showPassword: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  input: [value: string | number];
  change: [value: string | number];
  focus: [evt: FocusEvent];
  blur: [evt: FocusEvent];
  clear: [];
}>();

const inputRef = ref<HTMLInputElement>();
const focused = ref(false);
const passwordVisible = ref(false);

const inputClass = computed(() => [
  "mi-input",
  `mi-input--${props.size}`,
  {
    "is-disabled": props.disabled,
    "is-readonly": props.readonly,
    "is-focus": focused.value,
  },
]);

const handleInput = (evt: Event) => {
  const target = evt.target as HTMLInputElement;
  const value = target.value;
  emit("update:modelValue", value);
  emit("input", value);
};

const handleChange = (evt: Event) => {
  const target = evt.target as HTMLInputElement;
  const value = target.value;
  emit("change", value);
};

const handleFocus = (evt: FocusEvent) => {
  focused.value = true;
  emit("focus", evt);
};

const handleBlur = (evt: FocusEvent) => {
  focused.value = false;
  emit("blur", evt);
};

const handleClear = () => {
  emit("update:modelValue", "");
  emit("input", "");
  emit("clear");
  nextTick(() => {
    inputRef.value?.focus();
  });
};

const togglePassword = () => {
  passwordVisible.value = !passwordVisible.value;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

const focus = () => {
  inputRef.value?.focus();
};

const blur = () => {
  inputRef.value?.blur();
};

defineExpose({
  focus,
  blur,
});
</script>
