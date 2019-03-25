export default {
  data() {
    return {
      ChartLineGraph: null
    };
  },
  watch: {
      data(newVlaue){
        this.drawLinerGraph(this.id,newVlaue);
      }
  },
  props:['id','data'],
  components: {},

  computed: {},

  created() {},

  mounted() {
      this.drawLinerGraph(this.id,this.data);
  },

  methods: {
      drawLinerGraph(id,data){
          let _this = this;
          let myChart = document.getElementById(id);
          this.ChartLineGraph = this.echarts.init(myChart);
          this.ChartLineGraph.setOption(data);
          window.addEventListener('resize',()=>{
              _this.ChartLineGraph.resize();
          })
      }
  },
  destroyed () {
      if(this.ChartLineGraph){
          this.ChartLineGraph.clear();
      }
  }
}
