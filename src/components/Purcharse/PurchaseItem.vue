<template>
  <div class="purchase-item">
    <p><strong>{{ props.purchase.product.name }}</strong></p>
    <p>Cantidad: {{ props.purchase.quantity }}</p>
    <p>Total: ${{ props.purchase.totalPrice }}</p>
    <p class="date">{{ formatDate(props.purchase.purchaseDate) }}</p>
  </div>
</template>

<script setup>
const props = defineProps({ purchase: Object });

const formatDate = (date) => new Date(date).toLocaleDateString();
</script>

<style scoped>
.purchase-item {
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
}
.date {
  font-size: 0.9rem;
  color: #666;
}
</style>
