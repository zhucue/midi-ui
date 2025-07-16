<template>
  <button
    :class="buttonClass"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="mi-button__loading">⟳</span>
    <span v-if="icon && !loading" class="mi-button__icon">{{ icon }}</span>
    <span v-if="$slots.default" class="mi-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonProps } from "@/types";

defineOptions({
  name: "MiButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "default",
  size: "medium",
  disabled: false,
  loading: false,
  round: false,
  circle: false,
  plain: false,
});

const emit = defineEmits<{
  click: [evt: MouseEvent];
}>();

const buttonClass = computed(() => [
  "mi-button",
  `mi-button--${props.type}`,
  `mi-button--${props.size}`,
  {
    "mi-button--round": props.round,
    "mi-button--circle": props.circle,
    "mi-button--plain": props.plain,
    "is-disabled": props.disabled,
    "is-loading": props.loading,
  },
]);

const handleClick = (evt: MouseEvent) => {
  if (props.disabled || props.loading) return;
  emit("click", evt);
};
</script>

<style scoped>
.mi-button__loading {
  display: inline-block;
  animation: rotating 2s linear infinite;
  margin-right: 4px;
}

.mi-button__icon {
  margin-right: 4px;
}

.mi-button--circle .mi-button__icon,
.mi-button--circle .mi-button__loading {
  margin-right: 0;
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
