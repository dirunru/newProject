<template>
    <div class="addCourse">
        <el-form label-width="60px">
            <el-form-item label="账号">
                <el-input v-model="form.newAccount" placeholder="请输入课程名称">
                </el-input>
                <el-checkbox v-model="form.checked">导入之前账号数据</el-checkbox>
            </el-form-item>
            <el-form-item  label="" style="text-align:center;margin-left:-20px">
                <el-button type="primary" @click="success">确定</el-button>
                <el-button type="cancel" @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
    import index from './index.js'
    export default index
</script>


<style lang='scss' scoped>
    @import './index.scss';
</style>