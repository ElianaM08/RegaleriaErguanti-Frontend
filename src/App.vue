<template>
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
  font-family: "Inter", "Roboto", sans-serif;
  background-color: #f8f6f3; 
  color: #2d2d2d;
}
#app {
  padding-top: 0; 
}
</style>