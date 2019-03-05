<template>
  <div id="all">
    <el-input id="suggestId" placeholder="地址" v-model="address_detail" style="width:300px"></el-input>
    <div id="allmap"></div>
  </div>
</template>


<script>
  import vueMap from './vueMap.js'
  export default vueMap

</script>


<style lang='scss' scoped>
  @import './vueMap.scss';
</style>
