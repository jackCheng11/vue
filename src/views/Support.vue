<template>
  <div class="support">
    <div class="about-banner">
      <img src="@/assets/image/1-1FP2224120240.jpg" alt />
    </div>
    <div class="support-main">
      <template>
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
          <img src="@/assets/image/nxbar.jpg" alt />
        </el-radio-group>
        <el-tabs :tab-position="tabPosition" style="margin-left: 150px">
          <el-tab-pane label="QDLIiT平台">QDLIiT平台</el-tab-pane>
          <el-tab-pane label="设备管理">设备管理</el-tab-pane>
          <el-tab-pane label="消防监控">消防监控</el-tab-pane>
          <el-tab-pane label="饮水安全">饮水安全</el-tab-pane>
          <el-tab-pane label="电力运维">电力运维</el-tab-pane>
          <el-tab-pane label="解决方案">解决方案</el-tab-pane>
          <el-tab-pane label="电力监控">电力监控</el-tab-pane>
          <el-tab-pane label="水处理">水处理</el-tab-pane>
          <el-tab-pane label="空调监控">空调监控</el-tab-pane>
          <el-tab-pane label="动力监控">动力监控</el-tab-pane>
          <el-tab-pane label="机房监控">机房监控</el-tab-pane>
          <el-tab-pane label="能源监控">能源监控</el-tab-pane>
          <el-tab-pane label="QDLIntegra组态软件">QDLIntegra组态软件</el-tab-pane>
          <el-tab-pane label="QDLIntegra组态软件">定时任务补偿</el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "support",
  data(){
    return {
      tabPosition: "left"
    }
  }
};
</script>

<style>
.support {
  width: 1400px;
  margin: 0 auto;
  overflow: hidden;
  height: auto;
}
.support-main{
  margin-top: 20px;
}
</style>