<template>
    <div class="h-[600px]">
        <div class="h-full flex items-center flex-col border border-grey-500" :id="widgetGamesConfig.widgetId">
            <p class="mt-12 p-4">Um die kommenden Spiele anzuzeigen, ist es notwendig Cookies von einem Drittanbieter (Bayrischer Fussball-Verband) einzubinden.</p>
            <button class="p-4 underline text-lg" v-on:click="displayCookieBanner()">Datenschutzeinstellungen anzeigen</button>
        </div>  
        <div v-if="showCookieBanner">
            <CookieBanner/>
        </div>
    </div>
</template>

<script>
import CookieBanner from '../CookieBanner.vue';

export default {
    components: {
        CookieBanner
    },
    props: {
        widgetGamesConfig: Object
    },
    data() {
        return {
            showCookieBanner: false
        };
    },
    methods: {
        checkAndShowWidget() {
            const cookiesAllowed = localStorage.getItem('cookiesAllowed');
            if (cookiesAllowed === 'true') {
                BFVWidget.HTML5.zeigeMannschaftKomplett(this.widgetGamesConfig.teamId, this.widgetGamesConfig.widgetId, { 
                    height: "100%", 
                    width: "100%", 
                    selectedTab: BFVWidget.HTML5.mannschaftTabs.spiele, 
                    colorResults: "undefined", 
                    colorNav: "undefined", 
                    colorClubName: "#002166", 
                    backgroundNav: "undefined" 
                });
            }
        },
        displayCookieBanner() {
            this.showCookieBanner = true;
        }
    },
    mounted() {
        this.checkAndShowWidget();
    }
};
</script>

