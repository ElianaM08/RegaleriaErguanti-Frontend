<template>
  <div class="product-card">
    <img :src="product.imageUrl" alt="" class="product-img" />

    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">${{ product.price }}</p>

    <router-link :to="`/products/${product.id}`" class="btn">
      Ver detalles
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: 0.3s;
  background: #fff;
}

.product-card:hover {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
}

.product-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.8rem;
}

.product-name {
  font-size: 1.1rem;
  font-weight: bold;
}

.product-price {
  color: #444;
  margin-bottom: 1rem;
}

.btn {
  display: block;
  padding: 0.5rem 1rem;
  background: #d1a57a;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: 0.2s;
}

.btn:hover {
  background:#b6916d ;
}
</style>
