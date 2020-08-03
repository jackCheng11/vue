<template>
  <div id="app">
    <!-- 导航栏-begin -->
    <div class="header">
      <el-row style="margin-bottom: 0">
        <el-col :span="16">
          <el-menu class="nav-list" mode="horizontal">
            <el-menu-item style="padding: 0; margin: 0 20px" class="nav-item" index="1">
              <router-link to="/">Home</router-link>
            </el-menu-item>
            <el-menu-item style="padding: 0; margin: 0 20px" class="nav-item" index="2">
              <router-link to="/about">企业介绍</router-link>
            </el-menu-item>
            <el-menu-item style="padding: 0; margin: 0 20px" class="nav-item" index="3">
              <router-link to="/support">主营业务</router-link>
            </el-menu-item>
            <el-menu-item style="padding: 0; margin: 0 20px" class="nav-item" index="4">
              <router-link to="/blog">公司动态</router-link>
            </el-menu-item>
            <el-menu-item style="padding: 0; margin: 0 20px" class="nav-item" index="5">
              <router-link to="/infomation">工程案例</router-link>
            </el-menu-item>
            <el-menu-item style="padding: 0; margin: 0 20px" class="nav-item" index="6">
              <router-link to="/mine">联系我们</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="8">
          <img src="@/assets/image/logo.jpg" alt />
        </el-col>
      </el-row>
    </div>
    <!-- 导航栏-end -->
    <router-view></router-view>
    <div class="footer">
      <ul class="footer-option">
        <li class="footer-list">
          <h4>企业介绍</h4>
          <a class="ftxt" href>关于我们</a>
          <a class="ftxt" href>公司荣誉</a>
          <a class="ftxt" href>产品资质</a>
        </li>
        <li class="footer-list">
          <h4>主营业务</h4>
          <a class="ftxt" href>QDLio平台</a>
          <a class="ftxt" href>解决方案</a>
          <a class="ftxt" href>QDLIntegrate组态软件</a>
        </li>
        <li class="footer-list">
          <h4>公司动态</h4>
        </li>
        <li class="footer-list">
          <h4>工程案例</h4>
          <a class="ftxt" href>冶金</a>
          <a class="ftxt" href>工业</a>
          <a class="ftxt" href>医疗</a>
          <a class="ftxt" href>市政</a>
          <a class="ftxt" href>交通运输</a>
          <a class="ftxt" href>科研教育</a>
          <a class="ftxt" href>酒店商场</a>
          <a class="ftxt" href>建筑楼宇</a>
        </li>
        <li class="footer-list">
          <h4>联系我们</h4>
          <a class="ftxt" href>服务承诺</a>
          <a class="ftxt" href>联系我们</a>
          <a class="ftxt" href>人才招聘</a>
        </li>
      </ul>
      <div class="footer-txt">
        <p>武汉庆德隆电气有限公司 地址：湖北省武汉市东湖高新区光谷大道总部国际3# 电话：027-67849931</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  width: 1400px;
  margin: 0 auto;
}
.nav-item {
  display: block;
  padding: 0;
}
.nav-item > a {
  display: block;
  font-size: 16px;
}
/* footer-begin */
.footer {
  width: 1300px;
  margin: 0 auto;
  background-color: #cccccc;
}
.footer-option {
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer-list {
  width: 180px;
  float: left;
  margin-left: 66px;
  border-left: 1px solid black;
  padding-left: 10px;
}
.ftxt {
  display: block;
  font-size: 13px;
  padding: 3px 0;
  width: 80px;
}
h4 {
  color: #0289df;
}
.footer-txt > p {
  text-align: center;
  margin: 0;
  padding: 20px 0;
}
/* footer-end */
</style>
