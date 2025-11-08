<template>
  <div v-if="store.selectedProduct">
    <img :src="store.selectedProduct.imageUrl" class="img" />
    <h1>{{ store.selectedProduct.name }}</h1>
    <p>{{ store.selectedProduct.description }}</p>
    <p><strong>${{ store.selectedProduct.price }}</strong></p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/store/ProductStore";

const store = useProductStore();
const route = useRoute();

onMounted(() => {
  store.fetchProductById(route.params.id);
});
</script>

<style scoped>
.img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
}
</style>
