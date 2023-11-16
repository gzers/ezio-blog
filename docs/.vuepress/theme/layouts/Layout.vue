<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref  } from 'vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { useRouter } from 'vue-router'
import type { DefaultThemePageFrontmatter } from '@vuepress/theme-default/lib/shared/index'
import {
  useScrollPromise,
  useSidebarItems
} from '@vuepress/theme-default/lib/client/composables/index'
import {
  useThemeLocaleData,
  // @ts-ignore
} from '@vuepress/plugin-theme-data/client'

import Page from '@vuepress/theme-default/lib/client/components/Page.vue'
import Sidebar from '@vuepress/theme-default/lib/client/components/Sidebar.vue'
import Navbar from "@/components/Navbar/Navbar.vue";
import Home from "@/components/Home/Home";
import About from "@/components/About/About.vue";
import Loading from "@/components/Loading/Loading.vue";
import {useThemeStore} from "@/stores/theme";
import ModuleContents from "@/components/ModuleContents/ModuleContents.vue";
import PageContentTipBar from "@/components/PageContent/PageContentTipBar.vue";

const page = usePageData()
const frontMatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

// navbar
const shouldShowNavbar = computed(
    () => frontMatter.value.navbar !== false && themeLocale.value.navbar !== false
)

// sidebar
const sidebarItems = useSidebarItems()
const hasSidebarOpen = ref(false)
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  const toggleSidebarValue = typeof to === 'boolean' ? to : !isSidebarOpen.value
  if (toggleSidebarValue) {
    hasSidebarOpen.value = toggleSidebarValue
    setTimeout(() => {
      isSidebarOpen.value = toggleSidebarValue
    }, 100)
  } else {
    isSidebarOpen.value = toggleSidebarValue
    setTimeout(() => {
      hasSidebarOpen.value = toggleSidebarValue
    }, 100)
  }
}
const hasSidebar = computed(() => {
  const isSpecial =
      // @ts-ignore
      frontMatter.value.about ||
      // @ts-ignore
      frontMatter.value.moduleContents
  return hasSidebarOpen.value || !isSpecial
})

// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value,
  },
  frontMatter.value.pageClass,
])

// close sidebar after navigation
let unregisterRouterHook
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false)
  })
})
onUnmounted(() => {
  unregisterRouterHook()
})

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending

// 加载动画判断
const isLoading = computed(() => {
  const { primaryColor } = useThemeStore()
  return !primaryColor;
  // return true;
})

</script>

<template>
  <div>
    <Loading v-if="isLoading"/>
    <div
        class="theme-container"
        :class="containerClass"
    >
      <slot name="navbar">
        <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
          <template #before>
            <slot name="navbar-before" />
          </template>
          <template #after>
            <slot name="navbar-after" />
          </template>
        </Navbar>
      </slot>

      <div class="sidebar-mask" @click="toggleSidebar(false)" />

      <slot name="sidebar">
        <Sidebar v-show="hasSidebar">
          <template #top>
            <slot name="sidebar-top" />
          </template>
          <template #bottom>
            <slot name="sidebar-bottom" />
          </template>
        </Sidebar>
      </slot>

      <slot name="page">
        <Home v-if="frontMatter.home" />
        <About v-else-if="frontMatter.about" />
        <ModuleContents v-else-if="frontMatter.moduleContents" />

        <Transition
            v-else
            name="fade-slide-y"
            mode="out-in"
            @before-enter="onBeforeEnter"
            @before-leave="onBeforeLeave"
        >
          <Page :key="page.path">
            <template #top>
              <slot name="page-top" />
            </template>
            <template #content-top>
              <slot name="page-content-top" />
              <PageContentTipBar />
            </template>
            <template #content-bottom>
              <slot name="page-content-bottom" />
            </template>
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </Page>
        </Transition>
      </slot>
    </div>
  </div>
</template>
