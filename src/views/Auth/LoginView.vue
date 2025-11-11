<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2>Iniciar Sesión</h2>

      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />

        <button type="submit" :disabled="loading">
          {{ loading ? "Cargando..." : "Ingresar" }}
        </button>
      </form>

      <p class="switch-text">
        ¿No tienes cuenta?
        <router-link to="/register">Crear cuenta</router-link>
      </p>

      <p v-if="error" class="error">{{ error }}</p>
    </div> 
  </div>

</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/AuthStore";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref("");

const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  loading.value = true;
  error.value = "";
  try {
    await authStore.login(email.value, password.value);
    router.push("/");
  } catch (err) {
    console.log(err);
    error.value = "Email o contraseña incorrectos";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.auth-container {
  height: 100vh;
  width: 100%;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  background: url("../../assets/images/regalo_inicio.jpg") center/cover no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center
}
.auth-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}
.auth-box {
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.85);
  padding: 2.5rem;
  max-width: 350px;
  width: 100%;
  border-radius: 12px;
  backdrop-filter: blur(6px);
  text-align: center;
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
  background: #e5bc93;
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
