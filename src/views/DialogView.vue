<template>
  <h1 class="row-title">对话框</h1>
  <div class="row">
    <ui-Button type="primary" @click="visible = true">对话框一</ui-Button>
    <ui-Button type="primary" @click="visible2 = true">对话框二</ui-Button>
    <ui-Button type="primary" @click="visible3 = true">对话框三</ui-Button>
  </div>
  <ui-Dialog v-model:visible="visible" @close="handleClose">
    这是一个基本的对话框
  </ui-Dialog>
  <ui-Dialog v-model:visible="visible2" @close="handleClose" title="测试标题" width="20vw" top="30vh">
    这是一个基本的对话框
  </ui-Dialog>
  <ui-Dialog v-model:visible="visible3" @close="handleClose">
    这是一个基本的对话框
    <template #footer>
      <ui-Button type="primary">取消</ui-Button>
      <ui-Button type="warning">确定</ui-Button>
    </template>
  </ui-Dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const handleClose = () => {
  visible.value = false;
  visible2.value = false;
  visible3.value = false;
}

</script>

<style lang="scss" scoped></style>