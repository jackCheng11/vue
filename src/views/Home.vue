<template>
  <div id="home">
    <!-- 轮播图-begin -->

    <div class="banner">
      <div class="block">
        <el-carousel>
          <el-carousel-item v-for="item in items" :key="item.id">
            <img :src="item.img" class="small" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 轮播图-end -->
    <!-- 简介-begin -->
    <div class="main">
      <el-row>
        <el-col :span="9">
          <div class="main-item">
            <div class="main-title">
              <strong>关于我们</strong>
              <a class="more" href></a>
            </div>
            <div class="main-text">
              <img class="about" src="@/assets/image/about.jpg" alt />
              <p class="in2">武汉庆德隆电气有限公司成立于2007年，是提供物联网平台、组态软件、自动化系统集成解决方案供应商。</p>
              <p
                class="in2"
              >公司围绕先进技术在交通运输、工业控制、智能建筑领域的需求，实事求是、与时俱进。公司研发的物联网平台、QDL Integrate组态软件、物联网网关、高低压监控模块等已经广泛应用</p>
            </div>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="main-item">
            <div class="main-title">
              <strong>联系我们</strong>
              <a class="more" href></a>
            </div>
            <div class="main-text">
              <img class="contact" src="@/assets/image/contact.jpg" alt />
              <span class="text">电话：027-67849931</span>
              <span class="text">传真：027-67849932</span>
              <span class="text">联系人：王经理</span>
              <span class="text">联系电话：13037163202</span>
              <span class="text">地址：湖北省武汉市光谷大道62号</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="main-aside">
            <div class="main-title">
              <strong>联系我们</strong>
              <a class="more" href></a>
            </div>
            <div class="main-text">
              <ul class="text-list">
                <li class="text-item">
                  <a class="text-bg" href>南昌大学附属医院电力监控系统</a>
                  <span class="datatime">2020-06</span>
                </li>
                <li class="text-item">
                  <a class="text-bg" href>南昌大学附属医院电力监控系统</a>
                  <span class="datatime">2020-06</span>
                </li>
                <li class="text-item">
                  <a class="text-bg" href>南昌大学附属医院电力监控系统</a>
                  <span class="datatime">2020-06</span>
                </li>
                <li class="text-item">
                  <a class="text-bg" href>南昌大学附属医院电力监控系统</a>
                  <span class="datatime">2020-06</span>
                </li>
                <li class="text-item">
                  <a class="text-bg" href>南昌大学附属医院电力监控系统</a>
                  <span class="datatime">2020-06</span>
                </li>
                <li class="text-item">
                  <a class="text-bg" href>南昌大学附属医院电力监控系统</a>
                  <span class="datatime">2020-06</span>
                </li>
                <li class="text-item">
                  <a class="text-bg" href>南昌大学附属医院电力监控系统</a>
                  <span class="datatime">2020-06</span>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 简介-end -->
    <!-- 主营业务-begin -->
    <div class="content">
      <div class="content-item">
        <h1>主营业务</h1>
        <p class="toptxt">Main business</p>
        <ul class="option">
          <li class="option-list">
            <div class="option-list-text">
              <p class="lt">QDLlo平台</p>
              <p class="lts">QDLloT platform</p>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
          </li>
          <li class="option-list">
            <div class="option-list-text">
              <p class="lt">QDLlo平台</p>
              <p class="lts">QDLloT platform</p>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
          </li>
          <li class="option-list" style="margin-bottom: 0">
            <div class="option-list-text">
              <p class="lt">QDLlo平台</p>
              <p class="lts">QDLloT platform</p>
            </div>
            <div class="option-list-img">
              <a class="tgs" href>
                <img src="@/assets/image/1-1FP2232629409.png" alt />
                <p class="img-txt">设备管理</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-item">
        <h1>工程案例</h1>
        <p class="toptxt">Projects</p>
        <ul class="option">
          <li class="option-listImg">
            <img class="gcal" src="@/assets/image/gcal.png" alt usemap="#mapgcal" />
            <map name="mapgcal" id="mapgcal">
              <area shape="circle" coords="93, 84, 75" href alt />
              <area shape="circle" coords="297, 84, 75" href alt />
              <area shape="circle" coords="492, 84, 75" href alt />
              <area shape="circle" coords="712, 84, 75" href alt />
              <area shape="circle" coords="99, 269, 75" href alt />
              <area shape="circle" coords="297, 269, 75" href alt />
              <area shape="circle" coords="492, 270, 75" href alt />
              <area shape="circle" coords="712, 269, 75" href alt />
            </map>
          </li>
        </ul>
      </div>
      <div class="content-item">
        <ul class="newOption">
          <li class="newList">
            <a href>
              <img class="FR" src="@/assets/image/1-1FR41620043X.png" alt />
              <p class="tt">武重集团</p>
            </a>
          </li>
          <li class="newList">
            <a href>
              <img class="FR" src="@/assets/image/1-1FR41620043X.png" alt />
              <p class="tt">武重集团</p>
            </a>
          </li>
          <li class="newList">
            <a href>
              <img class="FR" src="@/assets/image/1-1FR41620043X.png" alt />
              <p class="tt">武重集团</p>
            </a>
          </li>
          <li class="newList">
            <a href>
              <img class="FR" src="@/assets/image/1-1FR41620043X.png" alt />
              <p class="tt">武重集团</p>
            </a>
          </li>
          <li class="newList">
            <a href>
              <img class="FR" src="@/assets/image/1-1FR41620043X.png" alt />
              <p class="tt">武重集团</p>
            </a>
          </li>
          <li class="newList">
            <a href>
              <img class="FR" src="@/assets/image/1-1FR41620043X.png" alt />
              <p class="tt">武重集团</p>
            </a>
          </li>
          <li class="newList">
            <a href>
              <img class="FR" src="@/assets/image/1-1FR41620043X.png" alt />
              <p class="tt">武重集团</p>
            </a>
          </li>
          <li class="newList">
            <a href>
              <img class="FR" src="@/assets/image/1-1FR41620043X.png" alt />
              <p class="tt">武重集团</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 主营业务-end -->
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      items: [
        { id: 0, img: require("../assets/image/lb1.jpg") },
        { id: 1, img: require("../assets/image/lb2.jpg") },
        { id: 2, img: require("../assets/image/lb3.jpg") },
        { id: 3, img: require("../assets/image/lb4.jpg") }
      ]
    };
  }
};
</script>

<style>
#home {
  width: 100%;
  margin: 0 auto;
  padding: 0 0 30px 0;
}
.banner,
.small,
.el-carousel {
  width: 100%;
  height: 100%;
  display: block;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.main {
  width: 1350px;
  margin: 0 auto;
}
.syn,
.elec {
  text-align: center;
  float: left;
  margin-right: 17px;
}
.about,
.contact {
  width: 460px;
  height: 155px;
}
/* main-begin */
.main {
  margin-top: 15px;
}
.main-item {
  width: 480px;
  font-size: 14px;
  float: left;
}
.main-title {
  border-bottom: 1px solid #cccccc;
  height: 41px;
  line-height: 40px;
}
strong {
  float: left;
  width: 60px;
  height: 42px;
  line-height: 40px;
  border-bottom: 2px solid #0289df;
  color: #0289df;
}
.more {
  width: 40px;
  height: 13px;
  float: right;
  background: url("../assets/image/more.gif") no-repeat left center;
  margin-top: 10px;
}
.about,
.contact {
  display: block;
  width: 480px;
  height: 180px;
  margin-top: 9px;
}
.in2 {
  text-indent: 24px;
  margin-bottom: 0;
}
.text {
  display: block;
  margin: 4px 0;
}
.main-aside {
  width: 337px;
  font-size: 14px;
}
.text-list {
  margin-top: 15px;
  padding: 0;
  list-style: none;
}
.text-item {
  background: url("../assets/image/78.gif") no-repeat left center;
  height: 32px;
  margin: 10px 0;
  line-height: 32px;
  border-bottom: 1px dashed #cccccc;
}
.text-bg {
  text-decoration: none;
  color: black;
  font-size: 15px;
  margin-left: 15px;
}
.datatime {
  float: right;
}
/* main-end */

/* content-begin */
.content {
  width: 1300px;
  margin: 0 auto;
  background-color: #f7f7f7;
}
h1,
.toptxt {
  text-align: center;
  color: #0289df;
  margin: 0;
}
.toptxt {
  margin-top: 8px;
  font-size: 18px;
}
.option {
  padding: 0;
  list-style: none;
  overflow: hidden;
}
.option-list {
  display: block;
  height: 148px;
  margin-bottom: 40px;
  overflow: hidden;
  border-bottom: 1px dashed #888888;
  /* border: 1px solid red; */
}
.option-list-text,
.option-list-img {
  /* display: inline-block; */
  float: left;
}
.option-list-text {
  margin-block: 25px;
  margin-left: 70px;
  /* outline: 1px solid red; */
}
.lt,
.lts {
  color: #0289df;
  line-height: 35px;
  margin: 0;
}
.lt {
  font-size: 28px;
}
.lts {
  font-size: 14px;
}
.tgs {
  text-decoration: none;
  color: black;
  display: block;
}
.option-list-img {
  margin: 0 25px;
}
.option-list-img > a > img {
  display: block;
  width: 80px;
  height: 80px;
}
.img-txt {
  font-size: 12px;
  text-align: center;
  margin-top: 7px;
}
.option-listImg {
  width: 100%;
  overflow: hidden;
}
.gcal {
  display: block;
  width: 800;
  height: 350px;
  margin: 0 auto;
}
.newOption {
  margin: 50px 0 0 0;
  padding: 0;
  list-style: none;
}
.newList {
  width: 220px;
  text-align: center;
  display: inline-block;
  margin-left: 90px;
}
.FR {
  display: block;
  width: 220px;
}
.tt {
  margin: 0;
  width: 220px;
}

/* content-end */


</style>