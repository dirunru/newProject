<template>
 <div>
  <el-button class="tag-read" data-clipboard-text="我是可以复制的内容，请点击复制" @click="copy">立即阅读</el-button>
 </div>
</template>


<script>
 import textCopy from './textCopy.js'
 export default textCopy
</script>


<style lang='scss' scoped>
 @import './textCopy.scss';
</style>