<template>
  <div class="ui-card" :style="width ? { width: width + 'px' } : {}">
    <div class="ui-card-img" :style="imgHeight ? { height: imgHeight } : {}">
      <img :src="imgSrc" alt="">
    </div>
    <div v-if="summary" class="ui-card-summary">
      {{ summary }}
    </div>
    <div v-else class="ui-card-summary">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="ui-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from 'vue'
import propObj from './prop'
defineOptions({
  name: 'ui-Card'
})
defineProps(propObj)
</script>

<style lang="scss" scoped></style>