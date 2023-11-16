<script setup lang="ts">
import { ref, toRefs, defineProps, computed, onMounted, onUnmounted } from 'vue';
import HomeBannerBackgroundAnimation from "@/components/Home/HomeBannerBackgroundAnimation.vue";

  const props = defineProps({
    imagesData: Array,
  })
  const { imagesData } = toRefs(props);

  const activeIndex = ref(0)

  const backgroundImage = computed(() => {
  })

  let timer = null

  onMounted(() => {
    const length = imagesData.value.length
    if (length > 1) {
      const timer = setInterval(() => {
        activeIndex.value = setIndex(length, activeIndex.value)
      }, 10000)
    }

    onUnmounted(() => {
      const length = imagesData.value.length
      if (length > 1) {
        clearInterval(timer)
      }
    })
  })

  const setIndex = (imagesDataLength, index) => {
    if(index + 1 < imagesDataLength) {
      return index + 1
    } else {
      return  0
    }
  }

</script>

<template>
  <div class="home-banner-background-container">
    <div
        v-if="imagesData.length > 0"
        v-for="(item, index) in imagesData"
        :class="[
            'home-banner-background',
             index === activeIndex ? 'home-banner-background-active' : null
            ]"
        :style="`background-image: url(${item})`"
    />
    <HomeBannerBackgroundAnimation v-if="imagesData.length === 0"/>
  </div>
</template>



<style scoped lang="scss">
.home-banner-background-container{
  position: relative;
  width: 100vw;
  height: 400px;
  background-color: rgba(0,0,0,.9);
  overflow: hidden;
  .home-banner-background{
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat:no-repeat;
    animation-duration: 3s;
    opacity: 0;
    transition: opacity 5s linear;
    &:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0, 0.1);
    }
  }
  .home-banner-background-active{
    opacity: 1;
  }
}
</style>