<template>
  <div class="selectAll">
    <!-- checkBox多选框 -->
    <div class="checkBox">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
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
