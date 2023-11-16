import {computed, defineComponent, h} from "vue";
import {
    usePageFrontmatter,
    withBase,
} from "@vuepress/client";
import { DefaultThemeHomePageFrontmatter } from "@vuepress/theme-default/lib/shared";
import { useThemeStore } from "@/stores/theme";

export default defineComponent({
    setup() {
        const frontMatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
        const { isDarkMode } = useThemeStore()

        const heroImage = computed(() => {
            if (isDarkMode && frontMatter.value.heroImageDark !== undefined) {
                return frontMatter.value.heroImageDark
            }
            return frontMatter.value.heroImage
        })

        const heroAlt = computed(
            () => frontMatter.value.heroAlt || frontMatter.value || 'hero'
        )

        const heroHeight = computed(() => frontMatter.value.heroHeight || 80)
        const img = h('img', {
            src: withBase(heroImage.value),
            alt: heroAlt.value,
            height: heroHeight.value,
            style: {
                flexShrink: 0,
                zIndex: 2
            }
        })

        if (frontMatter.value.heroImageDark === undefined) {
            return () => img
        }
        return () => img
    }
})