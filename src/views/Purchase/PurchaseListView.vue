<template>
  <section class="purchase-list">
    <h1>Mis Compras</h1>

    <PurchaseItem 
      v-for="p in purchases" 
      :key="p.id" 
      :purchase="p" 
    />
  </section>
</template>

<script setup>
import { usePurchaseStore } from "@/store/PurchaseStore";
import PurchaseItem from "@/components/Purchase/PurchaseItem.vue";
import { onMounted } from "vue";

const purchaseStore = usePurchaseStore();

onMounted(() => {
  purchaseStore.getPurchases();
});

const purchases = purchaseStore.purchases;
</script>

<style scoped>
.purchase-list {
  max-width: 700px;
  margin: auto;
  padding: 2rem;
}
</style>
