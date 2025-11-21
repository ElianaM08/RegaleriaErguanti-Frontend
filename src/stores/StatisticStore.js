import { defineStore } from "pinia";
import api from "../services/api";

export const useStatisticStore = defineStore("statistic", {
  state: () => ({
    stats: null,
  }),

  actions: {
    async fetchStatistics(user) {
      const { data } = await api.get(`/statistic/user/${user}`);
      this.stats = data;
    }
  }
});
