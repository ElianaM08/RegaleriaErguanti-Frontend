import { defineStore } from "pinia";
import api from "../services/api";

export const useStatisticStore = defineStore("statistics", {
  state: () => ({
    stats: null,
  }),

  actions: {
    async fetchStatistics(userId) {
      const { data } = await api.get(`/statistics/${userId}`);
      this.stats = data;
    }
  }
});
