<template>
  <div class="wangEdit">
    <div id="websiteEditorElem" style="height: 250px"></div>
    <div id="show_box" style="border: 1px solid gray;margin-left:50px;height:100px"></div>
  </div>
</template>


<script>
  import wangEdit from "wangeditor";
  export default {
    data() {
      return {
        formData: {
          phone: ''
        }
      };
    },

    props: {},

    components: {},

    computed: {},

    created() {},

    mounted() {
      var websiteEditorElem = document.getElementById('websiteEditorElem');
      var show_box = document.getElementById('show_box');
      var phoneEditor = new wangEdit(websiteEditorElem)
      phoneEditor.onchange = function () {;
        console.log('this.formData.phone: ', phoneEditor.html());
        show_box.html(this.formData.phone)
      }
      phoneEditor.create()
    }
  }

</script>


<style lang='scss' scoped>
  .wangEdit {
    height: 600px;
  }

</style>
