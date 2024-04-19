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

<script setup>
import { ref, onMounted } from 'vue';
import CookieBanner from '../CookieBanner.vue';

const showCookieBanner = ref(false);

const props = defineProps({
    widgetGamesConfig: Object
});

const checkAndShowWidget = () => {
    const cookiesAllowed = localStorage.getItem('cookiesAllowed');
    if (cookiesAllowed === 'true') {
        BFVWidget.HTML5.zeigeMannschaftKomplett(props.widgetGamesConfig.teamId, props.widgetGamesConfig.widgetId, { height: "100%", width: "100%", selectedTab: BFVWidget.HTML5.mannschaftTabs.spiele, colorResults: "undefined", colorNav: "undefined", colorClubName: "#002166", backgroundNav: "undefined" });
    }
};

const displayCookieBanner = () => {
    showCookieBanner.value = true
};

onMounted(checkAndShowWidget);
</script>
