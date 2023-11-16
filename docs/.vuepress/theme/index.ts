import type { Theme } from '@vuepress/core'
import { path } from '@vuepress/utils'
import { defaultTheme, type DefaultThemeOptions } from '@vuepress/theme-default'
import { palettePlugin } from '@vuepress/plugin-palette'
import { themeType } from "./types/theme"
import { customThemeDefault } from "./utils/customThemeDefault"
import { readingTimePlugin } from "vuepress-plugin-reading-time2"
import { searchProPlugin } from "vuepress-plugin-search-pro"
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

interface GuoZhiThemeOptions extends DefaultThemeOptions {
    customTheme?: themeType
}

export const GuoZhiTheme = (options: GuoZhiThemeOptions): Theme => {
    return {
        name: 'vuepress-theme-faq',
        define: {
            __CUSTOM_THEME__: options.customTheme || customThemeDefault,
            __LOGO__: '/images/logo.png'
        },
        // 继承默认主题
        // @ts-ignore
        extends: defaultTheme(options),

        // 主题的客户端配置文件的路径
        clientConfigFile: path.resolve(__dirname, 'client.ts'),

        plugins: [
// @ts-ignore
            palettePlugin({
                preset: 'sass'
            }),
            readingTimePlugin({
                // your options
            }),
            searchProPlugin({
                locales: {
                    '/': {
                        placeholder: '搜索',
                    },
                },
                customFields: [
                    {
                        // @ts-ignore
                        getter: (page) => page.frontmatter.author,
                        formatter: "作者：$content",
                    },
                    {
                        // @ts-ignore
                        getter: (page) => page.frontmatter.category,
                        formatter: {
                            "/": "Category: $content",
                            "/zh/": "分类：$content",
                        },
                    },
                    {
                        // @ts-ignore
                        getter: (page) => page.frontmatter.tag,
                        formatter: {
                            "/": "Tag: $content",
                            "/zh/": "标签：$content",
                        },
                    },
                ],
            }),
            mdEnhancePlugin({
            }),
        ],

        alias: {
            '@theme/Home.vue': path.resolve(__dirname, './components/Home/Home.tsx'),
            '@theme/Navbar.vue': path.resolve(__dirname, './components/Navbar/Navbar.vue'),
        },
    }
}
