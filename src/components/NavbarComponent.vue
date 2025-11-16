<template>
  <header :class="['navbar', { 'scrolled': isScrolled }]">
    <nav class="nav-container">
      <img src="../assets/images/logo.jpeg" alt="logo" class="logo">

      <ul class="nav-links" :class="{ 'open': isMenuOpen }">
        <li><router-link @click="closeMenu" to="/">Inicio</router-link></li>
        <li><router-link @click="closeMenu" to="/products">Productos</router-link></li>
        <li><router-link to="/products">Productos</router-link></li>
        <li><router-link to="/admin/products">Admin</router-link></li>
        <li><router-link @click="closeMenu" to="/about">Nosotros</router-link></li>
        <li><router-link @click="closeMenu" to="/contact">Contacto</router-link></li>
        <li><router-link @click="closeMenu" to="/login" class="login-btn">Ingresar</router-link></li>
      </ul>

      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 20px 50px;
  z-index: 1000;
  transition: background 0.4s ease, box-shadow 0.4s ease;
  background: white;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);

}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  user-select: none;
  height: 60px;
  width: 80px;
}

.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-weight: 400;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #e8c7a5; 
}

.login-btn {
  border: 1px solid white;
  padding: 6px 12px;
  border-radius: 4px;
}

.login-btn:hover {
  background: white;
  color: black;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 2px;
  background:#e8c7a5;
  transition: 0.3s;
}

@media (max-width: 820px) {
  .hamburger {
    display: flex;
  
  }

  .nav-links {
    position: fixed;
    top: 75px;
    right: -100%;
    background: rgba(255, 255, 255, 0.9);
    flex-direction: column;
    gap: 20px;
    width: 60%;
    height: calc(100vh - 80px);
    padding: 40px;
    transition: right 0.4s ease;
  }

  .nav-links.open {
    right: 0;
  }
}
</style>
