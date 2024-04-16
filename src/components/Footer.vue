<template>
    <div class="border border-t-2 text-center mt-12">
        <div v-if="showCookieBanner">
            <CookieBanner v-on:cookieAccepted="hideCookieBanner"/>
        </div>
        <div class="flex flex-col gap-1 lg:flex-row lg:gap-4 lg:justify-center m-4">
            <button v-on:click="displayCookieBanner()" class="m-0 p-0 text-lg underline" id="adapt-cookie-setting">Datenschutzeinstellungen anpassen</button>
            <RouterLink to="/impressum" class="text-lg underline">Impressum</RouterLink>
            <RouterLink to="/datenschutzerklaerung" class="text-lg underline">Datenschutzerklärung</RouterLink>
        </div>        
        <p>Du findest uns auch auf Social Media</p>
        <div class="flex items-center justify-center">
            <a href="https://www.instagram.com/ascgeretsried"><img class="h-8 m-4" src="/images/insta-icon.webp"
                    alt="Instagram Icon"></a>
            <a href="https://web.facebook.com/GeretsriederAdler"><img class="h-8 m-4" src="/images/fb-icon.png"
                    alt="Facebook Icon"></a>
        </div>
        <p>@2024</p>
    </div>
</template>

<script setup>
import CookieBanner from './CookieBanner.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let showCookieBanner = ref(true)
const allowCookiesExists = localStorage.getItem('cookiesAllowed') !== null;

if(allowCookiesExists){
    showCookieBanner.value = false
}
function displayCookieBanner() {
    showCookieBanner.value = true;
}
function hideCookieBanner() {
    showCookieBanner.value = false
}
</script>
