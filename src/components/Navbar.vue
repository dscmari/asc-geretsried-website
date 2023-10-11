<!-- <script setup>
    import { RouterLink} from 'vue-router'
</script> -->

<template>
    <!-- TODO: use boolean to check if the navbar is mobile or desktop? does this approach make sense? -->

    <div class="w-full">
        <div class="flex items-center justify-between">
            <div class="flex items-center p-4">
                <RouterLink to="/">
                    <img src="/images/logo-adler.jpg" class="h-20 lg:h-32" alt="ASC Geretsried Logo Adler">
                </RouterLink>
                <!-- TODO: adapt h1 color, seems to be to dark -->
                <h1>
                    <RouterLink to="/" class="text-ascBlue text-xl font-semibold lg:text-4xl">ASC GERETSRIED</RouterLink>
                </h1>
            </div>
            <div class="hidden lg:flex">
                <a class="p-4" href="https://www.instagram.com/Ascgeretsried"><img src="/images/insta-icon.svg"
                        style="width:40px" alt="Instagram Icon"></a>
                <a class="p-4" href="https://web.facebook.com/GeretsriederAdler"><img src="/images/fb-icon.png"
                        style="width:40px" alt="Facebook Icon"></a>
            </div>
            <div class="block lg:hidden p-4 mr-4">
                <div class="flex items-center border-black hover:text-grey hover:border-grey" v-on:click="toggleMenu()">
                    <div
                        class="js-burgermenu w-9 h-7 relative my-12 mx-auto transform rotate-0 transition ease-in-out duration-500 cursor-pointer">
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
        <div :class="isActive ? 'opacity-90' : 'opacity-0'"
            class="transition-opacity duration-500 ease-in-out lg:opacity-100">
            <ul class="p-4 text-xl bg-ascBlue text-white fixed top-0 left-0 w-3/4 lg:static lg:flex lg:w-full lg:p-0"
                v-on:click="toggleMenu()">
                <li :class="isMobileView ? 'block' : 'hidden'">
                    <RouterLink to="/" class="router-link">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/erste-mannschaft" class="router-link">1. Mannschaft</RouterLink>
                </li>
                <li>
                    <RouterLink to="/zweite-mannschaft" class="router-link">2. Mannschaft</RouterLink>
                </li>
                <li>
                    <RouterLink to="/futsal" class="router-link">Futsal</RouterLink>
                </li>
                <li>
                    <RouterLink to="/vorstandschaft" class="router-link">Vorstandschaft</RouterLink>
                </li>
                <li>
                    <RouterLink to="/sponsoren" class="router-link">Sponsoren</RouterLink>
                </li>
                <li>
                    <RouterLink to="/geschichte" class="router-link">Geschichte</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            isMobileView: false
        };
    },
    methods: {
        isCurrentPath(path) {
            return window.location.pathname === path;
        },

        toggleMenu() {
            this.isActive = !this.isActive;
            this.showX();
        },

        showX() {
            const burgerMenu = document.querySelector('.js-burgermenu');
            const spans = burgerMenu.getElementsByTagName('span');

            for (const span of spans) {
                span.classList.toggle('open');
            }
        }
    },
    mounted() {
        // Update isMobileView when the component is mounted
        this.isMobileView = window.innerWidth < 768;

        // Add a resize event listener to update isMobileView when the window is resized
        window.addEventListener('resize', () => {
            this.isMobileView = window.innerWidth < 768;
        });
    }
};
</script>

<style>
li {
    padding: 1rem;
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

<!-- <style scoped>
/* @media screen and (max-width: 768px) {
    .flex-container div{
        display: flex;
        align-items: center;
    }

    .social-icons{
        display: none;
        background-color: red;
    }
    .nav-container {

        position: absolute;
        width: 100%;
    }

    .open-menu {
        opacity: 1;
        height: 150px;
    }

    .nav-content {
        flex-direction: column;
        z-index: 100;
        position: relative;
        transition: all 0.2s ease-out;
        background-color: var(--asc-dark-blue);
    }

    .nav-items {
        flex-direction: column;


    }

    .social-icons {
        display: none;
    }

    li {
        padding: 4px;
    }
} */
/* .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.flex-container>div:nth-child(1) {
    display: flex;
    align-items: center;
}

.nav-items {
    display: flex;
    justify-content: flex-start;
    list-style: none;
    color: #ffffff;
    font-size: larger;
}

h1>.router-link {
    color: var(--asc-dark-blue);
    font-weight: bold;
}

li>.router-link {
    color: #ffffff;
}

li {
    padding: 16px;
}

.nav-items {
    background-color: #080F29;
}

div a {
    margin: 10px;
} */

/* mobile menu */
</style> -->