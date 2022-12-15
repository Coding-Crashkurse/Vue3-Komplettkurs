import { defineStore } from "pinia";

export const nameStore = defineStore("store", {
  state: () => ({
    age: 35,
    name: "Markus",
  }),
  actions: {
    increaseAge() {
      this.age++;
    },
  },
  getters: {
    tooOld: (state) => {
      if (state.age > 40) {
        return "too old";
      }
      return "not too old yet";
    },
  },
});
