<template>
  <div>
    <!-- 步骤条 -->
    <div class="stepLine">
      <ul>
        <li class="stepItem" v-for="(item,index) in steps" :key="index">
          <span class="circle" :class="[index <= active ? 'circle-red':'']">{{index + 1}}</span>
          <span class="text" :class="[index <= active ? 'text-red':'']">{{item.title}}</span>
          <span class="dottedLine" :class="[index + 1 <= active ? 'dottedLine-red':'']"></span>
          <i class='el-icon-caret-right' :class="[index + 1 <= active ? 'i-red':'']"></i>
        </li>
      </ul>
    </div>
    <img :src="imgSrc">
    <avatar-cutter v-if="showCutter" return-type="url" @cancel="showCutter = false" @enter="uploadAvatar">
    </avatar-cutter>
    <!-- 按钮 -->
    <div class="bottom">
      <el-button type="primary" @click="next">{{active>2?"确定":"下一步"}}</el-button>
      <el-button type="cancel" @click="prev">取消</el-button>
    </div>
    
  </div>
</template>


<script>
  import index from './index.js'
  export default index

</script>


<style lang='scss' scoped>
  @import './index.scss';

</style>
