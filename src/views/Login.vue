<template>
  <!-- er-row 这个组件相当于div 这个组件是用来做布局的 -->
  <!-- type 是布局格式 -->
  <!-- justify 是用来设置水平对齐方式的 -->
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <!-- el-col 布局组件 列组件 -->
    <!-- span 属性是用来设置当前列所占的格数 -->
    <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
      <el-form
        ref="Loginform"
        :rules="formRules"
        :model="form"
        label-width="80px"
        label-position="top"
        class="form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('Loginform')">登陆</el-button>
          <el-button @click="resetForm('Loginform')">重置</el-button>
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
      },
      formRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min:5,
            max:12,
            message:'用户名必须5-12字符之间',
            trigger:'change'
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min:6,
            max:12,
            message:'密码必须是6-12位',
            trigger:'change'
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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