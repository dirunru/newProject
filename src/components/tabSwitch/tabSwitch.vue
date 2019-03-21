<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户" name="first" >
          <tab-content :data = "title"></tab-content>
      </el-tab-pane>
      <el-tab-pane label="配置" name="second">
          <tab-content :data = "title"></tab-content>
      </el-tab-pane>
      <el-tab-pane label="角色" name="third">
          <tab-content :data = "title"></tab-content>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">
          <tab-content :data = "title"></tab-content>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
  import tabSwitch from './tabSwitch.js'
  export default tabSwitch

</script>


<style lang='scss' scoped>
  @import './tabSwitch.scss';

</style>
