import type { NavbarConfig } from '@vuepress/theme-default'

export const home = {
    link: '/'
}

export const navbarZh: NavbarConfig = [
    {
        text: '首页',
        link: home.link,
    },
    {

        text: '文章列表',
        link: '/zh/articles/README.md',
        activeMatch: '/zh/articles'
    },
    {
        text: '关于',
        link: '/zh/about/README.md',
        activeMatch: '/zh/about'
    },
]
