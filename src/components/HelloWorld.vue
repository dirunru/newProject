<template>
  <div class="hello">
    <h1 class="animated flash">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>引入的是外部的.js文件</h3>
    <el-button>哈哈哈第一次</el-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '实验bootstrap和animated在vue中的引入和应用'
      }
    },
    mounted() {
      console.log($)
    },
    methods: {

    },
  }

</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
