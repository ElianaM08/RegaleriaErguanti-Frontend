<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section class="about">

    <div class="about-hero">
      <h1 data-aos="fade-up">Nuestra Regalería</h1>
      <p data-aos="fade-up" data-aos-delay="150">
        Detalles que hacen sentir, regalos que cuentan historias.
      </p>
    </div>

    <div class="about-content" data-aos="fade-up">
      <div class="text">
        <h2>Un regalo es mucho más que un objeto</h2>
        <p>
          Somos un espacio creado para sorprender, emocionar y acompañar.
          Elegimos cada producto con intención, buscando que quien regale
          o reciba, sienta algo especial.
        </p>

        <p>
          Trabajamos con artesanos y pequeños emprendedores locales,
          creando una selección cálida, auténtica y cuidada.
          Si estás buscando “ese detalle” que diga lo que no se puede decir con palabras,
          acá lo vas a encontrar.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1511715281345-4acae64a3e58"
        alt="Regalos artesanales"
        class="about-img"
      />
    </div>

  </section>
</template>

<style scoped>
.about-hero {
  height: 70vh;
  background: url("https://images.unsplash.com/photo-1519681393784-d120267933ba")
    center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;
  background-attachment: fixed;
}
.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}
.about-hero p {
  max-width: 600px;
  font-size: 1.2rem;
  opacity: 0.9;
}

.about-content {
  display: flex;
  max-width: 1200px;
  margin: 70px auto;
  gap: 40px;
  padding: 0 20px;
  align-items: center;
}
.about-content .text {
  flex: 1;
}
.about-content .text p {
  margin: 15px 0;
  line-height: 1.6;
}
.about-img {
  width: 50%;
  border-radius: 10px;
  object-fit: cover;
}
@media(max-width: 900px) {
  .about-content {
    flex-direction: column;
  }
  .about-img {
    width: 100%;
  }
}
</style>
