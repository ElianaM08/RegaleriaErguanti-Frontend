<template>
  <div class="detail-container" v-if="store.selectedProduct">
    <img :src="store.selectedProduct.imageUrl" class="detail-img" />

    <h1 class="detail-title">{{ store.selectedProduct.name }}</h1>
    <p class="detail-description">{{ store.selectedProduct.description }}</p>

    <p class="detail-price">${{ store.selectedProduct.price }}</p>

    <button @click="purchaseStore.addToCart(store.selectedProduct)">
      Agregar al carrito
    </button>


  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/ProductStore";
import { usePurchaseStore } from "@/stores/PurchaseStore";

const store = useProductStore();
const route = useRoute();
const purchaseStore = usePurchaseStore()

onMounted(() => {
  store.fetchProductById(route.params.id);
});
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}

.detail-img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}

.detail-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.detail-description {
  color: #555;
  margin-bottom: 1rem;
}

.detail-price {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.btn-add {
  padding: 0.7rem 1.2rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-add:hover {
  background: #1e7e34;
}
</style>
