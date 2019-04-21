<template>
  <div class="date">
      <!-- 年份 月份 -->
      <div class="month">
        <el-button @click="weekPre" size="small">上一周</el-button>
        <span>{{ currentYear }}年{{ currentMonth }}月{{currentDay}}</span>
        <el-button @click="weekNext" size="small">下一周</el-button>
      </div>
      <!-- 星期 -->
      <ul class="weekdays">
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
        <li>日</li>
      </ul>
      <!-- 日期 -->
      <ul class="days">
        <li @click="pick(day)" v-for="(day, index) in days" :key="index">
          <!--本月-->
          <span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{ day.getDate() }}</span>
          <span v-else>
          <!--今天-->
          <span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
          <span v-else>{{ day.getDate() }}</span>
          </span>
        </li>
      </ul>
  </div>
</template>


<script>
  import index from './index.js'
  export default index

</script>


<style lang='scss' scoped>
  @import './index.scss';

</style>
