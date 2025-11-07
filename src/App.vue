<template>
  <div id="app">
    <Navbar />
        <router-view />
  </div>
</template>
<script setup>
import Navbar from "./components/NavbarComponent.vue";
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