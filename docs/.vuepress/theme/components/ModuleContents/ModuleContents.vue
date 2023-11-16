<script setup lang="ts">
import {computed} from "vue";
import {useSidebarItems} from "@vuepress/theme-default/lib/client/composables/index";
import {usePageFrontmatter} from "@vuepress/client";

const frontMatter = usePageFrontmatter()

const sideBarItems = computed(() => {
  const sidebarItems = useSidebarItems().value
    console.log(sidebarItems)
  if (sidebarItems.length > 0) {
    const list = sidebarItems[0].children
    if (list.length > 1) {
      return sidebarItems[0].children.slice(1, list.length)
    }
  }
  return []
})

const contentsTitle = computed(() => frontMatter.value.moduleContentsTitle)
</script>

<template>
  <main class="main">
    <div class="module-contents-container">
      <div class="contents-container">
        <div class="contents-title">
          <h1>{{ contentsTitle }}</h1>
        </div>
        <RouterLink
            v-for="(sideBarItem, index) in sideBarItems"
            :key="index"
            :to="sideBarItem.link"
        >
          <var-cell
              border
              border-offset="-8"
              v-ripple="{ color: 'var(--color-primary)' }"
          >{{ sideBarItem.text }}</var-cell>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main{
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--navbar-height));
  padding-top: var(--navbar-height);
  .module-contents-container{
    flex: 1;
    width: 100%;
    .contents-container{
      max-width: 980px;
      margin: auto;
      padding: 24px 32px;
      .contents-title{
        &>*{
          text-align: center;
        }
      }
    }
  }
}
</style>
