const state = {
  money: 100,
};

const mutations = {
  add_money(state, payload) {
    console.log(state, "aa");
    state.money += payload;
  },
  minus_money(state, payload) {
    state.money -= payload;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
