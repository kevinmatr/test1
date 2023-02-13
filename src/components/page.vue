<template>
  <div class="contain">
    <div>{{ content[publici].con }}</div>
    <ul>
      <li
        v-for="(item, index) in tab"
        :key="item.id"
        @click="changetab(index)"
        :class="index === publici ? 'on' : ''"
      >
        {{ item.section }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const tab = ref([
      {
        id: 1,
        section: "首页",
      },
      {
        id: 2,
        section: "发现",
      },
      {
        id: 3,
        section: "购物车",
      },
      {
        id: 4,
        section: "我的",
      },
    ]);

    const content = ref([
      {
        cid: 1,
        con: "我是首页",
      },
      {
        cid: 2,
        con: "我是发现",
      },
      {
        cid: 3,
        con: "我是购物车",
      },
      {
        cid: 4,
        con: "我是我的",
      },
    ]);
    const publici = ref(0);
    const changetab = (index) => {
      publici.value = index;
    };
    watch: {
    }

    return {
      tab,
      content,
      publici,
      changetab,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
ul {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
li {
  flex: 1;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  color: #333;
  cursor: pointer;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}
.on {
  background-color: pink;
  color: #fff;
}
</style>
