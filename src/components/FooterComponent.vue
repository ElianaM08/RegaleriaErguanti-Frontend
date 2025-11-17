<template>
  <footer class="footer">
    <div class="footer-content">

      <div class="brand">

      </div>

      <div class="actions">
        <a
          href="https://www.instagram.com/regaleria.erguanti/"
          target="_blank"
          rel="noopener"
          class="instagram-link"
        >
          Instagram
        </a>

        <router-link to="/contact" class="contact-btn">
          Contactanos
        </router-link>
      </div>

    </div>

    <div class="copy">
      © {{ new Date().getFullYear() }} Regalería Erguanti· Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  width: 100%;
  background: #fff;
  border-top: 1px solid #e6e0d8;
  padding: 4rem 1.5rem;
  color: #333;
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
  gap: 1rem;
  text-align: center;
}

.brand h3 {
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
}

.actions {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.icon {
  width: 20px;
  height: 20px;
}

.instagram-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.instagram-link:hover {
  color: #d9b391;
}

.contact-btn {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  border: 1px solid #d9b391;
  background: #d9b391;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
}

.contact-btn:hover {
  background: #c59d76;
}

.copy {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 4rem;
  color: #666;
}
</style>

