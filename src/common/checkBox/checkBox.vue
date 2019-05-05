<template>
    <div class="checkBox" @click="clickBox($event)">
        <div class="checkContent">
            <span class="optionItem" v-for="(op,i) in checkList" :key="i">{{op}}<i class="close el-icon-close"
                    @click="move(i)"></i></span>
            <i class="dropIcon el-icon-arrow-down" :class="[rotate?'rotately':'']" @click="rotate = !rotate"></i>
        </div>
        <div class="dropDownBox" v-show="rotate">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选
            </el-checkbox>
            <el-checkbox-group v-model="checkList" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="(item,index) in checkBoxList" :key="index" :label="item"></el-checkbox>
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