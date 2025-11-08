import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    selectedProduct: null,
  }),

  actions: {
    async fetchProducts() {
      const res = await axios.get("http://localhost:3000/api/products");
      this.products = res.data;
    },

    async fetchProductById(id) {
      const res = await axios.get(`http://localhost:3000/api/products/${id}`);
      this.selectedProduct = res.data;
    },

    async createProduct(product) {
      await axios.post("http://localhost:3000/api/products", product);
      await this.fetchProducts();
    },

    async updateProduct(id, product) {
      await axios.put(`http://localhost:3000/api/products/${id}`, product);
      await this.fetchProducts();
    },

    async deleteProduct(id) {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      await this.fetchProducts();
    }
  }
});
