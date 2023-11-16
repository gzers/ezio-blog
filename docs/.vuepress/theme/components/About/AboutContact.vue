<script setup lang="ts">
import AboutMembers from "@/components/About/AboutMembers.vue";

</script>


<template>
  <div class="about-contact-container">
    <div class="about-contact-title">
      <var-icon
          name="phone"
          color="var(--c-brand)"
      />
      <span> 联系我们 </span>
    </div>
    <AboutMembers/>
  </div>
</template>

<style scoped lang="scss">
.about-contact-container{
  margin: 32px 0;
  .about-contact-title{
    max-width: 980px;
    padding: 0 24px;
    height: 32px;
    margin: auto;
    display: flex;
    align-items: center;
    &>i{
      font-size: 1.65rem;
      margin-right: 8px;
    }
    &>span{
      font-size: 1.65rem;
      font-weight: bold;
    }
  }
}
</style>