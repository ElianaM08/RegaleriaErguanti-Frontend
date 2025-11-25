<template>
  <div class="home-view">
    <section class="hero">
      <div class="carousel-container">
        <div class="carousel-slide" v-for="(image, index) in images" :key="index" :class="{ active: currentSlide === index }" :style="{ backgroundImage: `url(${image})` }"></div>
      </div>
      <div class="overlay"></div>
      <div class="hero-text">
        <h1>Bienvenidos a Nuestra Tienda</h1>
        <p>Descubrí todos los regalos que podés hacer</p>
        <router-link to="/products">
          <button class="btn-product">Ver productos</button>
        </router-link>

      </div>
    </section>

    <section class="featured" data-aos="fade-up">
      <h2>Inspirate en estos regalos</h2>
      <div class="products">
        <div class="product-card" v-for="n in 3" :key="n">
          <img :src="destacados[n - 1]" class="featured-img" />
        </div>
      </div>
    </section>

    <section class="banner-section">
      <div class="banner-overlay"></div>
      <div class="banner-text">
        <h2>Regalos con Amor</h2>
        <p>Detalles que hacen momentos inolvidables</p>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import img1 from "@/assets/images/regalo_inicio.jpg";
import img2 from "@/assets/images/regalo_inicio2.jpg";
import img3 from "@/assets/images/regalo_inicio3.jpg";
import dest1 from "@/assets/images/Termo Autosebante.jpeg";
import dest2 from "@/assets/images/riñoneras.jpeg";
import dest3 from "@/assets/images/marcadores.jpeg";

const images = [img1, img2, img3];
const destacados = [dest1, dest2, dest3]
const currentSlide = ref(0);

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % images.length;
  }, 4000);
});
</script>

<style scoped>
.home-view {
  width: 100%;
  overflow-x: hidden;
}
h2{
  color: #d1a57a;
}

.hero {
  position: relative;
  height: 100vh;
  width: 100%;
}

.carousel-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  inset: 0;
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
  width: 90%;
  max-width: 800px;
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
.btn-product{
  margin-top: 40px;
  padding: 14px;
  background: #d1a57a;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: 0.3s;
}

.featured {
  padding: 4rem 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}
.featured-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.products {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.product-card {
  width: 220px;
  text-align: center;
  margin: 0 auto;
}

.image-placeholder {
  width: 100%;
  height: 150px;
  background: #ddd;
  border-radius: 8px;
}

.banner-section {
  position: relative;
  height: 100vh;
  width: 100%;
  background: url('../assets/images/chica_regalo.jpg') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

.banner-text {
  position: relative;
  text-align: center;
  color: #fff;
  padding: 2rem;
  max-width: 800px;
}

.banner-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.banner-text p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.image-side {
  flex: 4;
  background: url('../assets/images/chica_regalo.jpg') center/cover;
}

.text-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

</style>

