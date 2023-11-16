<script setup lang="ts">

</script>

<template>
  <div class="loading-text-container">
    <h3 class="title">加载中...</h3>
  </div>
</template>

<style scoped lang="scss">
.loading-text-container{
  margin-top: 16px;
  .title {
    overflow: hidden;
    border-right: .1em solid white; /* 闪烁竖线 */
    white-space: nowrap; /* 防止换行 */
    font-weight: bold;
    letter-spacing: .20em; /* 字母之间的距离 */
    opacity: 0;
    animation: loading 3s steps(25,end) infinite; /* 播放加载效果 */
  }

  /* 控制逐字加载动画的关键帧 */
  @keyframes loading {
    from {
      width: 0;
      opacity: 1;
    }
    to {
      width: 100%;
      opacity: 1;
    }
  }
}
</style>