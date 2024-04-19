<template>
    <div class="h-[460px]">
        <div class="h-full flex items-center flex-col border border-grey-500" id="bfv1713368241959">
            <p class="mt-12 p-4">Um die Tabelle anzuzeigen, ist es notwendig Cookies von einem Drittanbieter (Bayrischer Fussball-Verband) einzubinden.</p>
            <button class="p-4 underline text-lg" v-on:click="displayCookieBanner()">Gehe zu Datenschutzeinstellungen</button>
        </div>
        <div v-if="showCookieBanner">
            <CookieBanner/>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CookieBanner from '../CookieBanner.vue';

const showCookieBanner = ref(false)

function displayCookieBanner(){
    showCookieBanner.value = true
}

function showAndCheckWidget(){
    const cookiesAllowed = localStorage.getItem('cookiesAllowed');
        if(cookiesAllowed === 'true'){
            BFVWidget.HTML5.zeigeMannschaftKomplett("021S4HAIE4000000VS548985VT98051J", "bfv1713368241959", { height: "100%", width: "100%", selectedTab:BFVWidget.HTML5.mannschaftTabs.wettbewerbTabelle, colorResults: "undefined" , colorNav: "undefined" , colorClubName : "#002166" , backgroundNav: "undefined"});
        }
}

onMounted(showAndCheckWidget)
</script>