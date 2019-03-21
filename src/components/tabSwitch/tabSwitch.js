import tabContent from "../../common/tabContent/tabContent.vue"
export default {
  data() {
    return {
      activeName: 'first',
      tabs: [{
        label: '全部',
        name: 'first'
      }, {
        label: '未生效',
        name: 'second'
      }, {
        label: '生效中',
        name: 'third'
      }, {
        label: '已结束',
        name: 'fourth'
      }],
      firstTableData: 'firstTableData',
      secondTableData: 'secondTableData',
      thirdTableData: 'thirdTableData',
      fourthTableData: 'fourthTableData',
      title: 'secondTableData'
    };
  },
  mounted() {

  },
  methods: {
    handleClick(tab) {
      switch (tab.label) {
        case '全部':
          this.title = this.firstTableData
          break;
        case '未生效':
          this.title = this.secondTableData;
          break;
        case '生效中':
          this.title = this.thirdTableData;
          break;
        case '已结束':
          this.title = this.fourthTableData;
          break;
        default:
          this.title = this.firstTableData;
      }
    }
  },
  components: {
    tabContent
  }
};
