<script setup>
    import Submenu from './Submenu.vue';
</script>

<template>
    <div class="w-full">
        <div class="flex items-center justify-between">
            <div class="flex items-center p-4">
                <RouterLink to="/">
                    <img src="/images/logo-adler.webp" class="h-20 lg:h-32" alt="ASC Geretsried Logo Adler">
                </RouterLink>
                <!-- TODO: adapt h1 color, seems to be to dark -->
                <h1>
                    <RouterLink to="/" class="text-ascBlue text-xl font-semibold lg:text-4xl">ASC GERETSRIED</RouterLink>
                </h1>
            </div>
            <div class="hidden lg:flex">
                <a class="p-4" href="https://www.instagram.com/Ascgeretsried"><img src="/images/insta-icon.webp"
                        style="width:40px" alt="Instagram Icon"></a>
                <a class="p-4" href="https://web.facebook.com/GeretsriederAdler"><img src="/images/fb-icon.png"
                        style="width:40px" alt="Facebook Icon"></a>
            </div>
            <div class="block lg:hidden p-4 mr-4">
                <div class="flex items-center border-black hover:text-grey hover:border-grey" >
                    <div
                        class="js-burgermenu w-9 h-7 relative my-12 mx-auto transform rotate-0 transition ease-in-out duration-500 cursor-pointer" v-on:click="toggleMenu()">
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
        <div :class="isActive ? 'opacity-95' : 'opacity-0'" :style="{pointerEvents: isClickable}"
            class="transition-opacity duration-500 ease-in-out lg:opacity-100">
            <ul class="p-4 pt-8 text-3xl lg:text-xl bg-ascBlue text-white text-center w-full absolute top-0 left-0 lg:static lg:flex lg:p-0 lg:pl-4 lg:pt-0 zoomable">
                <li :class="isMobileView ? 'block' : 'hidden'">
                    <RouterLink to="/" class="router-link" :class="{ 'active': activeNavItem === 'home' }" v-on:click="toggleMenu()">Home</RouterLink>
                </li>
                <li @mouseenter="submenuIsOpenTeam1 = true" @mouseleave="submenuIsOpenTeam1 = false">
                    <RouterLink to="/erste-mannschaft" class="router-link" :class="{ 'active': activeNavItem === 'erste-mannschaft' }" v-on:click="toggleMenu()">1. Mannschaft</RouterLink>
                </li>
                <li @mouseenter="submenuIsOpenTeam2 = true" @mouseleave="submenuIsOpenTeam2 = false">
                    <RouterLink to="/zweite-mannschaft" class="router-link" :class="{ 'active': activeNavItem === 'zweite-mannschaft' }" v-on:click="toggleMenu()">2. Mannschaft</RouterLink>
                </li>
                <li>
                    <RouterLink to="/futsal" class="router-link" :class="{ 'active': activeNavItem === 'futsal' }" v-on:click="toggleMenu()">Futsal</RouterLink>
                </li>
                <li>
                    <RouterLink to="/vorstandschaft" class="router-link" :class="{ 'active': activeNavItem === 'board' }" v-on:click="toggleMenu()">Vorstandschaft</RouterLink>
                </li>
                <li>
                    <RouterLink to="/sponsoren" class="router-link" :class="{ 'active': activeNavItem === 'sponsors' }" v-on:click="toggleMenu()">Sponsoren</RouterLink>
                </li>
                <li>
                    <RouterLink to="/geschichte" class="router-link" :class="{ 'active': activeNavItem === 'history' }" v-on:click="toggleMenu()">Geschichte</RouterLink>
                </li>
                <div class="block lg:hidden p-4 mr-4">
                    <div class="flex items-center border-black hover:text-grey hover:border-grey">
                        <div
                            class="w-14 h-10 relative my-12 mx-auto transform rotate-0 transition ease-in-out duration-500 cursor-pointer" v-on:click="toggleMenu()">
                            <span
                                class="open upper block absolute h-[3px] w-full bg-white rounded opacity-100 right-0 transform rotate-0 transition ease-in-out duration-250 top-0"></span>
                            <span
                                class="open middle block absolute h-[3px] w-full bg-white rounded opacity-100 right-0 transform rotate-0 ease-in-out duration-250 top-3"></span>
                            <span
                                class="open lower block absolute h-[3px] w-full bg-white rounded opacity-100 right-0 transform rotate-0 transition ease-in-out duration-250 top-6"></span>
                        </div>
                    </div>
                </div>
            </ul>
            <div v-if="!isMobileView" class="relative">
                <Submenu v-if="activeNavItem === 'erste-mannschaft'" :isOpen="submenuIsOpenTeam1">
                    <li><a href="#league-1">Liga & Tabelle</a></li>
                    <li><a href="#team-1">Kader</a></li>
                    <li><a href="#training-1">Trainingszeiten</a></li>
                </Submenu>
                <Submenu v-if="activeNavItem === 'zweite-mannschaft'" :isOpen="submenuIsOpenTeam2">
                    <li><a href="#league-2">Liga & Tabelle</a></li>
                    <li><a href="#team-2">Kader</a></li>
                    <li><a href="#training-2">Trainingszeiten</a></li>
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
            activeNavItem: null
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
            }
        },

        toggleMenu() {
            console.log("toggleMenu() loaded")
            this.isActive = !this.isActive;
            this.showX();
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
li {
    padding: 1rem 1.5rem;
}

.zoomable > li:hover {
    transform: scale(1.2);
    cursor: pointer;
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