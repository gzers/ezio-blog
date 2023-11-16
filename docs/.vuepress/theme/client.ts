import { defineClientConfig } from '@vuepress/client'
import pinia from '@/stores/store'
import { init } from "@/utils/init";
import Layout from '@/layouts/Layout.vue'
import NotFound from '@/layouts/NotFound.vue'
import Varlet from '@varlet/ui'
import '@vuepress/plugin-palette/style'
import '@varlet/ui/es/style.css'
import '@varlet/ui/es/styles/elevation.css'
import '@varlet/touch-emulator'
import '@/styles/index.scss'

export default defineClientConfig({
    enhance({ app, router, siteData }){
        // @ts-ignore
        app.use(pinia).use(Varlet)
        app.mixin({
            mounted() {
                init()
            },
        })
    },
    setup() {
    },
    rootComponents: [],
    layouts: {
        Layout,
        NotFound,
    },
})

