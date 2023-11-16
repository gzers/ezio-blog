<script setup lang="ts">
import LoadingAnimation from "@/components/Loading/LoadingAnimation.vue";
import LoadingText from "@/components/Loading/LoadingText.vue";

</script>

<template>
  <div class="loading-container">
    <div class="loading-background"></div>
    <div class="loading-animation-container">
      <LoadingAnimation/>
      <LoadingText/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading-container{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  .loading-background{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, var(--loading-bg-1), var(--loading-bg-2), var(--loading-bg-3));
    background-size: 600% 600%;
    transition: all 1s;
    animation: backgroundAnimation 10s infinite;
    opacity: 1;
  }
  .loading-animation-container{
    z-index: 9999;
    display: flex;
    flex-direction: column;
  }
}


@keyframes backgroundAnimation {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>