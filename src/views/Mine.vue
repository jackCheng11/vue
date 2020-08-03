<template>
  <div class="mine">
    <div class="about-banner">
      <img src="@/assets/image/1-1FP2224232O2.jpg" alt />
    </div>
    <div class="mine-main">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <img src="@/assets/image/lxwmbar.jpg" alt />
      </el-radio-group>

      <el-tabs :tab-position="tabPosition" style="margin-left: 200px">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data(){
    return {
      tabPosition: "left"
    }
  }
};
</script>

<style>
.mine-main{
  margin-top: 20px;
}
</style>