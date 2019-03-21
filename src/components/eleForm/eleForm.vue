<template>
  <div>
    <el-form :model="formLabelAlign" ref="formLabelAlign" class="formStyle" label-width="80px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="formLabelAlign.name"  :placeholder="formLabelAlign.holder1"
          :maxlength="formLabelAlign.num">
        </el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-input v-model="formLabelAlign.region"  :placeholder="formLabelAlign.holder2"
          :maxlength="formLabelAlign.num">
        </el-input>
      </el-form-item>
      <el-form-item label="活动形式" prop="type">
        <el-input v-model="formLabelAlign.type"  :placeholder="formLabelAlign.holder3"
          :maxlength="formLabelAlign.num">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
        <el-button @click="resetForm('formLabelAlign')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  import eleForm from './eleForm.js'
  export default eleForm

</script>


<style lang='scss' scoped>
  @import './eleForm.scss';

</style>
