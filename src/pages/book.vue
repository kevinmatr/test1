<template>
  <div class="cnav">API</div>
  <p>现有金额：{{ store.state.money.money }}</p>
  <button @click="store.commit('money/add_money', 10000)">加钱！</button>
  <button @click="store.commit('money/minus_money', 10000)">扣钱</button>
  <p>住房情况：{{ store.getters.house }}</p>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
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
