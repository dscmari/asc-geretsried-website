<template>
    <div class="m-4 h-[350px]">
        <div class="h-full flex items-center flex-col border border-grey" id="bfv1713087355092">
            <p class="mt-12 p-4">Um die Tabelle anzuzeigen, ist es notwendig Cookies von einem Drittanbieter (Baytischer Fussball-Verband) einzubinden.</p>
            <button class="p-4 underline text-lg" v-on:click="scrollToBottom()">Gehe zu Datenschutzeinstellungen</button>
        </div>
    </div>
</template>

<script>
import { ScrollToBottomMixin } from '../mixins/ScrollToBottomMixin';

export default {
  mixins: [ScrollToBottomMixin],

  mounted() {
    const cookiesAllowed = localStorage.getItem('cookiesAllowed');

    if(cookiesAllowed === 'true'){
        BFVWidget.HTML5.zeigeWettbewerbsTabelle("02NCFUG1VC000006VS5489B4VSM2QTLD-G", "bfv1713087355092", 
        { 
          height: "100%",  
          width: "100%" , 
          teamPermanentId: "01S9OK0ABK000000VS548984VTL2SVNK", 
          colorResults: "undefined" , 
          colorNav: "" , 
          colorClubName : "#002166" , 
          backgroundNav: ""
        });
    }
  }
}

</script>