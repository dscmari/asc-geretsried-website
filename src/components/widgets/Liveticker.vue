<template>
    <div class="h-screen">
        <div class="h-full flex items-center flex-col border border-grey-500" id="bfv1713090614892">
            <p class="mt-12 p-4">Um den Liveticker anzuzeigen, ist es notwendig Cookies von einem Drittanbieter (Bayrischer Fussball-Verband) einzubinden.</p>
            <button class="p-4 underline text-lg" v-on:click="displayCookieBanner">Gehe zu Datenschutzeinstellungen</button>
        </div>
        <div v-if="showCookieBanner">
            <CookieBanner/>
        </div>
    </div>
</template>

<script>
import CookieBanner from '../CookieBanner.vue';

export default{
    components:{
        CookieBanner
    },
    data(){
        return{
            showCookieBanner: false
        }
    },
    methods:{
        checkAndShowWidget(){
            const cookiesAllowed = localStorage.getItem('cookiesAllowed');
            if (cookiesAllowed === 'true') {
                BFVWidget.HTML5.zeigeMannschaftsLiveticker(
                    "01S7PPNEG8000000VS548984VTJ68QLL",
                    "01S9OK0ABK000000VS548984VTL2SVNK",
                    "bfv1713090614892",
                    {
                        height: "100%",
                        width: "100%",
                        colorResults: "undefined",
                        colorNav: "undefined",
                        colorClubName: "undefined",
                        backgroundNav: "undefined"
                    }
                );
            }
        },
        displayCookieBanner(){
            this.showCookieBanner = true
        }

    },
    mounted(){
        this.checkAndShowWidget()
    }
}
</script>
