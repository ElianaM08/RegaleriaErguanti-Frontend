
<template>
  <section class="stats">
    <h1>Estadísticas Generales</h1>

    <div v-if="stats">
      <div class="cards">
        <div class="card">
          <h3>Total Invertido</h3>
          <p>${{ stats.totalInvested }}</p>
        </div>

        <div class="card">
          <h3>Total Vendido</h3>
          <p>${{ stats.totalSold }}</p>
        </div>

        <div class="card">
          <h3>Ganancia Neta</h3>
          <p :class="{ profit: stats.totalProfit >= 0, loss: stats.totalProfit < 0 }">
            ${{ stats.totalProfit }}
          </p>
        </div>

        <div class="card">
          <h3>Transacciones</h3>
          <p>{{ stats.totalTransactions }}</p>
        </div>
      </div>

      <h2>Historial</h2>

      <table class="history">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="p in stats.purchases" :key="p.id">
            <td>{{ p.product.name }}</td>
            <td>{{ p.type }}</td>
            <td>{{ p.quantity }}</td>
            <td>${{ p.totalPrice }}</td>
            <td>{{ formatDate(p.purchaseDate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p>Cargando estadísticas...</p>
    </div>
  </section>
</template>

<script setup>
import { computed} from "vue";
import { useStatisticStore } from "@/stores/StatisticStore";
import { useAuthStore } from "@/stores/AuthStore";

const statisticStore = useStatisticStore();

const auth = useAuthStore();

if (auth.isAuthenticated) {
    statisticStore.fetchAllStatistics();
}

const stats = computed(() => statisticStore.stats);

const formatDate = (d) => new Date(d).toLocaleDateString();
</script>

<style scoped>
.stats {
  max-width: 900px;
  margin: auto;
  margin-top: 100px;
  padding: 2rem;
}
h1{
  margin-bottom: 20px;
  display: grid;
  justify-content: center;
  color: #d1a57a;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.card {
  background: #f3f0ec;
  padding: 1.2rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #d8c9b6;
}

.card h3 {
  margin-bottom: .5rem;
}

.profit {
  color: green;
  font-weight: bold;
}

.loss {
  color: red;
  font-weight: bold;
}

.history {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
}

.history th,
.history td {
  padding: 0.8rem;
  border-bottom: 1px solid #ccc;
}

.history th {
  background: #e9e1d7;
}
</style>
