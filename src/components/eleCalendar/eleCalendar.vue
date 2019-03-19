<template>
  <div>
    <ele-calendar class="calendar" @pick="clickChange" :render-content="renderContent" :data="datedef" :prop="prop"></ele-calendar>
  </div>
</template>


<script>
  import eleCalendar from './eleCalendar.js'
  export default eleCalendar

</script>


<style lang='scss' scoped>
  @import './eleCalendar.scss';
</style>
