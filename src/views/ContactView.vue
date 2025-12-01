<template>
  <section class="contact">
    <h1>Contacto</h1>
    <p>¿Buscás un regalo especial? Contanos qué idea tenés en mente y te ayudamos a elegir.</p>

    <form @submit.prevent="sendForm" class="contact-form">
      <input type="text" v-model="name" placeholder="Tu nombre" required />
      <input type="email" v-model="email" placeholder="Tu correo" required />
      <textarea
        v-model="message"
        rows="5"
        placeholder="¿Qué regalo estás buscando? Contanos 😄"
        required
      ></textarea>
      <button type="submit">Enviar Consulta</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const name = ref("");
const email = ref("");
const message = ref("");

const toast = useToast();

const sendForm = () => {
  console.log("Consulta recibida:", {
    name: name.value,
    email: email.value,
    message: message.value,
  });

  toast.success("Consulta enviada");


  name.value = "";
  email.value = "";
  message.value = "";
};
</script>


<style scoped>
.contact {
  max-width: 800px;
  margin: 80px auto;
  margin-top: 150px;
  text-align: center;
  padding: 0 20px;
}
.contact h1 {
  font-size: 2.5rem;
  color: #d1a57a;
}
.contact p {
  margin-bottom: 40px;
  opacity: 0.75;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  background: #fff9f4;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #d1a57a;
}
.contact-form button {
  padding: 14px;
  background: #d1a57a;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: 0.3s;
}
.contact-form button:hover {
  background: #b98c63;
}
</style>
