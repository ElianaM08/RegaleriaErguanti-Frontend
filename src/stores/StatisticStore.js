import { defineStore } from "pinia";
import api from "../services/api";

export const useStatisticStore = defineStore("statistic", {
  state: () => ({
    stats: null,
  
  }),

  actions: {
      async fetchAllStatistics() {
      try {
        const  {data} = await api.get("/statistic/me");
        this.stats = data;
      } catch (error) {
        console.error("Error cargando estadísticas:", error);
      }
    }

  }
});
