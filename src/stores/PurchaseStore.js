import { defineStore } from "pinia";
import api from "../services/api";

export const usePurchaseStore = defineStore("purchases", {
  state: () => ({
    purchases: [],
  }),

  actions: {
    async fetchPurchases() {
      const { data } = await api.get("/purchases");
      this.purchases = data;
    },

    async createPurchase(purchase) {
      await api.post("/purchases", purchase);
      return this.fetchPurchases();
    }
  }
});
