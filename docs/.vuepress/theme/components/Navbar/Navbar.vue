<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import ToggleSidebarButton from '@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue';
import NavbarBrand from '@vuepress/theme-default/lib/client/components/NavbarBrand.vue';
import NavbarItems from '@vuepress/theme-default/lib/client/components/NavbarItems.vue';
import ToggleColorModeButton from '@vuepress/theme-default/lib/client/components/ToggleColorModeButton.vue';
import { useThemeStore } from '@/stores/theme'
// @ts-ignore
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client'
import PrimaryColorButton from "@/components/Navbar/PrimaryColorButton.vue";
import {usePageFrontmatter} from "@vuepress/client";
import { DefaultThemePageFrontmatter } from "@vuepress/theme-default/lib/shared";

defineEmits(['toggle-sidebar'])

const themeLocale = useThemeLocaleData()
const frontMatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const navbar = ref<HTMLElement | null>(null)
const navbarBrand = ref<HTMLElement | null>(null)

const navbarStyle = computed(() => {
  const { isDarkMode, primaryColor } = useThemeStore()
  if (primaryColor) {
    const style = {
      background: !!frontMatter.value.home ?
          'rgba(34,39,46,.4)' :
          hexToRgba(primaryColor, .7, -140),
      backdropFilter: 'blur(8px)'
    }
    return isDarkMode ?
        style :
        {
          ...style,
          background: !!frontMatter.value.home ?
              'rgba(255,255,255,.6)' :
              hexToRgba(primaryColor, .7, 140)
        }
  }
  return null
})

const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  }
})

// avoid overlapping of long title and long navbar links
onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 719
  const navbarHorizontalPadding =
      getCssValue(navbar.value, 'paddingLeft') +
      getCssValue(navbar.value, 'paddingRight')
  const handleLinksWrapWidth = (): void => {
    // console.log(navbar.value)
    if (window.innerWidth < MOBILE_DESKTOP_BREAKPOINT) {
      linksWrapperMaxWidth.value = 0
    } else {
      linksWrapperMaxWidth.value =
          navbar.value!.offsetWidth -
          navbarHorizontalPadding -
          (navbarBrand.value?.offsetWidth || 0)
    }
  }
  handleLinksWrapWidth()
  window.addEventListener('resize', handleLinksWrapWidth, false)
  window.addEventListener('orientationchange', handleLinksWrapWidth, false)
})

function hexToRgba(hex, opacity, amt?) {
  const getColorValue = (colorStart) => {
    const colorItem = parseInt(result[colorStart], 16)
    return amt ? colorItem + amt : colorItem
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const r = getColorValue(1)
  const g = getColorValue(2)
  const b = getColorValue(3)
  return 'rgba(' +
      r +
      ',' +
      g +
      ',' +
      b +
      ',' +
      opacity +
      ')';
}

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
      property
      ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}

</script>

<template>
  <header
      ref="navbar"
      class="navbar"
      :style="navbarStyle"
  >
    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />

    <span ref="navbarBrand">
      <NavbarBrand />
    </span>

    <div class="navbar-items-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <NavbarItems class="can-hide" />
      <slot name="after" />
      <div
          class="search-container"
      >
        <NavbarSearch />
      </div>
      <ToggleColorModeButton v-if="themeLocale.colorModeSwitch" />
      <PrimaryColorButton/>
    </div>
  </header>
</template>

<style lang="scss">

</style>
