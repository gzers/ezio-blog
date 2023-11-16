import {
    defineComponent,
} from 'vue';
import HomeBanner from "@/components/Home/HomeBanner.vue";
import HomeContent from "@/components/Home/HomeContent.vue";
import Footer from "@/components/Footer/Footer.vue";

export default defineComponent({
    setup() {
        return () => (
            <main style="display: flex; flex-direction: column; min-height:100vh; background: var(--c-bg-dark)">
                <div style="flex: 1">
                    <HomeBanner/>
                    <HomeContent/>
                </div>
                <Footer/>
            </main>
        )
    }
})