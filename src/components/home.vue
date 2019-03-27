<template>
  <div>
    <el-container>
      <el-header class="homeHead">{{LocationCity}}</el-header>
      <el-container>
        <el-scrollbar class="slider">
          <el-aside>
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
                  <el-menu-item index="/getMap">获取经纬度</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>导航二</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/vueTable">vueTabel集合封装</el-menu-item>
                  <el-menu-item index="/eleCalendar">eleCalendar日历组件</el-menu-item>
                  <el-menu-item index="/activeAdd">动态添加输入框</el-menu-item>
                  <el-menu-item index="/eleForm">动态添加placeholder</el-menu-item>
                  <el-menu-item index="/tabSwitch">vue tabs切换组件封装</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/textCopy">textCopy文本复制</el-menu-item>
                  <el-menu-item index="/vueEcharts">vue引入echarts</el-menu-item>
                  <el-menu-item index="/time">倒计时</el-menu-item>
                  <el-menu-item index="/timeStart">timeStart开始倒计时</el-menu-item>
                  <el-menu-item index="">待定</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="">待定</el-menu-item>
                  <el-menu-item index="">待定</el-menu-item>
                  <el-menu-item index="">待定</el-menu-item>
                  <el-menu-item index="">待定</el-menu-item>
                  <el-menu-item index="">待定</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>
        </el-scrollbar>
        <el-main class="homeMain">
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
          console.log(position);
          let province = position.address.province; //获取省份信息
          let city = position.address.city || ''; //获取城市信息
          let area = position.address.district || ''; //区
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
  .homeHead {
    position: fixed;
    top: 0;
    width: 100%;
    background: #B3C0D1;
    line-height: 60px;
    z-index:3;
  }

  .homeMain {
    position: fixed;
    top: 60px;
    width: 95%;
    left: 200px;
  }

  .slider {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 200px;
    height: 100%;
    min-height: 600px;
    margin-bottom: 50px;
    /* border-top: 1px solid #273140; */
    border-bottom: 1px solid #3e495a;
    /* overflow-y: auto; */
    overflow: hidden;
    z-index: 3;
    padding-bottom: 60px;
  }

  .slider::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }

  .slider::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    box-shadow: inset 0 0 5px #fff;
    -webkit-box-shadow: inset 0 0 5px #fff;
    -moz-box-shadow: inset 0 0 5px #fff;
    background: #fff;
  }

  .slider::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px #fff;
    -webkit-box-shadow: inset 0 0 5px #fff;
    -moz-box-shadow: inset 0 0 5px #fff;
    border-radius: 0;
    background: #fff;
  }

  .slider::scrollbar {
    /*滚动条整体样式*/
    width: 0px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }

  .slider::scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    box-shadow: inset 0 0 5px #fff;
    -webkit-box-shadow: inset 0 0 5px #fff;
    -moz-box-shadow: inset 0 0 5px #fff;
    background: #fff;
  }

  .slider::scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px #fff;
    -webkit-box-shadow: inset 0 0 5px #fff;
    -moz-box-shadow: inset 0 0 5px #fff;
    border-radius: 0;
    background: #fff;
  }

</style>
