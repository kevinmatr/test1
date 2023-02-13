<template>
  <div class="container">
    <div class="title">
      <p>{{ topic.title }}</p>
    </div>
    <hr />
    <div class="word" v-html="topic.content"></div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { onActivated, onDeactivated } from "vue";
import { ref, onMounted } from "vue";

const topic = ref({});

const route = useRoute();

const getTopic = () => {
  let id = route.params.id;
  axios({
    url: "https://cnodejs.org/api/v1/topic/" + id,
    method: "get",
    params: {
      mdrender: true,
    },
  }).then((res) => {
    console.log(res, "详情数据");
    topic.value = res.data.data;
  });
};

onMounted(() => {
  getTopic();
});

onActivated(() => {
  getTopic();
});

onDeactivated(() => {
  topic.value = "";
});
</script>

<style scoped>
.title /deep/ {
  padding: 10px;
}
.title /deep/ p {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  display: inline-block;
  vertical-align: bottom;
  width: 75%;
  line-height: 130%;
  color: #333;
}
.word /deep/ img {
  width: 100%;
}
.word /deep/ {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 15px;
  line-height: 1.7em;
  word-break: break-all;
  color: #333;
}
</style>
