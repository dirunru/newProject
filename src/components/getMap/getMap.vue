<template>
 <div>
    <el-row >
     <el-col :offset="2" :span="8">
       <el-input :id="suggestId" v-model="address_detail" :clearable='clearable' placeholder="请输入店铺地址,获取店铺坐标" >
      </el-input>
    </el-col>
    <el-col :span="2">
      <el-button id="position" @click="search" type="primary">定位</el-button>
    </el-col>
    <el-col :span="12" >
     <el-tag type="success" v-clipboard:copy="userlocation.lng" v-clipboard:success="onCopy" v-clipboard:error="onError" >经度 {{userlocation.lng}}</el-tag>
     <el-tag type="success" v-clipboard:copy="userlocation.lat" v-clipboard:success="onCopy" v-clipboard:error="onError">纬度 {{userlocation.lat}}</el-tag>
     <el-tag type="success" >点击左侧按钮复制经纬度信息</el-tag>
    </el-col> 
  </el-row>
  <el-row>
    <el-col :offset="2" :span="18">
      <div id="map_canvas" class="allmap"></div>
    </el-col>
  </el-row>
  </div>
</template>


<script>
 import getMap from './getMap.js'
 export default getMap
</script>


<style lang='scss' scoped>
 @import './getMap.scss';
</style>