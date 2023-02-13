<script>
// 忽略后缀 vite
import todoo from "./components/todo.vue";
import pages from "./components/page.vue";
import { routes } from "./router";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { ref } from "vue";
export default {
  setup() {
    const r = ref([]);
    r.value = routes.filter((item) => item.meta.flag);

    const rside = ref([]);
    rside.value = routes.filter((item) => item.meta.rdisp);

    const clear = () => {
      localStorage.clear();
    };

    const route = useRoute();

    const path = computed(() => route.path);

    return {
      r,
      rside,
      clear,
      path,
    };
  },
};
</script>

<template>
  <div class="navwrapper" v-if="path != '/login'">
    <div class="nav">
      <img src="../../img/cnodejs_light.svg" alt="" />
      <ul class="menu">
        <li v-for="item in r" :key="item.path">
          <router-link
            tag="button"
            active-class="aaaa"
            exact
            :to="{ path: item.path }"
            >{{ item.meta.tit }}</router-link
          >
        </li>
        <!-- <button @click="clear">清除</button> -->
      </ul>
    </div>
  </div>
  <div class="containerwrapper">
    <div class="containera">
      <div class="left">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <keep-alive>
              <component :is="Component"> </component>
            </keep-alive>
          </transition>
        </router-view>
      </div>
      <div class="right">
        <router-view name="rightcontent"></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: 2s;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: 0.5s;
}

.aaaa {
  color: red;
}
a {
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
}
html {
  background: #f5f5f5;
}

.nav > img {
  width: 120px;
  height: auto;
}
.menu {
  /* display: flex; */
  align-items: center;
}

.navwrapper {
  width: 100%;
  background-color: #444444;
}
.containerwrapper {
  width: 100%;
  padding-top: 15px;
  box-sizing: border-box;
}
.containera {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.containera .left {
  width: 78%;
  min-height: 600px;
  background: #fff;
  border-radius: 3px 3px 0 0;
}
.containera .right {
  width: 20%;
  min-height: 600px;
  background: #fff;
  border-radius: 3px 3px 0 0;
}

.nav {
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: 50px;
  background-color: #444444;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 10px; */
}
.nav ul {
  display: flex;
  /* width: 20%; */
  /* margin: 0 auto; */
}
.nav ul li {
  list-style: none;
  margin: 10px;
}
.nav ul li a {
  color: #cccccc;
  font-size: 13px;
}
</style>
