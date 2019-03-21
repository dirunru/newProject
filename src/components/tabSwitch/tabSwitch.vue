<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in tabs" :key="index" :label="item.label" :lazy="false" :name="item.name">
      </el-tab-pane>
    </el-tabs>
    <tab-content :data="title"></tab-content>
  </div>
</template>


<script>
  import tabSwitch from './tabSwitch.js'
  export default tabSwitch

</script>


<style lang='scss' scoped>
  @import './tabSwitch.scss';

</style>
