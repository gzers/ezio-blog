<script setup lang="ts">
import {computed} from "vue";
import {usePageFrontmatter} from "@vuepress/client";
import Footer from "@/components/Footer/Footer.vue";
import AboutContact from "@/components/About/AboutContact.vue";
import AboutContent from "@/components/About/AboutContent.vue";

const frontMatter = usePageFrontmatter()

const members = computed(() => {
  return frontMatter.value.members || []
})

</script>

<template>
  <main class="about-main">
    <div class="about-content-container">
      <div class="theme-default-content">
        <AboutContent/>
        <AboutContact/>
      </div>
    </div>
    <Footer/>
  </main>
</template>

<style scoped lang="scss">
.about-main{
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--navbar-height));
  padding-top: var(--navbar-height);
  .about-content-container{
    flex: 1
  }
}
</style>