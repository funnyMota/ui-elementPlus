<template>
  <i class="ui-icon" :class="{ [`ui-icon--${type}`]: type }">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { omit } from 'lodash-es'
import propObj from './props'
defineOptions({
  name: 'ui-icon'
})
const props = defineProps(propObj)
const filteredProps = computed(() => omit(props, ['type']))
</script>

<style lang="scss" scoped></style>