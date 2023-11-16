<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useThemeStore } from '@/stores/theme'
  const mainColor = computed(() => {
    const { primaryColor } = useThemeStore()
    return primaryColor
  })
  const circleList = ref(
      [
        {
          left: '25%',
          size: 80,
          delay: 0,
          duration: null,
        },
        {
          left: '10%',
          size: 80,
          delay: 2,
          duration: 12,
        },
        {
          left: '70%',
          size: 20,
          delay: 4,
          duration: 7,
        },
        {
          left: '40%',
          size: 60,
          delay: 0,
          duration: 18,
        },
        {
          left: '65%',
          size: 20,
          delay: 0,
          duration: 8,
        },
        {
          left: '75%',
          size: 110,
          delay: 3,
          duration: 8,
        },
        {
          left: '35%',
          size: 150,
          delay: 7,
          duration: 15,
        },
        {
          left: '50%',
          size: 25,
          delay: 15,
          duration: 45,
        },
        {
          left: '20%',
          size: 15,
          delay: 2,
          duration: 35,
        },
        {
          left: '85%',
          size: 150,
          delay: 0,
          duration: 11,
        },
        {
          left: '25%',
          size: 120,
          delay: 18,
          duration: 17,
        },
        {
          left: '35%',
          size: 80,
          delay: 18,
          duration: 6,
        },
        {
          left: '45%',
          size: 150,
          delay: 10,
          duration: 25,
        },
      ]
  )
</script>

<template>
  <div
      class="area"
      :style="{
        backgroundColor: mainColor
      }"
  >
    <ul class="circles">
      <li
          v-for="item in circleList"
          :style="{
            left: item.left,
            width: item.size + 'px',
            height: item.size + 'px',
            'animation-delay': item.delay + 's',
            'animation-duration': item.duration + 's',
          }"
      >
        <span></span>
      </li>
    </ul>
  </div >
</template>

<style scoped>
.area{
  /*background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);*/
  width: 100%;
  height: 100%;
}

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 24s linear infinite;
  bottom: -150px;
}

@keyframes animate {
  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 10%;
  }

  50%{
    transform: translateY(-400px) rotate(360deg);
    border-radius: 50%;
  }

  100%{
    transform: translateY(-1000px) rotate(7200deg);
    opacity: 0;
    border-radius: 50%;
  }

}
</style>