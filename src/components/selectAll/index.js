const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      // selected
      checked: false,
      options: [{
        value: '选项1',
        label: '黄金糕',
        selected: false
      }, {
        value: '选项2',
        label: '双皮奶',
        selected: false
      }, {
        value: '选项3',
        label: '蚵仔煎',
        selected: false
      }, {
        value: '选项4',
        label: '龙须面',
        selected: false
      }, {
        value: '选项5',
        label: '北京烤鸭',
        selected: false
      }],
      value5: [],
    };
  },
  mounted() {},
  methods: {
    selectChecked(data) {
      console.log(data)
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
