<template>
  <input
    :placeholder="placeholder"
    :style="style"
    type="text"
    v-model="value"
    @input="$emit('change1', value)"
    @keydown.enter="trans"
  />
</template>

<script>
// import { object } from "prop-types";

export default {
  data() {
    return {
      value: "",
    };
  },
  props: {
    style: {
      type: Object,
      default: () => ({}), //默认值
    },
    placeholder: {
      type: String,
      default: "请输入..",
    },
  },
  methods: {
    trans() {
      this.$emit("enter", this.value);
      this.value = "";
    },
  },
};
</script>

<style scoped>
input {
  width: 50vw;
  height: 30px;
  border: 1px solid blue;
  border-radius: 6px;
  padding-left: 10px;
}
</style>
