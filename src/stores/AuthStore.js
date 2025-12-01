import { defineStore } from "pinia";
import api from "../services/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === "admin",
  },

  actions: {    
    setAuth(user, token) {
      this.user = user;
      this.token = token;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    loadFromLocalStorage() {
      this.user = JSON.parse(localStorage.getItem("user")) || null;
      this.token = localStorage.getItem("token") || null;
    },

    async register(name, email, password) {
      await api.post("/auth/register", { name, email, password });
    },

   async login(email, password) {
      const response = await api.post("/auth/login", { email, password });

      const { user, token } = response.data;

      this.user = user;
      this.token = token;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      return user; 
    }

  }
});