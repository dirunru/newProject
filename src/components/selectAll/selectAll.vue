<template>
    <div>
    <span style="margin-left:30px;font-weight:bolder;">教练：
        <el-select v-model="staffId" 
          placeholder="请选择"
          multiple
          collapse-tags
          @change="changeStaff"
          style="width:180px">
          <el-option
            v-for="(item, key) in staff"
            :key="key"
            :label="item.nameCn"
            :value="item.value">
          </el-option>
        </el-select>  
      </span>
    </div>
</template>


<script>
  import index from './index.js'
  export default index

</script>


<style lang='scss' scoped>
  @import './index.scss';

</style>
