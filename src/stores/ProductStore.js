import { defineStore } from "pinia";
import api from "../services/api";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
    selectedProduct: null,
  }),

  actions: {
    async fetchProducts() {
      const { data } = await api.get("/products");
      this.products = data;
    },

    async fetchProductById(id) {
      const { data } = await api.get(`/products/${id}`);
      this.selectedProduct = data;
    },

    async createProduct(formData) {
      await api.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      this.fetchProducts();
    },

    async updateProduct(id, formData) {
      await api.put(`/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    });
      this.fetchProducts();
    },

    async deleteProduct(id) {
      await api.delete(`/products/${id}`);
      this.fetchProducts();
    }
  }
});
