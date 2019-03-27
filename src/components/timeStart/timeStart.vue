<template>
  <div class="container">
    <!-- 显示倒计时数字的标签 -->
    <div class="share-dialog" v-show="isShareCount">
      <div id="showtimes"></div>
    </div>
    <!-- 开始按钮 -->
    <a class="btn" href="javascript:void (0);" v-on:click="showTime(10)" v-show="isShowBtn">开始</a>
    <!-- 停止按钮 -->
    <a class="btn stop" href="javascript:void (0);" v-on:click="stopTimer">停</a>
    <!-- 计时时间 -->
    <div class="timer" v-show="isShowTimer"><strong>{{ timer }}</strong><span class="second">秒</span></div>
  </div>
</template>


<script>
  import timeStart from './timeStart.js'
  export default timeStart

</script>


<style lang='scss' scoped>
  @import './timeStart.scss';

</style>
