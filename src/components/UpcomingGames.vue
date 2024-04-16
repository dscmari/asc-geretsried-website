<template>
    <div class="h-[600px]">
        <div class="h-full flex items-center flex-col border border-grey-500" id="bfv1713088327517">
            <p class="mt-12 p-4">Um die kommenden Spiele anzuzeigen, ist es notwendig Cookies von einem Drittanbieter (Baytischer Fussball-Verband) einzubinden.</p>
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
            BFVWidget.HTML5.zeigeVereinSpiele("01S7PPNEG8000000VS548984VTJ68QLL", "bfv1713088327517", 
            { 
                height: "100%", 
                width: "100%", 
                selectedTab: BFVWidget.HTML5.vereinTabs.spiele, 
                colorResults: "undefined" , 
                colorNav: "undefined" , 
                colorClubName : "#002166" , 
                backgroundNav: "undefined"
            });
        }
    }
}
</script>