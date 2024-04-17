<template>
    <div class="m-4 h-[350px]">
        <div class="h-full flex items-center flex-col border border-grey" :id="this.widgetTableConfig.widgetId">
            <p class="mt-12 p-4">Um die Tabelle anzuzeigen, ist es notwendig Cookies von einem Drittanbieter (Bayrischer Fussball-Verband) einzubinden.</p>
            <button class="p-4 underline text-lg" v-on:click="scrollToBottom()">Gehe zu Datenschutzeinstellungen</button>
        </div>
    </div>
</template>

<script>
import { ScrollToBottomMixin } from '../../mixins/ScrollToBottomMixin';

export default {
  mixins: [ScrollToBottomMixin],

  props: {
    widgetTableConfig: Object
  },

  mounted() {
    const cookiesAllowed = localStorage.getItem('cookiesAllowed');

    if(cookiesAllowed === 'true'){
        BFVWidget.HTML5.zeigeWettbewerbsTabelle(this.widgetTableConfig.tableId, this.widgetTableConfig.widgetId, 
        { 
          height: "100%",  
          width: "100%" , 
          teamPermanentId: this.widgetTableConfig.teamPermanentId, 
          colorResults: "undefined" , 
          colorNav: "" , 
          colorClubName : "#002166" , 
          backgroundNav: ""
        });
    }
  }
}

</script>