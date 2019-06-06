<template>
  <div class="dialog">
    <el-form :model="form"
             ref="form"
             label-width="60px"
             @submit.native.prevent>
      <el-form-item label="账号">
        <div class="inputAccount">
          <el-input v-model="form.account"
                    placeholder="请输入绑定账号"
                    @keyup.enter.native="onSubmit()">
          </el-input>
        </div>
      </el-form-item>
      <el-form-item class="leftMar">
        <el-button type="primary"
                   @click="onSubmit()">确定</el-button>
        <el-button type="cancel"
                   @click="onCancel()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
    export default {
        data() {
            return {
                form: {
                    account: null
                }
            }
        },
        props: {
            data:{
                type:Object,
                default:()=>{}
            }
        },

        mounted() {
            this.initData()
        },
        methods: {
            initData() {
                Object.assign(this.$data, this.$options.data());
            },
            // 添加
            onSubmit() {
               if(this.validate()){
                   this.$emit('success',Object.assign(this.form,this.data))
               }
            },
            // 取消
            onCancel() {
                this.$emit("cancel")
            },
            validate() {
                if (this.form.account == '' || this.form.account == null) {
                    this.$message.error('输入账号不能为空');
                    return false
                }
                return true
            }
        }
    }
</script>


<style lang='scss' scoped>
.inputAccount {
  position: relative;
}

.messagePrompt {
  position: absolute;
  display: inline-block;
  top: 40px;
  left: 10px;
  line-height: 20px;
  color: #ef334e;
  font-size: 10px;
  letter-spacing: 1px;
}

.leftMar {
  margin-left: 8px;
  .el-button {
    margin: 0 16px;
  }
}
</style>