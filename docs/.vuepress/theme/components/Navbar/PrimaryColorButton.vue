<script setup lang="ts">
import {computed} from "vue";
import {useThemeStore} from "@/stores/theme";

const themeStore = useThemeStore()

const primaryColorList = computed(() => {
  return __CUSTOM_THEME__.primaryColor
})

const nowPrimaryColor = computed(() => {
  const { primaryColor } = useThemeStore()
  return primaryColor
})

const handleChangePrimaryColor = () => {
  const index = themeStore.themeSelected
  themeStore.changeTheme(index === __CUSTOM_THEME__.primaryColor.length - 1 ? 0 : index + 1)
}
</script>

<template>
  <div class="primary-color-button">
    <div
        class="primary-color"
        :style="{
            backgroundColor: nowPrimaryColor
        }"
        @click="handleChangePrimaryColor"
    >
    </div>
  </div>
</template>

<style scoped lang="scss">
.primary-color-button{
  display: flex;
  align-items: center;
  margin-left: 16px;
  padding: 0 6px;
  height: 100%;
  .primary-color{
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>