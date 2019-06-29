<template>
  <el-table :data="userLsit" stripe style="width: 100%">
    <el-table-column prop="username" label="姓名" width="180"></el-table-column>
    <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
    <el-table-column prop="mobile" label="电话"></el-table-column>
    <el-table-column label="用户状态"></el-table-column>
    <el-table-column label="操作"></el-table-column>
  </el-table>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        userLsit: []
      }
    },
    created(){
      axios({
        url:'http://localhost:8888/api/private/v1/users',
        params:{
          pagenum:1,
          pagesize:5,
        },
        headers:{
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        console.log(res)
      })
    }
  }
</script>