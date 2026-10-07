<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <ui-Icon icon="user-secret"></ui-Icon>
    <ui-Icon icon="bars"></ui-Icon>
    <ui-Icon icon="shield-halved"></ui-Icon>
    <ui-Icon icon="file"></ui-Icon>
    <ui-Icon icon="filter"></ui-Icon>
    <ui-Icon icon="gear"></ui-Icon>
    <ui-Icon icon="barcode"></ui-Icon>
    <ui-Icon icon="folder"></ui-Icon>
    <ui-Icon icon="folder-open"></ui-Icon>
  </div>
  <h1 class="row-title">设置不同大小</h1>
  <div class="row">
    <ui-Icon icon="user-secret" size="2xs"></ui-Icon>
    <ui-Icon icon="bars" size="xs"></ui-Icon>
    <ui-Icon icon="shield-halved" size="sm"></ui-Icon>
    <ui-Icon icon="file" size="lg"></ui-Icon>
    <ui-Icon icon="filter" size="xl"></ui-Icon>
    <ui-Icon icon="gear" size="2xl"></ui-Icon>
    <ui-Icon icon="barcode" size="2x"></ui-Icon>
    <ui-Icon icon="folder" size="3x"></ui-Icon>
    <ui-Icon icon="folder-open" size="4x"></ui-Icon>
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <ui-Icon icon="user-secret" rotation="90" size="xl"></ui-Icon>
    <ui-Icon icon="bars" rotation="180" size="xl"></ui-Icon>
    <ui-Icon icon="shield-halved" rotation="270" size="xl"></ui-Icon>
    <ui-Icon icon="file" flip="horizontal" size="xl"></ui-Icon>
    <ui-Icon icon="filter" flip="vertical" size="xl"></ui-Icon>
    <ui-Icon icon="folder-open" flip="both" size="xl"></ui-Icon>
  </div>
  <h1 class="row-title">动画</h1>
  <div class="row">
    <ui-Icon icon="user-secret" rotation="90" size="xl" spin></ui-Icon>
    <ui-Icon icon="bars" rotation="180" size="xl" beat></ui-Icon>
    <ui-Icon icon="shield-halved" rotation="270" size="xl" shake></ui-Icon>
    <ui-Icon icon="file" flip="horizontal" size="xl" bounce></ui-Icon>
    <ui-Icon icon="filter" flip="vertical" size="xl" fade></ui-Icon>
    <ui-Icon icon="folder-open" flip="both" size="xl" beat-fade></ui-Icon>
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <ui-Icon icon="user-secret" size="xl" type="primary"></ui-Icon>
    <ui-Icon icon="bars" size="xl" type="success"></ui-Icon>
    <ui-Icon icon="shield-halved" size="xl" type="info"></ui-Icon>
    <ui-Icon icon="file" size="xl" type="warning"></ui-Icon>
    <ui-Icon icon="filter" size="xl" type="danger"></ui-Icon>
    <ui-Icon icon="folder-open" size="xl" color="orange"></ui-Icon>
    <ui-Icon icon="folder-open" size="xl" color="#7ec102"></ui-Icon>
    <ui-Icon icon="folder-open" size="xl" color="rgba(122,122,122,.5)"></ui-Icon>
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped></style>