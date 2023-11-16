<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
const waveList = computed(() => {
  const list = [
    {
      x: 48,
      y: 0,
      fill: 'var(--c-bg-light)'
    },
    {
      x: 48,
      y: 3,
      fill: 'var(--c-bg-lighter)'
    },
    {
      x: 48,
      y: 6,
      fill: 'var(--c-bg-darker)'
    },
    {
      x: 48,
      y: 7,
      fill: 'var(--c-bg-dark)'
    },
  ]
  return list
})
</script>

<template>
  <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
      <use
          v-for="item in waveList"
          xlink:href="#gentle-wave"
          :x="item.x"
          :y="item.y"
          :fill="item.fill"
      />
    </g>
  </svg>
</template>


<style scoped lang="scss">
.waves {
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 8vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 8px;
  max-height: 56px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
}

@media ((max-width: 768px)) {
  .waves {
    height: 2rem;
  }
}
</style>