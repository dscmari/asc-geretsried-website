<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


</script>

<template>
  <Navbar/>
  <main class="p-4 md:p-0">
    <RouterView/>
  </main>
  <Footer/>
</template>
