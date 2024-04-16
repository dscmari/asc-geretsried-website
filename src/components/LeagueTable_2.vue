<template>
    <div class="h-[460px]">
        <div class="h-full flex items-center flex-col border border-grey-500" id="bfv1713089993516">
            <p class="mt-12 p-4">Um die Tabelle anzuzeigen, ist es notwendig Cookies von einem Drittanbieter (Baytischer Fussball-Verband) einzubinden.</p>
            <button class="p-4 underline text-lg" v-on:click="scrollToBottom()">Gehe zu Datenschutzeinstellungen</button>
        </div>
    </div>
</template>

<script>
import { ScrollToBottomMixin } from '../mixins/ScrollToBottomMixin';

export default{
    mixins: [ScrollToBottomMixin],

    mounted(){
        const cookiesAllowed = localStorage.getItem('cookiesAllowed');
        if(cookiesAllowed === 'true'){
            BFVWidget.HTML5.zeigeWettbewerbsTabelle("02NO6NQIQG000006VS5489B4VSMU21R6-G", "bfv1713089993516", 
        { 
            height: "100%",  
            width: "100%" , 
            teamPermanentId: "02IDHF83IG000000VS5489B2VU2I8R4H", 
            colorResults: "undefined" , 
            colorNav: "undefined" , 
            colorClubName : "#002166" , 
            backgroundNav: "undefined"});
        }
    }
}
</script>