import { GuoZhiTheme } from "./theme";
// @ts-ignore
import { defineUserConfig } from "vuepress";
import viteConfig from "./theme/viteConfig";
import {
    head,
    sideLocalesZh,
    themeLocalesZh,
    home,
    navbarZh,
    sidebarZh
} from "./config/index";

export default defineUserConfig({
    ...viteConfig,
    head,
    port: 8991,
    locales: {
        '/': {
            ...sideLocalesZh
        }
    },
    theme: GuoZhiTheme({
        // @ts-ignore
        logo: '/images/logo.png',
        home: home.link,
        locales: {
            '/': {
                ...themeLocalesZh,
                navbar: navbarZh,
                sidebar: sidebarZh
            }
        },
    }),
})
