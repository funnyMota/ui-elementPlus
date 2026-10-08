<template>
  <transition name="dialog-fade">
    <div v-show="visible" class="ui-dialog_wrapper">
      <div class="ui-dialog" :style="{ width, marginTop: top }">
        <div class="ui-dialog_header">
          <slot name="title">
            <span>{{ title }}</span>
          </slot>
          <button class="ui-dialog_headerbtn" @click="handleClose">
            <ui-Icon icon="xmark" />
          </button>
        </div>
        <div class="ui-dialog_body">
          <slot />
        </div>
        <div class="ui-dialog_footer" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import propObj from './props'
defineOptions({
  name: 'ui-Dialog'
})
defineProps(propObj)
const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<style lang="scss" scoped></style>