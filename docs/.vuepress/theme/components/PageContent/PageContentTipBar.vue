<script setup lang="ts">
import ReadingTime from "@/components/PageContent/ReadingTime.vue";
import ShareButton from "@/components/PageContent/ShareButton.vue";
</script>

<template>
    <div class="page-content-tip-bar-container">
        <div class="page-content-tip-bar-row">
            <ReadingTime/>
        </div>
    </div>
</template>


<style scoped lang="scss">
.page-content-tip-bar-container{
  margin-top: 1rem;
  .page-content-tip-bar-row{
    display: flex;
    justify-content: space-between;
  }
}
</style>
