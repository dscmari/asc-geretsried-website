<template>
    <div class="border border-t-2 text-center mt-12">
        <div v-if="showCookieBanner">
            <CookieBanner v-on:cookieAccepted="hideCookieBanner"/>
        </div>
        <button v-on:click="displayCookieBanner()" class="m-0 p-4 text-base underline" id="adapt-cookie-setting">Datenschutzeinstellungen anpassen</button>
        <div class="m-2 flex flex-col lg:flex-row items-center lg:justify-center lg:gap-4">
            <ul class="text-sm lg:text-base flex lg:gap-4">
                <li><router-link to="/geschichte">Geschichte</router-link></li>
                <li><router-link to="/mitglied-werden">Mitglied werden</router-link></li>
            </ul>
            <ul class="text-sm lg:text-base flex lg:gap-4">
                <li><router-link to="/impressum">Impressum</router-link></li>
                <li><router-link to="/datenschutzerklaerung">Datenschutzerklärung</router-link></li>
            </ul>
        </div>        
        <p class="text-sm lg:text-base mt-4">Du findest uns auch auf Social Media</p>
        <div class="flex items-center justify-center">
            <a href="https://www.instagram.com/ascgeretsried"><img class="h-8 m-4" src="/images/insta-icon.webp"
                    alt="Instagram Icon"></a>
            <a href="https://web.facebook.com/GeretsriederAdler"><img class="h-8 m-4" src="/images/fb-icon.png"
                    alt="Facebook Icon"></a>
        </div>
        <p class="p-4">@2024</p>
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

<style scoped>
li{
    padding: 5px;
}
</style>
