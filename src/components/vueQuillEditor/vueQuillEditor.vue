<template>
   <div class="edit_container">
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
        <el-button v-on:click="saveHtml" style="margin-top:20px">保存</el-button>
        <div v-html="content"> </div>
    </div> 
</template>
<script>
  import index from './index.js'
  export default index

</script>
<style lang='scss' scoped>
  @import './index.scss';

</style>
