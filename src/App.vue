<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Mate+SC&family=Montserrat&family=Nanum+Gothic&family=Quicksand:wght@300..700&family=Raleway:ital,wght@1,262&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <div id="app">
    <Navbar  v-if="showNavbar"/>
    <router-view />
    <Footer v-if="showFooter" />
  </div>
</template>
<script setup>
import Navbar from "./components/NavbarComponent.vue";
import Footer from "./components/FooterComponent.vue"
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const hiddenRoutes = ["/login", "/register"];

const showNavbar = computed(() => !hiddenRoutes.includes(route.path));
const showFooter = computed(() => !hiddenRoutes.includes(route.path));
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, #app {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  background-color: #f8f6f3; 
  
}
#app {
  padding-top: 0; 
}
</style>