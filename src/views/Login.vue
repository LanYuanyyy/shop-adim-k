<template>
  <!-- er-row 这个组件相当于div 这个组件是用来做布局的 -->
  <!-- type 是布局格式 -->
  <!-- justify 是用来设置水平对齐方式的 -->
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <!-- el-col 布局组件 列组件 -->
    <!-- span 属性是用来设置当前列所占的格数 -->
    <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
      <el-form ref="form" :model="form" label-width="80px" label-position="top" class="form">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
.row-bg {
  height: 100%;
  background-color: skyblue;
}
.form {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 20px;
  min-width: 400px;
}
</style>