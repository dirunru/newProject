<template>
  <div style="overfloe-y:auto">
    <el-row :gutter="20">
      <el-col :span="10">
        <ele-calendar @pick="clickChange" :render-content="renderContent" :data="datedef" :prop="prop"></ele-calendar>
      </el-col>
      <el-col :span="12">
        <calendar2></calendar2>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  import eleCalendar from './eleCalendar.js'
  export default eleCalendar

</script>


<style lang='scss' scoped>
  @import './eleCalendar.scss';
</style>
