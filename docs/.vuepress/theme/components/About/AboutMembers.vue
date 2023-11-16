<script setup lang="ts">
import {computed} from "vue";
import {isArray} from "@vuepress/shared";
import {usePageFrontmatter} from "@vuepress/client";

const frontMatter = usePageFrontmatter()

const members = computed(() => {
  if (!isArray(frontMatter.value.members)) {
    return []
  }

  return frontMatter.value.members.map(({
                                          name,
                                          avatar,
                                          station,
                                          stationColor,
                                          stationTextColor,
                                          description = null,
                                          phone = null,
                                          score = 5,
                                        }) => ({
    name,
    avatar,
    station,
    stationColor: stationColor ? '#' + stationColor : 'var(--c-brand)',
    stationTextColor: stationTextColor ? '#' + stationTextColor : '#FFF',
    description,
    phone,
    score,
  }))
})

const handleClickPerson = (item) => {}
</script>


<template>
  <div class="about-members-container">
    <var-row :gutter="16">
      <var-col
          v-for="(item, index) in members"
          :key="index"
          :xs="{ span: 24 }"
          :sm="{ span: 12 }"
          :md="{ span: 12 }"
          :lg="{ span: 12 }"
          :xl="{ span: 12 }"
      >
        <var-card
            class="item"
            :src="item.avatar"
            layout="row"
            v-ripple="{ color: 'var(--color-primary)' }"
            @click="handleClickPerson(item)"
        >
          <template #title>
            <div class="item-part-container item-title-part-container">
              <span>{{ item.name }}</span>
              <var-chip
                  size="small"
                  :color="item.stationColor"
                  :text-color="item.stationTextColor"
              >{{ item.station }}</var-chip>
            </div>
          </template>
          <template #subtitle>
            <div class="item-part-container item-subtitle-part-container">
              <p>
                联系方式：
                <span>{{ item.phone }}</span>
              </p>
            </div>
          </template>
          <template #description>
            <div class="item-part-container">
              <p>
                {{ item.description }}
              </p>
              <div>
                <var-rate
                    v-model="item.score"
                    readonly
                />
              </div>
            </div>
          </template>
        </var-card>
      </var-col>
    </var-row>
  </div>
</template>

<style scoped lang="scss">
.about-members-container{
  max-width: 980px;
  margin: 24px auto 0 auto;
  padding: 0 24px;
  .item{
    margin: 16px 0;
    .item-part-container{
      margin-left: 16px;
    }
    .item-title-part-container{
      margin-top: 16px;
      display: flex;
      align-items: center;
      &>*{
        margin-right: 16px;
      }
    }
    .item-subtitle-part-container{
      font-size: .9rem;
    }
  }
}
</style>