<script setup lang="ts">
import HomeHeroImage from './HomeHeroImage'
import HomeSearch from "@/components/Home/HomeSearch.vue";
import { computed, h } from 'vue'
import {
  usePageFrontmatter,
  useSiteLocaleData, withBase,
} from "@vuepress/client";
import HomeBannerBackground from "@/components/Home/HomeBannerBackground.vue";
import HomeBannerWaves from "@/components/Home/HomeBannerWaves.vue";

const frontMatter = usePageFrontmatter()
const siteLocale = useSiteLocaleData()
const heroText = computed(() => {
  if (frontMatter.value.heroText === null) {
    return null
  }
  return frontMatter.value.heroText || siteLocale.value.title || 'Hello'
})
const tagline = computed(() => {
  if (frontMatter.value.tagline === null) {
    return null
  }
  return (
      frontMatter.value.tagline
  )
})
const bannerBackgroundList = computed(() => {
  const { bannerBackground } = frontMatter.value
  if (bannerBackground) {
    if (bannerBackground.indexOf(',') !== -1) {
      return bannerBackground.split(',').map(item => withBase(item))
    } else {
      return [withBase(bannerBackground)]
    }
  }
  return []
})
</script>

<template>
  <div>
    <div class="hero-banner-container">
      <HomeBannerBackground :imagesData="bannerBackgroundList"/>
      <div class="hero-banner-float-container">
        <div class="hero-banner-title-container">
          <div class="hero-image-container">
            <div class="hero-image-container-light"></div>
            <HomeHeroImage/>
          </div>
          <div class="hero-banner-title-text-container">
            <h1
                v-if="heroText"
                id="main-title">
              {{ heroText }}
            </h1>
            <p v-if="tagline">
              {{ tagline }}
            </p>
          </div>
        </div>
      </div>
      <HomeBannerWaves/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-banner-container{
  position: relative;
  height: 400px;
  .hero-banner-float-container{
    position: absolute;
    top: 6.4rem;
    left: 0;
    right: 0;
    padding: 0 1rem;
    .hero-banner-title-container{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 1rem 0;
      .hero-banner-title-text-container{
        margin-left: 1rem;
        &>h1, &>p{
          color: #fff;
          margin: 0;
        }
      }
      .hero-image-container{
        position: relative;
        display: flex;
        .hero-image-container-light{
          position: absolute;
          left: -40px;
          top: -40px;
          bottom: -40px;
          right: -40px;
          content: '';
          background: linear-gradient(-45deg, rgba(255,255,255,.7) 50%, rgba(255,255,255,.5) 50%);
          transition: background-color .2s;
          opacity: .8;
          filter: blur(45px);
          border-radius: 50%;
          animation: logo-wave 6s infinite linear;
        }
      }
    }
  }
}
@keyframes logo-wave {
  0% {
    transform: translate(8%,8%);
  }
  20% {
    transform: translate(-8%,8%);
  }
  40% {
    transform: translate(-8%,-8%);
  }
  60% {
    transform: translate(-2%,8%);
  }
  80% {
    transform: translate(8%,-8%);
  }
  100% {
    transform: translate(8%,8%);
  }
}
</style>
