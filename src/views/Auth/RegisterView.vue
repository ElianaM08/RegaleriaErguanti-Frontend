<template>
  <div class="auth-container">
    <h2>Crear Cuenta</h2>

    <form @submit.prevent="handleRegister">
      <input v-model="name" type="text" placeholder="Nombre" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />

      <button type="submit" :disabled="loading">
        {{ loading ? "Cargando..." : "Registrarse" }}
      </button>
    </form>

    <p class="switch-text">
      ¿Ya tienes cuenta?
      <router-link to="/login">Iniciar sesión</router-link>
    </p>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/AuthStore";

const name = ref("");
const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref("");

const authStore = useAuthStore();
const router = useRouter();

const handleRegister = async () => {
  loading.value = true;
  error.value = "";

  try {
    await authStore.register(name.value, email.value, password.value);
    router.push("/login");
  } catch (err) {
    console.log(err);
    error.value = "No se pudo registrar. Verifica los datos.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 360px;
  margin: 60px auto;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
}
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
input, button {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  background: #915b34;
  color: #fff;
  border: none;
  cursor: pointer;
}
.error {
  color: red;
  margin-top: 10px;
}
.switch-text {
  margin-top: 10px;
  font-size: 14px;
}
</style>
