import { HeadConfig } from "@vuepress/shared";

export const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            href: '/images/logo.png'
        }
    ],
    ['meta', { name: 'application-name', content: 'faq-vuepress' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'faq-vuepress' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, minimal-ui' }],
    ['meta', { name: 'format-detection', content: 'telephone=no, email=no' }],
    ['meta', { name: 'msapplication-tap-highlight', content: 'no' }],
]