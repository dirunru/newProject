<template>
  <div>
    <el-container>
      <el-header>{{LocationCity}}</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/HelloWorld">bootstrap</el-menu-item>
                <el-menu-item index="/practice_one">JSON字符串获取值</el-menu-item>
                <el-menu-item index="/fullCreeen">全屏和退出全屏</el-menu-item>
                <el-menu-item index="/vueMap">vue项目使用地图</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航二</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/getMap">获取经纬度</el-menu-item>
                <el-menu-item index="">待定</el-menu-item>
                <el-menu-item index="">待定</el-menu-item>
                <el-menu-item index="">待定</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        LocationCity: '正在定位~'
      };
    },
    created() {

    },
    mounted() {
      this.city();
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      city() { //定义获取城市方法
        const geolocation = new BMap.Geolocation();
        var _this = this
        geolocation.getCurrentPosition(function getinfo(position) {
          let province = position.address.province; //获取省份信息
          let city = position.address.city|| ''; //获取城市信息
          let area = position.address.district || '';//区
          let street = (position.address.street || '') + (position.address.streetNumber || '') // 街道
          _this.LocationCity = province + city + area + street + '街道';
        }, function (e) {
          _this.LocationCity = "定位失败"
        }, {
          provider: 'baidu'
        });
      }
    }
  }

</script>
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100vh;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

</style>
