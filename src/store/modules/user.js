import { useRouter, useRoute } from "vue-router";
import router from "../../router";
import axios from "axios";

// const router = useRouter();

const state = {
  user: {},
};

const mutations = {
  set_user(state, user) {
    state.user = user;
  },
};

const actions = {
  login(store, userinfo) {
    axios({
      url: "http://114.116.29.103:3002/login",
      method: "post",
      data: userinfo,
    }).then((res) => {
      console.log(res);
      if (res.data.code == 200) {
        store.commit("set_user", res.data.data);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        alert("用户名或密码错误");
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  router,
};
