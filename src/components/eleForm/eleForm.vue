<template>
 <div>
   <input type="text" :placeholder='dateinit' @focus="trueDateBox"  readonly  v-model="date" />
 </div>
</template>


<script>
 import eleForm from './eleForm.js'
 export default eleForm
</script>


<style lang='scss' scoped>
 @import './eleForm.scss';
</style>