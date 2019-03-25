<template>
  <div>
    <el-row>
      <el-col :span="10" style="padding:20px;background:#fff">
        <item-echarts :id="'lineGraph'" :data="option" style="height:300px"></item-echarts>
      </el-col>
      <el-col :span="10" style="padding:20px;background:#fff">
        <item-echarts :id="'barGraph'" :data="option2" style="height:300px"></item-echarts>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" style="padding:20px;background:#fff">
        <item-echarts :id="'echarts'" :data="option3" style="height:300px"></item-echarts>
      </el-col>
      <el-col :span="10" style="padding:20px;background:#fff">
        <item-echarts :id="'echarts1'" :data="option4" style="height:300px"></item-echarts>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
      
      </el-col>
    </el-row>
  </div>
</template>


<script>
  import vueEcharts from './vueEcharts.js'
  export default vueEcharts

</script>


<style lang='scss' scoped>
  @import './vueEcharts.scss';

</style>
