<template>
  <div class="cnav">关于</div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Date" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Name" width="180">
      <template #default="scope">
        <el-tag>{{ scope.row.name }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { Timer } from "@element-plus/icons-vue";

const handleDelete = (index, row) => {
  ElMessageBox.confirm("删除不？", "一级警报！", {
    confirmButtonText: "赶紧的！",
    cancelButtonText: "打咩",
    type: "warning",
  })
    .then(() => {
      tableData.value.splice(index, 1);

      ElMessage({
        type: "success",
        message: "删掉了",
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "不删了",
      });
    });
};

const tableData = ref([
  {
    date: "2016-05-03",
    name: "呼呼",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "哈哈",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "嘻嘻",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "呵呵",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
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

.tabb {
  margin: 0 auto;
}
</style>
