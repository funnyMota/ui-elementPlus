<template>
  <h1 class="row-title">第一组</h1>
  <div class="row">
    <ui-Card img-src="/public/web.png" summary="前端主流布局系统进阶与实战，轻松解决页面布局难题" />
    <ui-Card img-src="/public/go.png" summary="Google资深工程师深度讲解Go语言 由浅入深掌握Go语言">
      <template #footer>
        <div class="footer">
          <div class="level">中级 · 5225人报名</div>
          <div class="price">￥399.00</div>
        </div>
      </template>
    </ui-Card>
  </div>
  <h1 class="row-title">第二组</h1>
  <div class="row">
    <ui-Card img-src="/public/java.png" :width="368" :img-height="90">
      <div>路线吃透面试学问，伴随身为Java工程师的你一路成长，高效充分准备面试拿offer。</div>
      <template #footer>
        <div class="footer-java">
          <div class="level">3步骤 · 3门课</div>
          <div class="level">10982收藏</div>
        </div>
      </template>
    </ui-Card>
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-java {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 8px;
}
</style>