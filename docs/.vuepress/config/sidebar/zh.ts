import type { SidebarConfig } from '@vuepress/theme-default'
import {getDocPath} from "../../utils/getDocPath";

export const sidebarZh: SidebarConfig = {
    '/zh/articles/': [
        // @ts-ignore
        getDocPath({
            title: '文章列表',
            collapsable: true,
            relativePath: '/zh/articles/'
        }),
    ],
    '/zh/about/': [
        // @ts-ignore
        getDocPath({
            title: '关于',
            collapsable: true,
            relativePath: '/zh/about/'
        }),
    ],
}
