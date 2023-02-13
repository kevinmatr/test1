import { createStore } from "vuex";
import axios from "axios";
import router from "../router";
import c from "vuex-persistedstate";
import user from "../store/modules/user.js";
import money from "../store/modules/money.js";

// 存储数据
// const state = {
//   // money: 10001,
//   // user: {},
// };

// const mutations = {
//   set_user(state, user) {
//     state.user = user;
//   },
//   add(state, payload = 1000) {
//     state.money += payload;
//   },
//   minus(state, payload = 1000) {
//     state.money -= payload;
//   },
// };

// const getters = {
//   // house: (state) => (state.money >= 80000 ? "买房" : "租房"),
// };

// const actions = {
//   add_payl(store, payload) {
//     store.commit("add", payload);
//   },
//   minus_payl(store, payload) {
//     store.commit("minus", payload);
//   },
//   login(store, userinfo) {
//     axios({
//       url: "http://114.116.29.103:3002/login",
//       method: "post",
//       data: userinfo,
//     }).then((res) => {
//       console.log(res);
//       if (res.data.code == 200) {
//         store.commit("set_user", res.data.data);
//         setTimeout(() => {
//           router.push("/");
//         }, 2000);
//       } else {
//         alert("用户名或密码错误");
//       }
//     });
//   },
// };

// const modules = {
//   user,
//   money,
// };

// const store = createStore({
//   state,
//   mutations,
//   getters,
//   actions,
//   plugins: [
//     c({
//       key: "abc",
//       storage: window.sessionStorage,
//       reducer(state) {
//         return {
//           user: state.user,
//           money: state.money,
//         };
//       },
//     }),
//   ],
// });

export default createStore({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    user,
  },
  plugins: [
    c({
      key: "abc",
      storage: window.sessionStorage,
      reducer(state) {
        return {
          user: state.user,
        };
      },
    }),
  ],
});
