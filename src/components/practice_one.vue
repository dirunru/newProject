<template>
  <div>
      <h3>实现json的value获取</h3>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        json: {
          "Type": "JSON字符串",
          "effect": "实现只获取value"
        },
        value: []
      }
    },
    mounted() {
      this.getValue();
      this.getJsonValue();
  },
    methods: {
      getValue() {
        for (var key in this.json) {
          console.log(this.json[key]);
        }
      },
      getJsonValue(){
        $.each(this.json ,(i)=>{
            console.log('this.json[i]: ', this.json[i]);
        })
      }
    }
  }

</script>


<style scoped>

</style>
