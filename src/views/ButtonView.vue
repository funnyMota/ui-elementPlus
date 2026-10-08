<template>
  <h1 class="row-title">普通</h1>
  <div class="row">
    <ui-Button type="primary">测试</ui-Button>
    <ui-Button type="success">测试</ui-Button>
    <ui-Button type="warning">测试</ui-Button>
    <ui-Button type="danger">测试</ui-Button>
    <ui-Button type="info">测试</ui-Button>
    <ui-Button>测试</ui-Button>
  </div>
  <h1 class="row-title">朴素</h1>
  <div class="row">
    <ui-Button type="primary" plain>测试</ui-Button>
    <ui-Button type="success" plain>测试</ui-Button>
    <ui-Button type="warning" plain>测试</ui-Button>
    <ui-Button type="danger" plain>测试</ui-Button>
    <ui-Button type="info" plain>测试</ui-Button>
    <ui-Button>测试</ui-Button>
  </div>
  <h1 class="row-title">圆角</h1>
  <div class="row">
    <ui-Button type="primary" plain round>测试</ui-Button>
    <ui-Button type="success" plain round>测试</ui-Button>
    <ui-Button type="warning" plain round>测试</ui-Button>
    <ui-Button type="danger" plain round>测试</ui-Button>
    <ui-Button type="info" plain round>测试</ui-Button>
    <ui-Button>测试</ui-Button>
  </div>
  <h1 class="row-title">禁用</h1>
  <div class="row">
    <ui-Button type="primary" disabled>测试</ui-Button>
    <ui-Button type="success" disabled>测试</ui-Button>
    <ui-Button type="warning" disabled>测试</ui-Button>
    <ui-Button type="danger" disabled>测试</ui-Button>
    <ui-Button type="info" disabled>测试</ui-Button>
    <ui-Button disabled>测试</ui-Button>
  </div>
  <h1 class="row-title">加载</h1>
  <div class="row">
    <ui-Button type="primary" loading>测试</ui-Button>
    <ui-Button type="success" loading>测试</ui-Button>
    <ui-Button type="warning" loading>测试</ui-Button>
    <ui-Button type="danger" loading>测试</ui-Button>
    <ui-Button type="info" loading>测试</ui-Button>
    <ui-Button loading>测试</ui-Button>
  </div>
  <h1 class="row-title">图标</h1>
  <div class="row">
    <ui-Button type="primary" icon="user">测试</ui-Button>
    <ui-Button type="success" icon="user">测试</ui-Button>
    <ui-Button type="warning" icon="user">测试</ui-Button>
    <ui-Button type="danger" icon="shop">测试</ui-Button>
    <ui-Button type="info" icon="shop">测试</ui-Button>
    <ui-Button icon="shop">测试</ui-Button>
  </div>
  <h1 class="row-title">大小</h1>
  <div class="row">
    <ui-Button type="warning" size="small">测试</ui-Button>
    <ui-Button type="danger" size="small">测试</ui-Button>
    <ui-Button type="primary">测试</ui-Button>
    <ui-Button type="success">测试</ui-Button>
    <ui-Button type="info" size="large">测试</ui-Button>
    <ui-Button size="large">测试</ui-Button>
  </div>
  <h1 class="row-title">原型</h1>
  <div class="row">
    <ui-Button type="primary" circle icon="file"></ui-Button>
    <ui-Button type="success" circle icon="file"></ui-Button>
    <ui-Button type="warning" circle icon="file"> </ui-Button>
    <ui-Button type="danger" circle icon="file"></ui-Button>
    <ui-Button type="info" circle icon="file"></ui-Button>
    <ui-Button circle icon="file"></ui-Button>
  </div>
  <h1 class="row-title">按钮事件</h1>
  <div class="row">
    <ui-Button type="primary" @click="clickHandler" ref="btnRef">主要按钮</ui-Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const btnRef = ref(null)
const clickHandler = () => {
  window.alert("按钮被点击了")
  console.log(btnRef.value.ref);
}

</script>

<style lang="scss" scoped></style>