import { defineStore } from "pinia";
import api from "../services/api";
import { useAuthStore } from "./AuthStore";

export const usePurchaseStore = defineStore("purchases", {
  state: () => ({
    purchases: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  }),

  getters: {
    totalAmount: (state) =>
      state.cart.reduce((sum, p) => sum + p.quantity * p.price, 0),
  },

  actions: {
    async fetchPurchases() {
      const { data } = await api.get("/purchases");
      this.purchases = data;
    },

    async createPurchase(purchase) {
      await api.post("/purchases", purchase);
      return this.fetchPurchases();
    },

    async getPurchaseById(id) {
      const { data } = await api.get(`/purchases/${id}`);
      return data;
    },

    async updatePurchase(id, updatedData) {
      await api.put(`/purchases/${id}`, updatedData);
      return this.fetchPurchases();
    },

    async deletePurchase(id) {
      await api.delete(`/purchases/${id}`);
      return this.fetchPurchases();
    },

    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    addToCart(product) {
      const existing = this.cart.find((p) => p.id === product.id);

      if (existing) {
        existing.quantity++;
      } else {
        this.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity: 1,
        });
      }

      this.saveCart();
    },

    increaseQuantity(id) {
      const item = this.cart.find((p) => p.id === id);
      if (!item) return;
      item.quantity++;
      this.saveCart();
    },

    decreaseQuantity(id) {
      const item = this.cart.find((p) => p.id === id);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cart = this.cart.filter((p) => p.id !== id);
      }

      this.saveCart();
    },
  
    async confirmPurchase() {
      const auth = useAuthStore();
      const userId = auth.user?.id;
      for (const item of this.cart) {
        await api.post("/purchases", {
          userId: userId,
          productId: item.id,
          quantity: item.quantity,
          totalPrice: item.quantity * item.price,
        });
      }

      this.cart = [];
      this.saveCart();
    },
  },
});
