<script setup lang="ts">
import {computed, ref} from "vue";
import {isArray} from "@vuepress/shared";
import {usePageFrontmatter} from "@vuepress/client";

const frontMatter = usePageFrontmatter()

const hoverIndex = ref(-1)

const actions = computed(() => {
  if (!isArray(frontMatter.value.actions)) {
    return []
  }

  return frontMatter.value.actions.map(({
                                          text,
                                          description,
                                          link,
                                          icon = null,
                                          iconColor = null,
  }) => ({
    text,
    description,
    link,
    icon,
    iconColor
  }))
})

const handleMouseOver = (index) => {
  hoverIndex.value = index;
}
const handleMouseLeave = (index) => {
  hoverIndex.value = -1;
}

</script>

<template>
  <div class="container">
    <var-row :gutter="16">
      <var-col
          v-for="(action, index) in actions"
          :key="index"
          :xs="{ span: 24 }"
          :sm="{ span: 12 }"
          :md="{ span: 8 }"
          :lg="{ span: 8 }"
          :xl="{ span: 8 }"
      >
        <RouterLink
            class="item-container"
            :to="action.link"
        >
          <div
              :class="['item', 'var-elevation--1', index === hoverIndex ? 'item-hover' : null]"
              v-ripple="{ color: 'var(--color-primary)' }"
              @mouseover="handleMouseOver(index)"
              @mouseleave="handleMouseLeave(index)"
          >
            <div class="item-animation-background"></div>
            <div class="item-title">
              <var-icon
                  v-if="action.icon"
                  :name="action.icon"
                  :color="`#${action.iconColor}`" />
              <span>{{ action.text }}</span>
            </div>
            <div class="item-description">
              <span>{{ action.description }}</span>
            </div>
          </div>
        </RouterLink>
      </var-col>
    </var-row>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 980px;
  margin: 48px auto 0 auto;
  padding: 0 24px;
  .item-container{
    width: 100%;
    .item{
      position: relative;
      margin: 16px 0;
      padding: 16px;
      width: 100%;
      background: var(--card-background);
      color: var(--c-text);
      border-radius: 4px;
      overflow: hidden;
      transition: all .2s linear;
      .item-title{
        display: flex;
        align-items: center;
        i{
          margin-right: 16px;
        }
        span{
          font-size: 1.4rem;
          z-index: 1;
        }
      }
      .item-description{
        margin-top: 16px;
        display: flex;
        span{
          z-index: 1;
        }
      }
      .item-animation-background{
      }
    }
  }
}
</style>