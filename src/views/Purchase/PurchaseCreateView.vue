<template>
  <section class="purchase-create">
    <h1>Realizar Compra</h1>
    <PurchaseForm @submitted="goToList" />
  </section>
</template>

<script setup>
import PurchaseForm from "@/components/Purcharse/PurchaseForm.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goToList = () => router.push("/purchases");
</script>

<style scoped>
h1{
  margin-bottom: 30px;
}
.purchase-create {
  margin-top: 100px;
  padding: 2rem;
  text-align: center;
}
</style>
