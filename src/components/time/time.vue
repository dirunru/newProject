<template>
  <div>
    <count-down :endTime="endTime" :callback="callback"></count-down>
  </div>
</template>


<script>
  import time from './time.js'
  export default time

</script>


<style lang='scss' scoped>
  @import './time.scss';

</style>
