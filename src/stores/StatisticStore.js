import { defineStore } from "pinia";
import api from "../services/api";

export const useStatisticStore = defineStore("statistic", {
  state: () => ({
    stats: [],
    selectData: null,
  }),

  actions: {
      async fetchAllStatistics() {
      try {
        const  {data} = await api.get("/statistic/all");
        this.selectData = data;
      } catch (error) {
        console.error("Error cargando estadísticas:", error);
      }
    }

  }
});
