<template>
  <button class="ui-button" :class="{
    [`ui-button--${type}`]: type,
    [`ui-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-disabled': disabled || loading,
    'is-circle': circle,
  }" :disabled="disabled || loading" ref="_ref">
    <ui-Icon icon="spinner" spin v-if="loading"></ui-Icon>
    <ui-Icon :icon="icon" v-if="icon"></ui-Icon>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup>
import propObj from './props'
import { defineProps, defineExpose, ref } from 'vue'
defineOptions({
  name: 'ui-Button'
})
defineProps(propObj)

const _ref = ref(null);
defineExpose({
  ref: _ref,
})
</script>

<style lang="scss" scoped></style>