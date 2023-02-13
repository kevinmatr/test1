<template>
  <div class="todo">
    <div>
      <Input placeholder="请添加" @enter="addTodos"></Input>
    </div>
    <h2>未完成 {{ todos_start.length }}</h2>
    <ul>
      <li v-for="item in todos_start" :key="item.id">
        <input type="checkbox" v-model="item.done" />
        <span>{{ item.content }}</span>
        <b @click="del(item.id)">X</b>
      </li>
    </ul>

    <h2>已完成 {{ todos_end.length }}</h2>
    <ul>
      <li v-for="item in todos_end" :key="item.id">
        <input type="checkbox" v-model="item.done" />
        <span>{{ item.content }}</span>
        <b @click="del(item.id)">X</b>
      </li>
    </ul>

    <p>n:{{ n }}</p>
    <button @click="n += 1">n++</button>
  </div>
</template>

<script>
/***
 *  mock
 *
 *
 */
import { ref, computed, watch } from "vue";
import Input from "../components/Search.vue";
export default {
  components: {
    Input,
  },
  //   data() {
  //     return {
  //       // 未完成  done=false
  //       //   todos_start: [],
  //       // 已完成  done =true
  //       //   todos_end: [],
  //     };
  //   },
  // 监听
  //   watch: {
  //     todos: {
  //       handler() {
  //         this.todos_start = this.todos.filter((item) => !item.done);
  //         this.todos_end = this.todos.filter((item) => item.done);
  //       },
  //       deep: true,
  //       immediate: true, //初次就执行  默认初次不执行
  //     },
  //   },

  // 计算属性
  //   computed: {
  //     todos_start() {
  //       // 使用改变就执行
  //       //
  //       return this.todos.filter((item) => !item.done);
  //     },
  //     todos_end() {
  //       return this.todos.filter((item) => item.done);
  //     },
  //   },
  setup() {
    let n = ref(0);
    let todos = ref([
      {
        id: 1,
        content: "aaaa",
        done: false, //未完成
      },
      {
        id: 2,
        content: "bbb",
        done: true, //已完成
      },
    ]);

    const addTodos = (value) => {
      //   console.log(value, "value");

      // 判断 filter  some()
      //
      const haha = todos.value.filter((item) => item.content == value);
      console.log(value);
      if (haha.length == 0 && value.length != 0 && value != " ") {
        todos.value.push({
          id: Date.now(),
          content: value,
          done: false,
        });
      } else if (value.length === 0) {
        alert("鬼");
      } else if (value === " ") {
        alert("空什么格");
      } else {
        alert("别输入重复的！");
      }
    };
    const del = (id) => {
      // comfirm()
      todos.value = todos.value.filter((item) => item.id !== id);
    };

    const todos_start = computed(() =>
      todos.value.filter((item) => !item.done)
    );
    const todos_end = computed(() => todos.value.filter((item) => item.done));

    // watch(
    //   todos,
    //   () => {
    //     console.log("okok--watch");
    //   },
    //   { deep: true, immediate: true }
    // );
    return {
      todos,
      addTodos,
      todos_start,
      todos_end,
      n,
      del,
    };
  },
};
</script>

<style scoped>
.todo {
  padding: 20px;
  border: 1px solid #999;
}
li {
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: space-between;
}
</style>
