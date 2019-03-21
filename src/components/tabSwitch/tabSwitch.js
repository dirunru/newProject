import tabContent from "../../common/tabContent/tabContent.vue"
export default {
  data() {
    return {
      activeName: 'second',
      firstTableData: 'firstTableData',
      secondTableData: 'secondTableData',
      thirdTableData: 'thirdTableData',
      fourTableData: 'fourTableData',
      title: 'secondTableData'
    };
  },
  mounted () {
     
  },
  methods: {
    handleClick(tab) {
      switch (tab.label) {
        case '用户':
          this.title = this.firstTableData
          break;
        case '配置':
          this.title = this.secondTableData;
          break;
        case '角色':
          this.title = this.thirdTableData;
          break;
        case '定时任务补偿':
          this.title = this.fourTableData;
          break;
        default:
          this.title = this.secondTableData;
      }
    }
  },
  components: {
    tabContent
  }
};
