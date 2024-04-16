<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="w-full pt-4 sticky top-0 bg-white z-10">
        <div class="flex items-center justify-between">
            <div class="flex items-center p-2">
                <router-link to="/">
                    <img src="/images/logo_noBackground.webp" alt="ASC Geretsried Logo Adler" class="m-2" :style="{ width: isMobileView ? '35px' : '50px'}">
                </router-link>
                <h1 class="text-ascBlue text-lg lg:text-2xl lg:ml-4">
                    <router-link class="font-semibold" to="/">ASC Geretsried</router-link>
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
        id="nav"
        class="fixed top-0 left-0 w-0 opacity-90 whitespace-nowrap transform overflow-x-hidden -translate-x-0 ease-in-out transition-all duration-300 
         lg:static lg:w-full lg:overflow-visible lg:opacity-100 z-40">
            <ul class="text-xl lg:text-lg xl:text-xl w-full lg:flex lg:justify-evenly text-white bg-ascBlue text-center zoomable ">
                <li 
                :class="{ 'block': isMobileView, 'hidden': !isMobileView }">
                    <RouterLink
                    to="/"
                    class="router-link pt-8"
                    v-on:click="toggleMenu()">Home
                    </RouterLink>
                </li>
                <li>
                    <router-link
                    to="/erste-mannschaft"
                    class="router-link relative"
                    :class="{ 'block': isMobileView }"
                    v-on:click="toggleMenu()">1. Mannschaft
                    </router-link>
                </li>
                <li>
                    <router-link
                    to="/zweite-mannschaft"
                    class="router-link relative"
                    :class="{ 'block': isMobileView }"
                    v-on:click="toggleMenu()">2. Mannschaft
                    </router-link>
                </li>
                <li>
                    <router-link 
                    to="/futsal" 
                    class="router-link"
                    :class="{ 'block': isMobileView }" 
                    v-on:click="toggleMenu()">Futsal
                    </router-link>
                </li>
                <li>
                    <router-link 
                    to="/liveticker" 
                    class="router-link"
                    :class="{ 'block': isMobileView }" 
                    v-on:click="toggleMenu()">Liveticker
                    </router-link>
                </li>
                <li>
                    <router-link 
                    to="/vorstand" 
                    class="router-link" 
                    :class="{ 'block': isMobileView }" 
                    v-on:click="toggleMenu()">Vorstand
                    </router-link>
                </li>
                <li>
                    <router-link 
                    to="/sponsoren" 
                    class="router-link" 
                    :class="{ 'block': isMobileView }" 
                    v-on:click="toggleMenu()">Sponsoren
                    </router-link>
                </li>
                <li>
                    <router-link 
                    to="/geschichte" 
                    class="router-link" 
                    :class="{ 'block': isMobileView }" 
                    v-on:click="toggleMenu()">Geschichte
                    </router-link>
                </li>
                <li>              
                    <router-link 
                    to="/mitglied-werden" 
                    class="router-link" 
                    :class="{ 'block': isMobileView }" 
                    v-on:click="toggleMenu()">Mitglied werden
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- <div class="flex gap-4">
            <router-link :to="{ name: 'erste-mannschaft', hash: '#league-1' }">Liga1</router-link>
            <router-link :to="{ name: 'erste-mannschaft', hash: '#team-1' }">Kader1</router-link>
            <router-link :to="{ name: 'erste-mannschaft', hash: '#training-1' }">Trainingszeiten1</router-link>
        </div>
        <div class="flex gap-4">
            <router-link :to="{ name: 'zweite-mannschaft', hash: '#league-2' }">Liga2</router-link>
            <router-link :to="{ name: 'zweite-mannschaft', hash: '#team-2' }">Kader2</router-link>
            <router-link :to="{ name: 'zweite-mannschaft', hash: '#training-2' }">Trainingszeiten2</router-link>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            isMobileView: false,
        };
    },
    methods: {
        toggleMenu() {
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

.router-link{
    position: relative;
    display: inline-block;
}
.router-link:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.router-link:hover:after { 
  width: 100%; 
  left: 0; 
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