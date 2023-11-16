<script setup lang="ts">
import {computed} from "vue";

const iconButtonProps = defineProps({
    url: {
        type: String,
    },
    color: {
        type: String,
        default: 'var(--c-bg-light)'
    },
    round: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: '20px'
    },
    description: {
        type: String || null,
        default: null
    }
})

const iconButtonStyle = computed(() => ({
    width: iconButtonProps.size,
    height: iconButtonProps.size,
    backgroundColor: iconButtonProps.color,
    borderRadius: iconButtonProps.round ? '50%' : '0'
}))

const iconStyle = computed(() => ({
    backgroundImage: `url('${iconButtonProps.url}')`
}))

const iconClickEmits = defineEmits(['IBClick'])
const handleClickIconButton = () => {
    iconClickEmits('IBClick')
}
</script>

<template>
    <var-tooltip :content="iconButtonProps.description">
        <div
                class="icon-button-container"
                :style="iconButtonStyle"
                v-ripple="{ color: 'var(--color-primary)' }"
                @click="handleClickIconButton"
        >
            <i
                    class="icon"
                    :style="iconStyle"
            />
        </div>
    </var-tooltip>
</template>

<style scoped lang="scss">
.icon-button-container{
  padding: 4px;
  display: flex;
  cursor: pointer;
  transition: opacity .2s;
  &:hover{
    opacity: .7;
  }
  .icon{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>