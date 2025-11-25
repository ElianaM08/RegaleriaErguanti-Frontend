<template>
  <div class="cart-container">
    <div v-if="cart.length === 0" class="empty">
      <p>No agregaste productos aún.</p>
    </div>

    <div v-for="item in cart" :key="item.id" class="cart-item">
      <img :src="item.imageUrl" class="img">

      <div class="info">
        <h3>{{ item.name }}</h3>
        <p>${{ item.price }}</p>

        <div class="quantity">
          <button class="btn-decrease" @click="decrease(item.id)">−</button>
          <span>{{ item.quantity }}</span>
          <button class="btn-increase" @click="increase(item.id)">+</button>
        </div>

        <p class="subtotal">
          Subtotal: ${{ (item.quantity * item.price).toFixed(2) }}
        </p>
      </div>
    </div>

    <div v-if="cart.length > 0" class="footer">
      <h2>Total: ${{ totalAmount }}</h2>
      <button class="btn-confirm" @click="confirm">Confirmar compra</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { usePurchaseStore } from "@/stores/PurchaseStore";
import { useToast } from "vue-toastification";

const purchaseStore = usePurchaseStore();
const toast = useToast();
const cart = computed(() => purchaseStore.cart);
const totalAmount = computed(() => purchaseStore.totalAmount);

const increase = (id) => purchaseStore.increaseQuantity(id);
const decrease = (id) => purchaseStore.decreaseQuantity(id);

const confirm = async () => {
  await purchaseStore.confirmPurchase();

  toast.success("Compra realizada con éxito", {
    timeout: 2500,
    position: "top-right",
  });
};
</script>

<style scoped>
.cart-container {
  max-width: 700px;
  margin-top: 40px;
  margin-left: 80px;
  padding: 1rem;
}
.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
}
.img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
.quantity button {
  padding: 5px 10px;
}
.footer {
  margin-top: 1rem;
  text-align: right;
}
.btn-decrease{
  background-color: #e8c7a5;
  border: #e8c7a5;
}
.btn-increase{
  background-color: #e8c7a5;
  border: #e8c7a5;
}
.btn-confirm{
  border-radius: 10px;
  padding: 20px 30px;
  border: #28a745;
  background-color: #28a745;
}
</style>


