<template>
  <el-container class="box">
    <el-header>
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="6">
          <img src="./../assets/logo.png" alt />
        </el-col>
        <el-col>
          <h1>品优购后台管理系统</h1>
        </el-col>
        <el-col :span="6" class="header-right">
          <div>
            39期会员管理
            <a href="#">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-openeds="$router.path"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/user">
              <i class="el-icon-menu"></i>
              <span>用户管理</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span>分类参数</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span>商品分类</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span>订单列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span>数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-container {
  height: 100%;
  padding: 0;
  margin: 0;
}

.el-container .el-header {
  background-color: skyblue;
  padding: 0;
  margin: 0;
}

.el-container .el-header h1 {
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 60px;
  color: aliceblue;
}

.el-container .el-header img {
  width: 200px;
}

.el-container .el-header div a {
  color: orange;
  /* display: none; */
}

.el-aside {
  background-color: hotpink;
}

.header-right {
  font-weight: bolder;
  text-align: right;
  padding-right: 10px;
}

.el-menu-vertical-demo.el-menu {
  height: 100%;
}
</style>