<script setup>
    import { RouterLink } from 'vue-router';
import Submenu from './Submenu.vue';
</script>

<template>
    <div class="w-full pt-4 sticky top-0 bg-white z-10">
        <div class="flex items-center justify-between">
            <div class="flex items-center p-2">
                <RouterLink to="/">
                    <img src="/images/logo.webp" alt="ASC Geretsried Logo Adler" class="m-2" :style="{ width: isMobileView ? '35px' : '50px'}">
                </RouterLink>
                <!-- TODO: adapt h1 color, seems to be to dark -->
                <h1 class="text-ascBlue text-lg lg:text-2xl lg:ml-4 ">
                    <RouterLink class="font-semibold" to="/">ASC Geretsried</RouterLink>
                </h1>
            </div>
            <div class="hidden lg:flex">
                <a class="p-4" href="https://www.instagram.com/Ascgeretsried"><img src="/images/insta-icon.webp"
                        style="width:30px; height:auto" alt="Instagram Icon"></a>
                <a class="p-4" href="https://web.facebook.com/GeretsriederAdler"><img src="/images/fb-icon.png"
                        style="width:30px; height:auto" alt="Facebook Icon"></a>
            </div>
            <div class="block lg:hidden p-4 mr-4">
                <div class="flex items-center border-black hover:text-grey hover:border-grey" >
                    <div
                        class="js-burgermenu w-9 h-7 relative  mx-auto transform rotate-0 transition ease-in-out duration-500 cursor-pointer" v-on:click="toggleMenu()">
                        <span
                            class="upper block absolute h-[3px] w-full bg-black rounded opacity-100 right-0 transform rotate-0 transition ease-in-out duration-250 top-0"></span>
                        <span
                            class="middle block absolute h-[3px] w-full bg-black rounded opacity-100 right-0 transform rotate-0 ease-in-out duration-250 top-3"></span>
                        <span
                            class="lower block absolute h-[3px] w-full bg-black rounded opacity-100 right-0 transform rotate-0 transition ease-in-out duration-250 top-6"></span>
                    </div>
                </div>
            </div>   
        </div>
        <div :style="{ width: isActive ? '75%' : '' }"
        class="fixed top-0 left-0 w-0 opacity-90 whitespace-nowrap transform overflow-x-hidden -translate-x-0 ease-in-out transition-all duration-300 
         lg:static lg:w-full lg:overflow-visible lg:opacity-100 z-40">
            <ul class="text-xl lg:text-lg xl:text-xl w-full lg:flex lg:justify-evenly text-white bg-ascBlue text-center zoomable ">
                <RouterLink
                    to="/"
                    class="router-link pt-8"
                    :class="{ 'active': activeNavItem === 'home', 'block': isMobileView, 'hidden': !isMobileView }"
                    v-on:click="toggleMenu()">Home
                </RouterLink>
                <RouterLink
                    to="/erste-mannschaft"
                    class="router-link p-4"
                    :class="{ 'active': activeNavItem === 'erste-mannschaft','block': isMobileView }"
                    v-on:click="toggleMenu()"
                    @mouseenter="submenuIsOpenTeam1 = true"
                    @mouseleave="submenuIsOpenTeam1 = false">1. Mannschaft
                </RouterLink>
                <RouterLink
                    to="/zweite-mannschaft"
                    class="router-link p-4"
                    :class="{ 'active': activeNavItem === 'zweite-mannschaft','block': isMobileView }"
                    v-on:click="toggleMenu()"
                    @mouseenter="submenuIsOpenTeam2 = true"
                    @mouseleave="submenuIsOpenTeam2 = false">2. Mannschaft
                </RouterLink>
                <RouterLink 
                    to="/futsal" 
                    class="router-link p-4"
                    :class="{ 'active': activeNavItem === 'futsal','block': isMobileView }" 
                    v-on:click="toggleMenu()">Futsal
                </RouterLink>
                <RouterLink 
                    to="/vorstandschaft" 
                    class="router-link p-4" 
                    :class="{ 'active': activeNavItem === 'board','block': isMobileView }" 
                    v-on:click="toggleMenu()">Vorstandschaft
                </RouterLink>
                <RouterLink 
                    to="/sponsoren" 
                    class="router-link p-4" 
                    :class="{ 'active': activeNavItem === 'sponsors','block': isMobileView }" 
                    v-on:click="toggleMenu()">Sponsoren
                </RouterLink>
                <RouterLink 
                    to="/geschichte" 
                    class="router-link p-4" 
                    :class="{ 'active': activeNavItem === 'history','block': isMobileView }" 
                    v-on:click="toggleMenu()">Geschichte
                </RouterLink>
                <RouterLink 
                    to="/mitglied-werden" 
                    class="router-link p-4" 
                    :class="{ 'active': activeNavItem === 'mitglied-werden','block': isMobileView }" 
                    v-on:click="toggleMenu()">Mitglied werden
                </RouterLink>
            </ul>
            <div v-if="!isMobileView" class="relative">
                <Submenu v-if="activeNavItem === 'erste-mannschaft'"
                :isOpen="submenuIsOpenTeam1"
                @close-submenu="closeSubmenu"
                @open-submenu="openSubmenu">
                    <RouterLink :to="{ name: 'erste-mannschaft', hash: '#league-1' }" class="p-4">Liga & Tabelle</RouterLink>
                    <RouterLink :to="{ name: 'erste-mannschaft', hash: '#team-1' }" class="p-4">Kader</RouterLink>
                    <RouterLink :to="{ name: 'erste-mannschaft', hash: '#training-1' }" class="p-4">Trainingszeiten</RouterLink>
                </Submenu>
                <Submenu v-if="activeNavItem === 'zweite-mannschaft'" 
                :isOpen="submenuIsOpenTeam2"
                @close-submenu="closeSubmenu"
                @open-submenu="openSubmenu">
                    <RouterLink :to="{ name: 'zweite-mannschaft', hash: '#league-2' }" class="p-4">Liga & Tabelle</RouterLink>
                    <RouterLink :to="{ name: 'zweite-mannschaft', hash: '#team-2' }" class="p-4">Kader</RouterLink>
                    <RouterLink :to="{ name: 'zweite-mannschaft', hash: '#training-2' }" class="p-4">Trainingszeiten</RouterLink>   
                </Submenu>
            </div>  
        </div>
    </div>
</template>

<script>
export default {
    components:{
        Submenu
    },
    data() {
        return {
            isActive: false,
            isMobileView: false,
            submenuIsOpenTeam1: false,
            submenuIsOpenTeam2: false,
            activeNavItem: "none"
        };
    },
    watch: {
    $route() {
      this.updateActiveNavItem();
    }
  },
    methods: {
        updateActiveNavItem() {
            const path = this.$route.path;
            if (path === '/') {
                this.activeNavItem = 'home';
            } else if (path === '/erste-mannschaft') {
                this.activeNavItem = 'erste-mannschaft';
            } else if (path === '/zweite-mannschaft') {
                this.activeNavItem = 'zweite-mannschaft';
            } else if (path === '/futsal') {
                this.activeNavItem = 'futsal';
            } else if (path === '/vorstandschaft') {
                this.activeNavItem = 'board';
            } else if (path === '/sponsoren') {
                this.activeNavItem = 'sponsors';
            } else if (path === '/geschichte') {
                this.activeNavItem = 'history';
            } else if(path === '/mitglied-werden'){
                this.activeNavItem = 'mitglied-werden'
            }

            console.log(this.activeNavItem)
        },

        toggleMenu() {
            console.log("toggleMenu() loaded")
            console.log("submenuIsOpenTeam1: "+this.submenuIsOpenTeam1)
            if(this.isMobileView){
                this.isActive = !this.isActive;
                this.showX();
            }
        },

        showX() {
            const burgerMenu = document.querySelector('.js-burgermenu');
            const spans = burgerMenu.getElementsByTagName('span');

            for (const span of spans) {
                span.classList.toggle('open');
            }
        },

        openSubmenu(){
            const path = this.$route.path;
            if(path == '/erste-mannschaft'){
                this.submenuIsOpenTeam1 = true; // Update the isOpen state
            } else{
                this.submenuIsOpenTeam2 = true; // Update the isOpen state
            }
        },

        closeSubmenu() {
            const path = this.$route.path;
            if(path == '/erste-mannschaft'){
                this.submenuIsOpenTeam1 = false; // Update the isOpen state
            } else{
                this.submenuIsOpenTeam2 = false; // Update the isOpen state
            }   
        }
     
    },
    computed: {
        isClickable(){
            // Mobile view navbar is just clickable if the menu is visible (opacity 90)
            return this.isMobileView ? this.isActive ? 'auto' : 'none'  :  'auto';
        }
    },
    mounted() {  
        // Update isMobileView when the component is mounted
        this.isMobileView = window.innerWidth < 1024;

        // Add a resize event listener to update isMobileView when the window is resized
        window.addEventListener('resize', () => {
            this.isMobileView = window.innerWidth < 1024;
        });
    }
};
</script>

<style>
h1{
    font-family: 'Anton', sans-serif;
}
li{
    padding: 1rem;
    
}
a:hover{
    transform: scale(1.2)
}

.router-link{
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}

.active{
    text-decoration: underline;
}

.upper.open {
    top: 18px;
    transform: rotate(135deg);
}

.middle.open {
    opacity: 0;
    margin-right: 60px;
}

.lower.open {
    top: 18px;
    transform: rotate(-135deg);
}

.js-burgermenu span {
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
}
</style>