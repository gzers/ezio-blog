<script setup lang="ts">
import {computed} from "vue";
import {usePageFrontmatter} from "@vuepress/client";

const frontMatter = usePageFrontmatter()

const footer = computed(() => {
  return frontMatter.value.footer
})
const footerLink = computed(() => {
  return frontMatter.value.footerLink
})
</script>

<template>
  <div>
    <var-divider />
    <div class="footer-content">
      <a :href="footerLink" target="_blank">
        {{ footer }}
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-content{
  display: flex;
  justify-content: center;
}
</style>
