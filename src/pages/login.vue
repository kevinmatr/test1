<template>
  <div class="loginn">
    <p>{{ store.state.user }}</p>
    <p>用户名：<input type="text" v-model="user.username" /></p>
    <p>密码：<input type="text" v-model="user.password" /></p>
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";

const user = ref({ username: "", password: "" });

const router = useRouter();
const route = useRoute();
const store = useStore();

const login = () => {
  store.dispatch("user/login", user.value);
};
// const login = () => {
//   axios({
//     url: "http://114.116.29.103:3002/login",
//     method: "post",
//     data: user.value,
//   }).then((res) => {
//     console.log(res);
//     if (res.data.code === 200) {
//       localStorage.setItem("login", JSON.stringify(res.data.data));
//       router.push(route.query.redirect || "/");
//     }
//   });
// };
</script>

<style scoped></style>
