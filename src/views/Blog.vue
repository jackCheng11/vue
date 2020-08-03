<template>
  <div class="blog">
    <div class="about-banner">
      <img src="@/assets/image/1-1Q220205104950.jpg" alt />
    </div>
    <div class="blog-content">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <img src="@/assets/image/newsbar.jpg" alt />
      </el-radio-group>
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="用户管理">
          <el-row>
            <el-col class="el_col" :span="6" v-for="(item, index) in items" :key="index">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.imgURL" class="image" />
                <div style="padding: 14px;">
                  <span class="os">{{item.name}}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ item.text }}</time>
                    <el-button type="text" class="button" @click="hook(item.id)">查看详情</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="配置管理">
          <el-row>
            <el-col class="el_col" :span="6" v-for="(item, index) in items" :key="index">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.imgURL" class="image" />
                <div style="padding: 14px;">
                  <span class="os">{{item.name}}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ item.text }}</time>
                    <el-button type="text" class="button" @click="hook(item.id)">查看详情</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="角色管理">
          <el-row>
            <el-col class="el_col" :span="6" v-for="(item, index) in items" :key="index">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.imgURL" class="image" />
                <div style="padding: 14px;">
                  <span class="os">{{item.name}}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ item.text }}</time>
                    <el-button type="text" class="button" @click="hook(item.id)">查看详情</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿">
          <el-row>
            <el-col class="el_col" :span="6" v-for="(item, index) in items" :key="index">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.imgURL" class="image" />
                <div style="padding: 14px;">
                  <span class="os">{{item.name}}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ item.text }}</time>
                    <el-button type="text" class="button" @click="hook(item.id)">查看详情</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      tabPosition: "top",
      currentDate: new Date().toDateString(),
      items: [
        {
          id: 0,
          name: "苹果",
          text: "qwerrqwr",
          imgURL: require("../assets/image/1-200604132439A0.jpg")
        },
        {
          id: 1,
          name: "香蕉",
          text: "qwerrqwr",
          imgURL: require("../assets/image/1-19120612124JS.jpg")
        },
        {
          id: 1,
          name: "香蕉",
          text: "qwerrqwr",
          imgURL: require("../assets/image/1-19120612124JS.jpg")
        },
        {
          id: 1,
          name: "香蕉",
          text: "qwerrqwr",
          imgURL: require("../assets/image/1-19120612124JS.jpg")
        },
        {
          id: 1,
          name: "香蕉",
          text: "qwerrqwr",
          imgURL: require("../assets/image/1-19120612124JS.jpg")
        },
        {
          id: 1,
          name: "香蕉",
          text: "qwerrqwr",
          imgURL: require("../assets/image/1-19120612124JS.jpg")
        },
        {
          id: 1,
          name: "香蕉",
          text: "qwerrqwr",
          imgURL: require("../assets/image/1-19120612124JS.jpg")
        },
        {
          id: 1,
          name: "香蕉",
          text: "qwerrqwr",
          imgURL: require("../assets/image/1-19120612124JS.jpg")
        },
        {
          id: 1,
          name: "香蕉",
          text: "qwerrqwr",
          imgURL: require("../assets/image/1-19120612124JS.jpg")
        }
      ]
    };
  },
  methods: {
    hook(id){
      console.log(id)
    }
  }
};
</script>

<style>
.blog {
  width: 1400px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
}
.blog-content {
  margin: 10px;
  padding: 40px;
  border: 1px solid #cccccc;
  box-shadow: 2px 1px 6px 1px #cccccc;
}
.image {
  display: block;
  width: 300px;
}
.time {
  font-size: 13px;
  color: #999;
}
.el_col {
  margin-left: 6.2%;
  margin-top: 20px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.os {
  display: block;
  height: 20px;
}
</style>