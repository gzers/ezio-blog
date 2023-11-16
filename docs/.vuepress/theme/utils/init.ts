import { getAssignHtmlObserver, setThemeConfig } from "@/utils/themeSync";

export function init() {
    // 获取vuePress的darkMode，并存入pinia。
    getAssignHtmlObserver()
    setThemeConfig()
}
