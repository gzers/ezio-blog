<script setup lang="ts">

import {computed, h, ref} from "vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import ShareCard from "@/components/ShareCard/ShareCard.vue";
import {usePageData, usePageFrontmatter} from "@vuepress/client";
import {DefaultThemePageFrontmatter} from "@vuepress/theme-default/lib/shared";

const shareWayList = ref([
    {
        name: '分享卡片',
        description: '获取分享二维码',
        icon: '/icons/share/card.svg',
        color: 'var(--c-brand)',
    },
    {
        name: '网页分享',
        description: '点此获取网页链接',
        icon: '/icons/share/link.svg',
        color: 'var(--c-brand)',
    },
    {
        name: '微信分享',
        description: '点此进行微信分享',
        icon: '/icons/share/wechat.svg',
        color: '#28C445',
    },
])

const handleIconButtonClick = (item) => {
    if (item.name === '分享卡片') {
        toggleShareCardActive()
    }
}

const nowPageInformation = computed(() => {
    const frontMatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
    const page = usePageData()
    return {
        title: page.value.title,
        // @ts-ignore
        tags: frontMatter.value.tag,
        url: typeof window !== 'undefined' ? window.location.href : '',
    }
})

const shareCardActive = ref(false)
const toggleShareCardActive = () => {
    shareCardActive.value = !shareCardActive.value
}

</script>

<template>
  <div class="share-button-container">
      <div class="share-button-out">
          <IconButton
                  :url="shareWayList[0].icon"
                  :color="shareWayList[0].color"
                  :description="shareWayList[0].description"
                  @i-b-click="() => handleIconButtonClick(shareWayList[0])"
                  round
          />
      </div>
      <ShareCard
              :is-active="shareCardActive"
              @toggle-active="toggleShareCardActive"
              :title="nowPageInformation.title"
              :tags="nowPageInformation.tags"
              :link="nowPageInformation.url"
      />
  </div>
</template>

<style scoped lang="scss">
.share-button-template{

}
.share-button-container{
  .share-button{
    @extend .share-button-template;
  }
}
</style>