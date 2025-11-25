<template>
  <div class="purchase-item">
    <p><strong>{{ purchase.product.name }}</strong></p>
    <p>Cantidad: {{ purchase.quantity }}</p>
    <p>Total: ${{ purchase.totalPrice }}</p>
    <p class="date">{{ formatDate(purchase.purchaseDate) }}</p>
  </div>
</template>

<script setup>
const { purchase } = defineProps({ purchase: Object });

const formatDate = (date) => new Date(date).toLocaleDateString("es-AR");
</script>

<style scoped>

.purchase-item {
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  margin-top: 40px;
}
.date {
  font-size: 0.9rem;
  color: #666;
}
</style>
