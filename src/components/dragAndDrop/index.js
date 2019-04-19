
export default {
  data(){
      return{
          active: 0,
          steps:[{
              title:"添加课程"
          },{
              title:"添加班级"
          },{
              title:"上课时间"
          }]
      }
  },
  created(){

  },
  mounted(){ },
  components:{

  },
  methods:{
      next() {
          if (this.active++ > 2) this.active = 0;
      },
      prev(){
          if (this.active-- < 0) this.active = 2;
      }
  }
}