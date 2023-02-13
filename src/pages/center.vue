<template>
  <div class="cnav">Node.js 入门</div>
  <el-input v-model="input.username" placeholder="Please input username" />
  <el-input v-model="input.password" placeholder="Please input password" />
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { onActivated, onDeactivated } from "vue";

onActivated(() => {
  // this.$ref.input.password = "";
  // console.log("reg onActivated,每次进来都执行一下");
});

onDeactivated(() => {
  input.value.password = "";
  // console.log("reg onDeactivated,每次离开都执行一下");
});

const input = ref({ username: "", password: "" });
</script>

<style scoped>
.cnav {
  display: flex;
  /* width: 100%; */
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  height: 20px;
}
</style>
