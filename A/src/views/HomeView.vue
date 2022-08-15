<template>
  <div class="home">
    <el-container>
      <el-header>
        <img src="../../../大头图.jpg" class="img">
        <ul>
          <li><i class="el-icon-user-solid"></i> 用户</li>
          <li><i class="el-icon-user-solid"></i> 教学</li>
          <li><i class="el-icon-user-solid"></i> 题库</li>
          <li><i class="el-icon-user-solid"></i> 运营</li>
          <li><i class="el-icon-user-solid"></i> 营销</li>
          <li><i class="el-icon-user-solid"></i> 商品</li>
          <li><i class="el-icon-user-solid"></i> 财务</li>
          <li><i class="el-icon-user-solid"></i> 统计</li>
          <li><i class="el-icon-user-solid"></i> 系统</li>
        </ul>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu  class="el-menu-vertical-demo" background-color="#fff" text-color="balck"
            active-text-color="blue" router>
            <el-menu-item index="xue">学员管理</el-menu-item>
          </el-menu>
          <el-menu class="el-menu-vertical-demo" background-color="#fff" text-color="balck"
            active-text-color="blue" router>
            <el-menu-item index="jiang">讲师管理</el-menu-item>
          </el-menu>
          <el-menu  class="el-menu-vertical-demo" background-color="#fff" text-color="balck"
            active-text-color="blue" router>
            <el-menu-item index="zhu">助教管理</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>


export default {

}
</script>
<style>
ul {
  display: flex;
  list-style: none;
  margin-left: 50px;
}

li {
  padding: 0px 30px;
  color: white;
}

.img {
  height: 50px;
}

.el-header {
  background-color: rgb(61, 61, 245);
  color: #333;
  display: flex;
}
.el-menu{
  width: 200px;
}

</style>
