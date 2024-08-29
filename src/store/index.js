/** @format */

import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    selectedTeam: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setSelectedTeam(state, team) {
      state.selectedTeam = team;
    },
  },
  actions: {
    login({ commit }, user) {
      commit("setUser", user);
    },
    selectTeam({ commit }, team) {
      commit("setSelectedTeam", team);
    },
  },
});
