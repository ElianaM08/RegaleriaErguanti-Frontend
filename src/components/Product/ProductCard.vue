<template>
  <div class="product-card">
    <img :src="product.imageUrl" alt="" class="product-img" />
    <h3>{{ product.name }}</h3>
    <p>${{ product.price }}</p>

    <router-link :to="`/products/${product.id}`" class="btn">
      Ver detalles
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  product: Object
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
}
.product-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.btn {
  display: inline-block;
  margin-top: .5rem;
}
</style>
