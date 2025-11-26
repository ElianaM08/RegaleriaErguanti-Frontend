<template>
  <div class="container">
    <h1>Nuestros Productos</h1>

    <div class="list">
      <ProductCard
        v-for="product in store.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductStore } from "@/stores/ProductStore";
import ProductCard from "@/components/Product/ProductCard.vue";

const store = useProductStore();

onMounted(() => {
  store.fetchProducts();
});
</script>

<style scoped>
.container {
  padding: 2rem;
}

h1 {
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: grid;
  justify-content: center;
  color:#d1a57a ;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.2rem;
}
</style>
