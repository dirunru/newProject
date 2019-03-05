<template>
  <div>
    <h1>实现全屏和退出全屏</h1>
    <span class="icon-contain" @click="getFullCreeen">
       <el-button>Esc</el-button>
    </span>
  </div>
</template>


<script>
 export default {
    name:'topHeader',
    data(){
       return{
           n:0
       }
    },
    methods:{
        getFullCreeen(){
            this.n++;
            this.n%2==0? this.outFullCreeen(document):this.inFullCreeen(document.documentElement)
        },
        inFullCreeen(element){
            let el = element;
            let rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
                el.mozRequestFullScreen || el.msRequestFullScreen;
            if (typeof rfs != "undefined" && rfs) { 
                rfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        },
        outFullCreeen(element){
            let el = element;
            let cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
                el.mozCancelFullScreen || el.exitFullScreen;
            if (typeof cfs != "undefined" && cfs) { 
                cfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }
    }
}
</script>


<style scoped>

</style>
