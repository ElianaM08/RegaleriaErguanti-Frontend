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
import { usePurchaseStore } from "@/stores/PurchaseStore";
import PurchaseItem from "@/components/Purcharse/PurchaseItem.vue";
import { onMounted, computed } from "vue";

const purchaseStore = usePurchaseStore();

onMounted(() => {
  purchaseStore.fetchPurchases();
});

const purchases = computed(() => purchaseStore.purchases);
</script>

<style scoped>
h1{
  margin-top: 80px;
  display: grid;
  justify-content: center;
  color: #d1a57a;
}
.purchase-list {
  margin-top: 80px;
  max-width: 700px;
  margin: auto;
  padding: 2rem;
}
</style>
