<script setup lang="ts">
import { usePageData } from "@vuepress/client"
import { computed } from "vue";

const readingTimeInfo = computed(() => {
  // @ts-ignore
  const { minutes, words } = usePageData().value.readingTime
  return {
    time:
        minutes < 1
            ? // 小于一分钟有一个特殊的提示
            '小于1分钟'
            : `${Math.round(minutes).toString()}分钟`,
    words: `${words}字`,
  };
})
</script>

<template>
  <div class="reading-time-container">
    <span>预计阅读时间：{{ readingTimeInfo.time }}</span>
    <span>字数：{{readingTimeInfo.words }}</span>
  </div>
</template>

<style scoped lang="scss">
.reading-time-container{
  &>span{
    margin-right: 12px;
    color: var(--c-text-lightest);
    font-size: 12px;
  }
}
</style>