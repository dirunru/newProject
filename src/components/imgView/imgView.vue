<template>
  <div id="imgView">
    <viewer :images="photo" class="viewer">
      <img class="img" v-for="(src,index) in photo" :src="src" :key="index" :onerror="errorImg">
    </viewer>
  </div>
</template>


<script>
  import index from './index.js'
  export default index

</script>


<style lang='scss' scoped>
  @import './index.scss';

</style>
