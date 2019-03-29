<template>
  <span :endTime="endTime">
    <slot>
      <p>
        <span>{{day}}</span><b>&nbsp;:&nbsp;</b>
        <span>{{hour}}</span><b>&nbsp;:&nbsp;</b>
        <span>{{min}}</span><b>&nbsp;:&nbsp;</b>
        <span>{{sec}}</span>
      </p>
    </slot>
  </span>
</template>


<script>
  import countDown from './countDown.js'
  export default countDown

</script>


<style lang='scss' scoped>
  @import './countDown.scss';

</style>
