<template>
  <el-table :data="userLsit" stripe style="width: 100%">
    <el-table-column prop="username" label="姓名" width="180"></el-table-column>
    <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
    <el-table-column prop="mobile" label="电话"></el-table-column>

    <el-table-column label="用户状态">
      <template v-slot="{row}">
        <el-switch v-model="row.type" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <el-button type="primary" plain size="mini" icon="el-icon-edit"></el-button>
      <el-button type="danger" plain size="mini" icon="el-icon-delete"></el-button>
      <el-button type="success" plain size="mini">角色分配</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userLsit: []
    };
  },
  created() {
    axios({
      url: "http://localhost:8888/api/private/v1/users",
      params: {
        pagenum: 1,
        pagesize: 5
      },
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      console.log(res);
      let {
        data: { data, meta }
      } = res;
      this.userLsit = data.users;
    });
  }
};
</script>