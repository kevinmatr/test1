<template>
  <div class="container">
    <ul class="unav">
      <li
        v-for="item in topic"
        @click="changeTopic(item.tabdata)"
        :class="{ active: indexObj.tab === item.tabdata }"
      >
        {{ item.title }}
      </li>
    </ul>

    <div class="list" v-for="item in list">
      <img :src="item.author.avatar_url" />
      <span>
        <span>{{ item.reply_count }}</span>
        <span>/</span>
        <span>{{ item.visit_count }}</span>
      </span>
      <span>{{ item.tab }}</span>
      <router-link :to="'/cnodedet/' + item.id" class="linkk">{{
        item.title
      }}</router-link>
    </div>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      v-model:current-page="indexObj.page"
      :default-current-page="indexObj.page"
      v-model:page-size="indexObj.limit"
    />

    <!-- <div class="pages">
      <span
        v-for="page in 5"
        :class="{ active: indexObj.page == page }"
        @click="changePage(page)"
      >
        {{ page }}</span
      >
    </div> -->
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";

import axios from "axios";

export default {
  setup() {
    const list = ref([]);

    const topic = ref([
      {
        title: "全部",
        tabdata: "all",
      },
      {
        title: "精选",
        tabdata: "good",
      },
      {
        title: "分享",
        tabdata: "share",
      },
      {
        title: "问答",
        tabdata: "ask",
      },
      {
        title: "招聘",
        tabdata: "job",
      },
    ]);

    const indexObj = ref({
      page: 1,
      limit: 10,
      tab: "all",
    });

    const getData = () => {
      axios({
        url: "https://cnodejs.org/api/v1/topics",
        method: "get",
        params: indexObj.value,
      })
        .then((res) => {
          console.log(res, "list");
          list.value = res.data.data;
        })
        .catch((err) => {});
    };

    const changeTopic = (tabdata) => {
      indexObj.value.page = 1;
      indexObj.value.tab = tabdata;
    };

    const changePage = (page) => {
      indexObj.value.page = page;
    };

    onMounted(() => {
      getData();
    });

    watch(
      indexObj,
      () => {
        getData();
      },
      { deep: true }
    );

    return {
      list,
      indexObj,
      topic,
      changeTopic,
      changePage,
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.unav {
  display: flex;
  /* width: 100%; */
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.unav li {
  list-style: none;
  font-size: 14px;
  margin: 0 10px;
  color: #80bd01;
  padding: 3px 4px;
  cursor: pointer;
}
.unav li.active {
  background-color: #80bd01;
  border-radius: 3px;
  color: #fff;
}
.unav li:hover {
  color: #55538e;
}

.list {
  padding-right: 10px;
  /* width: 100%; */
  background: #fff;
  border-top: 1px solid #f0f0f0;
  color: #333;
  height: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.list > span:nth-of-type(1) {
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list > span:nth-of-type(2) {
  background: #999999;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
}

.list span span:nth-of-type(1) {
  color: #9e78c0;
  font-size: 14px;
  line-height: 2em;
}
.list span span:nth-of-type(2) {
  color: #333333;
  font-size: 12px;
  line-height: 2em;
}
.list span span:nth-of-type(3) {
  color: #b4b4b4;
  font-size: 10px;
  line-height: 2em;
}
.list a {
  color: #333;
  font-size: 16px;
  line-height: 30px;
  margin-left: 10px;
}
.list a:hover {
  color: #333;
  font-size: 16px;
  line-height: 30px;
}
.list:hover {
  background-color: #f5f5f5;
}
.list img {
  width: 30px;
  height: 30px;
}

.pages span.active {
  color: #80bd01;
}
.pages {
  display: flex;
  /* width: 100%; */
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
}
.pages span {
  color: #778087;
  padding: 4px 12px;
  line-height: 20px;
  border: 1px solid #ddd;
}
.pages span:hover {
  background-color: #f5f5f5;
}
.linkk {
  text-decoration: none;
  color: #333;
}
.linkk:hover {
  text-decoration: dashed;
}
</style>
