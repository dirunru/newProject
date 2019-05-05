<template>
  <div class="selectAll">
    <!-- checkBox多选框 -->
    <div class="checkBox">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <!-- selected和checkBox结合 -->

    <el-select v-model="value5" multiple placeholder="请选择" @change.self="selectChecked">
      <el-option v-for="item in options" :key="item.value" :value="item.label">
        <span>{{item.label}}</span>
        <el-checkbox style="float:right" v-model="item.selected"></el-checkbox>
      </el-option>
    </el-select>

    <!-- checkbox的组件 -->
    <check-box></check-box>

    <!-- 基础日历组件 -->
    <base-calendar ref="Calendar" :markDateMore="arr" :markDate="arr2" @isToday="clickToday" agoDayHide="1530115221"
      @choseDay="clickDay" @changeMonth="changeDate" @timeSlot="initData">
    </base-calendar>
  </div>
</template>


<script>
  import index from './index.js'
  export default index

</script>


<style lang='scss' scoped>
  @import './index.scss';

</style>
