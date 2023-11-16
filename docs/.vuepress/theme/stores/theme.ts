// stores/theme.ts
import { defineStore } from 'pinia'
import { StyleProvider, Themes } from '@varlet/ui'

const getStyles = ({isDarkMode, themeSelected}) => {
    // @ts-ignore
    const primaryColor = __CUSTOM_THEME__.primaryColor[themeSelected]
    return {
        primaryColor,
        rootStyleVars: isDarkMode ? {
            ...Themes.dark,
            '--color-primary': primaryColor
        } : {
            '--color-primary': primaryColor
        }
    }
}

export const useThemeStore = defineStore('theme', {

    state: () => ({
        isDarkMode: <boolean> false,
        themeSelected: <number> 0,
        primaryColor: <string>'',
    }),

    actions: {
        changeThemeDefault() {
            if (this.primaryColor === '') {
                const styles = getStyles({
                    isDarkMode: this.isDarkMode,
                    themeSelected: this.themeSelected
                })
                this.primaryColor = styles.primaryColor
                StyleProvider(styles.rootStyleVars)
            }
        },
        changeDark(isDarkMode) {
            if (this.isDarkMode !== isDarkMode) {
                this.isDarkMode = isDarkMode
                const styles = getStyles({
                    isDarkMode: this.isDarkMode,
                    themeSelected: this.themeSelected
                })
                StyleProvider(styles.rootStyleVars)
            }
        },
        changeTheme(index: Number) {
            const styles = getStyles({
                isDarkMode: this.isDarkMode,
                themeSelected: index
            })
            this.primaryColor = styles.primaryColor
            StyleProvider(styles.rootStyleVars)
            this.themeSelected = index
            localStorage.setItem('faq-vuepress-theme-selected', JSON.stringify(index))
        }
    },
})
