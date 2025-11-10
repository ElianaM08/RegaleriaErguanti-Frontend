import { defineStore } from "pinia";
import api from "../services/api";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProducts() {
      const { data } = await api.get("/products");
      this.products = data;
    },

    async createProduct(product) {
      await api.post("/products", product);
      this.fetchProducts();
    },

    async updateProduct(id, product) {
      await api.put(`/products/${id}`, product);
      this.fetchProducts();
    },

    async deleteProduct(id) {
      await api.delete(`/products/${id}`);
      this.fetchProducts();
    }
  }
});

