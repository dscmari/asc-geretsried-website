<template>
    <div class="cookie-banner p-4 bg-ascBlue text-white opacity-90">
        <div v-if="!displayDetails">
            <h1 class="text-sm md:text-xl">Wir benötigen Ihre Zustimmung</h1>
            <p class="text-sm md:text-lg">Unsere Webseite nutzt Dienste Dritter (Bayrischer Fussball-Verband), um Ihnen ein besseres Angebot bieten zu können. Sie können uns die 
                Nutzung dieser Dienste erlauben oder nur notwendige Datenverarbeitungen akzeptieren. Ihre Einwilligung können Sie 
                jederzeit über Datenschutzeinstellungen anpassen unten auf der Webseite widerrufen.
                Klicken sie auf Details, um mehr Informationen zu erhalten.
            </p>
            <div class="flex justify-center">
                <button v-on:click="handleClick(true)">Cookies zustimmen</button>
                <button v-on:click="handleClick(false)">Cookies ablehnen</button>
                <button v-on:click="toggleDetails()">Details</button>
            </div>
        </div>
        <div v-else class="">
            <CookieDetails/>
            <button v-on:click="toggleDetails()">Zurück</button>
        </div>
    </div>  
</template>

<script setup>
import { defineEmits, ref } from 'vue';
import CookieDetails from './CookieDetails.vue';
const emit = defineEmits();

let displayDetails = ref(false)

function showBanner() {
    emit('cookieAccepted');
}

function setCookies(bool){
    if(bool) {
        localStorage.setItem('cookiesAllowed', 'true');
        window.location.reload();
    } 
    else {
        localStorage.setItem('cookiesAllowed', 'false');
        window.location.reload();
    }
}

function handleClick(bool){
    setCookies(bool)
    showBanner()
}

function toggleDetails(){
  displayDetails.value = !displayDetails.value
}
</script>

<style>
.cookie-banner {
    position: fixed;
    bottom: 0;
    max-width: 100%;
  }
@media screen and (min-width: 768px) {
  .cookie-banner {
    width: 90vw;
  }
}
button{
    padding: 2px 5px 2px 5px;
    margin: 10px;
    border: solid white 1px;
    font-size: 12px;
}
@media screen and (min-width: 768px) {
  button {
    padding: 1rem;
    margin: 1rem;
    border: solid white 1px;
    font-size: 1rem;
  }
}
</style>