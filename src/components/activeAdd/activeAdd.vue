<template>
  <div class="formW">
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item prop="email" label="邮箱" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item v-for="(domain,index) in dynamicValidateForm.domains" :label="domain.label" :key="index" :rules="{
      required: true, message: 'label不能为空', trigger: 'blur'
    }">
        <el-input v-model="domain.value"></el-input>
        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="dialogAdd = true;newAdd()">新增输入框</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 添加配件的添加录入项 -->
    <el-dialog class="addItem" width="450px" title="添加label" :visible.sync="dialogAdd" append-to-body>
      <el-form :model="addLabel">
        <el-form-item label="">
          <el-input v-model="addLabel.name" placeholder="请输入label" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogAdd = false">取 消</el-button>
        <el-button size="small" @click="addItemOK">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  import activeAdd from './activeAdd.js'
  export default activeAdd

</script>


<style lang='scss' scoped>
  @import './activeAdd.scss';

</style>
