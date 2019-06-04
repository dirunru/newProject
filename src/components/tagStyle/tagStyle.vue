<template>
  <div>
    <el-form label-width="80px"
             style="width:80%"
             :model="formLabelAlign">
      <el-form-item label="课程标签">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        formLabelAlign:{
            name:''
        }
      };
    },
    methods: {}
  }

</script>


<style lang='scss' scoped>
</style>
