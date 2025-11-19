<template>
  <form class="purchase-form" @submit.prevent="submitForm">
    <select v-model="selectedProductId" required>
      <option value="" disabled>Seleccionar producto</option>
      <option v-for="p in products" :key="p.id" :value="p.id">
        {{ p.name }} - ${{ p.price }}
      </option>
    </select>

    <label>Cantidad</label>
    <input type="number" min="1" v-model.number="quantity" required />

    <div v-if="selectedProduct">
      <p>Total: <strong>${{ totalPrice }}</strong></p>
    </div>

    <button type="submit">Confirmar Compra</button>
  </form>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "@/stores/ProductStore";
import { usePurchaseStore } from "@/stores/PurchaseStore";

const emit = defineEmits(["submitted"]);

const productStore = useProductStore();
const purchaseStore = usePurchaseStore();

onMounted(() => productStore.fetchProducts());

const products = computed(() => productStore.products);

const selectedProductId = ref("");
const quantity = ref(1);

const selectedProduct = computed(() =>
  products.value.find((p) => p.id === Number(selectedProductId.value))
);

const totalPrice = computed(() =>
  selectedProduct.value
    ? (quantity.value * selectedProduct.value.price).toFixed(2)
    : 0
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
.purchase-form select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: #fff;
  border: 2px solid #d1b798;
  padding: 0.7rem;
  border-radius: 8px;

  font-size: 1rem;
  cursor: pointer;

  transition: 0.2s ease-in-out;
  color: #4b3d33;

  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 7L10 12L15 7' stroke='%236e4f3a' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 18px;
}

.purchase-form select:hover {
  border-color: #b89674;
}

.purchase-form select:focus {
  outline: none;
  border-color: #c79c6e;
  box-shadow: 0 0 4px rgba(199, 156, 110, 0.6);
}
.purchase-form option {
  padding: 10px;
  background: white;
  color: #4b3d33;
}
.purchase-form input[type="number"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  background: #fff;
  border: 2px solid #d1b798;
  padding: 0.7rem;
  border-radius: 8px;

  font-size: 1rem;
  color: #4b3d33;

  transition: 0.2s ease-in-out;
  width: 100%;
}
.purchase-form input[type="number"]:hover {
  border-color: #b89674;
}
.purchase-form input[type="number"]:focus {
  outline: none;
  border-color: #c79c6e;
  box-shadow: 0 0 4px rgba(199, 156, 110, 0.6);
}
.purchase-form input[type="number"]::-webkit-inner-spin-button,
.purchase-form input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
