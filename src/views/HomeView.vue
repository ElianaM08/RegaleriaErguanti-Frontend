<template>
  <div class="home-view">
    <section class="hero">
      <div class="carousel-container">
        <div class="carousel-slide" v-for="(image, index) in images" :key="index" :class="{ active: currentSlide === index }" :style="{ backgroundImage: `url(${image})` }"></div>
      </div>
      <div class="overlay"></div>
      <div class="hero-text">
        <h1>Bienvenidos a Nuestra Tienda</h1>
        <p>Regalos hechos con amor para momentos inolvidables.</p>
      </div>
    </section>

    <section class="featured" data-aos="fade-up">
      <h2>Destacados</h2>
      <div class="products">
        <div class="product-card" v-for="n in 3" :key="n">
          <div class="image-placeholder"></div>
          <p>Producto {{ n }}</p>
        </div>
      </div>
    </section>

    <section class="half-section">
      <div class="image-side"></div>
      <div class="text-side">
        <h2>Nuestra Filosofía</h2>
        <p>Creemos en la dedicación, el detalle y el amor en cada pieza que creamos.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = [
  "/assets/images/regalo_inicio.jpg",
  "/assets/images/regalo_inicio2.jpg",
  "/assets/images/regalo_inicio3.jpg"
];

const currentSlide = ref(0);

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % images.length;
  }, 4000);
});
</script>

<style>
.home-view {
  width: 100%;
  overflow-x: hidden;
}

.hero {
  position: relative;
  height: 100vh;
  width: 100%;
}

.carousel-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.featured {
  padding: 4rem 2rem;
  text-align: center;
}

.products {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.product-card {
  width: 200px;
  text-align: center;
}

.image-placeholder {
  width: 100%;
  height: 150px;
  background: #ddd;
  border-radius: 8px;
}

.half-section {
  display: flex;
  height: 50vh;
}

.image-side {
  flex: 1;
  background: url('/assets/images/chica_regalo.jpg') center/cover;
}

.text-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}
</style>

