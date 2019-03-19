<template>
  <div>
    <el-button @click="dialogVisible = true">弹框</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="500px">
      <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column property="date" label="日期" width="120">
        </el-table-column>
        <el-table-column property="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column property="address" label="地址">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
  import vueTable from './vueTable.js'
  export default vueTable

</script>


<style lang='scss' scoped>
  @import './vueTable.scss';

</style>
