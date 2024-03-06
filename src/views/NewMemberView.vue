<script setup>
import DownloadPdfButton from '../components/DownloadPDFButton.vue';
</script>


<template>
    <div class="lg:w-3/4 mx-auto lg:mt-16 text-center">
        <p>
            Wir bedanken uns herzlich bei all den engagierten Helfern, die uns nicht nur an Spieltagen, sondern auch darüber 
            hinaus tatkräftig unterstützen. Euer Einsatz trägt maßgeblich zum Erfolg unseres Vereins bei.
            Gemeinsam gestalten wir die Zukunft und freuen uns auf weitere gemeinsame Erfolge. Vielen herzlichen 
            Dank für eure wertvolle Mitarbeit!
        </p>
        <p>
            Du möchtest in einer tollen Gemeinschaft aktiv sein? Du hast Lust dich zu bewegen und Fußball zu spielen? Oder
            möchtest du einfach nur supporten und anfeuern?
            Bei uns bist du richtig!
        </p>
        <p>
            Hier findest du den elektronischen Aufnahmeantrag um Mitglied zu werden. Diesen kannst du ausfüllen und uns
            zukommen lassen und schon bist du dabei!
        </p>
        <div class="text-center">
            <download-pdf-button :pdf-url="pdfUrl" :pdf-file-name="pdfFileName" />
        </div>
        <p>
            Wir freuen uns auf dich!
        </p>
    </div>
</template>

<script>

export default {
    name: 'MyProject',
    components: {
        DownloadPdfButton
    },
    data() {
        return {
            pdfUrl: '/aufnahmeantragASC.pdf',
            pdfFileName: 'aufnahmeantragASC.pdf'
        };
    }
};
</script>

<style scoped>
p {
    font-size: 1.25rem
        /* 20px */
    ;
    line-height: 1.75rem
        /* 28px */
    ;
    padding: 1rem;
}
</style>