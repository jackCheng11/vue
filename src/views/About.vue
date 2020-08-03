<template>
  <div class="about-content">
    <div class="about-banner">
      <img src="@/assets/image/aboutone.jpg" alt />
    </div>
    <div class="about-main">
      <template>
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
          <img src="@/assets/image/qybar.jpg" alt />
        </el-radio-group>

        <el-tabs :tab-position="tabPosition" style="margin-left: 225px">
          <el-tab-pane label="关于我们">
            <h3>关于我们</h3>
            <p>武汉庆德隆电气有限公司成立于2007年，是提供物联网平台、组态软件、自动化系统集成解决方案供应商。</p>
            <p>公司围绕先进技术在交通运输、工业控制、智能建筑领域的需求，实事求是、与时俱进。公司研发的物联网平台、QDL Integrate组态软件、物联网网关、高低压监控模块等已经广泛应用于电力、冶金、铁路、公路、制药、石化、建筑、医院、酒店等诸多领域。</p>
            <p>随着公司十多年的发展，公司已经完成数百个监控、预警、节能、自动化工程，目前拥有：渝昆、渝黔、兰渝铁路、G45、G50、G70高速、南水北调等一大批国家重点大型工程。</p>
            <h5>业务领域</h5>
            <p>物联网平台</p>
            <p>电力监控系统</p>
            <p>能耗管理系统</p>
            <p>设备管理系统</p>
            <p>智能照明系统</p>
            <p>自动化系统集成</p>
            <p>...</p>
          </el-tab-pane>
          <el-tab-pane label="公司荣誉">
            <img src="@/assets/image/1-1F625132631J4.jpg" alt="">
          </el-tab-pane>
          <el-tab-pane label="产品资质">角色管理</el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      tabPosition: "left"
    };
  }
};
</script>

<style>
.about-content {
  width: 1400px;
  height: auto;
}
.about-main {
  margin-top: 20px;
}
.about-banner > img {
  display: block;
  width: 1400px;
  height: 300px;
}
</style>