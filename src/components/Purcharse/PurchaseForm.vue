<template>
  <form class="purchase-form" @submit.prevent="submitForm">
    <label>Producto</label>
    <select v-model="selectedProductId" required>
      <option value="" disabled>Seleccionar producto</option>
      <option v-for="p in products" :key="p.id" :value="p.id">
        {{ p.name }} - ${{ p.price }}
      </option>
    </select>

    <label>Cantidad</label>
    <input type="number" min="1" v-model="quantity" required />

    <div v-if="selectedProduct">
      <p>Total: <strong>${{ totalPrice }}</strong></p>
    </div>

    <button type="submit">Confirmar Compra</button>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProductStore } from "@/store/ProductStore";
import { usePurchaseStore } from "@/store/PurchaseStore";

const emit = defineEmits(["submitted"]);

const productStore = useProductStore();
const purchaseStore = usePurchaseStore();

const products = productStore.products;

const selectedProductId = ref("");
const quantity = ref(1);

const selectedProduct = computed(() =>
  products.find((p) => p.id === Number(selectedProductId.value))
);

const totalPrice = computed(() =>
  selectedProduct.value ? (quantity.value * selectedProduct.value.price).toFixed(2) : 0
);

const submitForm = async () => {
  if (!selectedProduct.value) return;

  await purchaseStore.createPurchase({
    productId: selectedProduct.value.id,
    quantity: quantity.value,
  });

  emit("submitted");
};
</script>

<style scoped>
.purchase-form {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
button {
  background: #c79c6e;
  color: white;
  border: none;
  padding: .8rem;
  cursor: pointer;
  border-radius: 6px;
}
button:hover {
  background: #b58960;
}
</style>
