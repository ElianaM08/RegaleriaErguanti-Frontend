<template>
  <header :class="['navbar', { 'scrolled': isScrolled }]">
    <nav class="nav-container">
      <h1 class="logo">TuMarca</h1>

      <ul class="nav-links" :class="{ 'open': isMenuOpen }">
        <li><router-link @click="closeMenu" to="/">Inicio</router-link></li>
        <li><router-link @click="closeMenu" to="/products">Productos</router-link></li>
        <li><router-link @click="closeMenu" to="/about">Sobre mí</router-link></li>
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
  background: transparent;
}

.navbar.scrolled {
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  user-select: none;
}

/* Desktop links */
.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: 400;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #e8c7a5; /* tono cálido suave */
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

/* Mobile */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 2px;
  background: white;
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
    background: rgba(0,0,0,0.9);
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
