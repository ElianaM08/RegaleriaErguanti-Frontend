import { defineStore } from "pinia";
import api from "../services/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
  }),

  actions: {
    async register(name, email, password) {
      await api.post("/auth/register", { name, email, password });
    },

    async login(email, password) {
      const { data } = await api.post("/auth/login", { email, password });

      this.user = data.user;
      this.token = data.token;

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }
});