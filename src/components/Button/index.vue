<template>
  <button
    :class="buttonClass"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="m-button__loading">⟳</span>
    <span v-if="icon && !loading" class="m-button__icon">{{ icon }}</span>
    <span v-if="$slots.default" class="m-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ButtonProps } from "@/types";

defineOptions({
  name: "MButton",
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
  "m-button",
  `m-button--${props.type}`,
  `m-button--${props.size}`,
  {
    "m-button--round": props.round,
    "m-button--circle": props.circle,
    "m-button--plain": props.plain,
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
.m-button__loading {
  display: inline-block;
  animation: rotating 2s linear infinite;
  margin-right: 4px;
}

.m-button__icon {
  margin-right: 4px;
}

.m-button--circle .m-button__icon,
.m-button--circle .m-button__loading {
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
