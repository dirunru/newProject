const cityOptions = ['上海', '北京', '广州', '深圳'];
import checkBox from "../../common/checkBox/checkBox.vue";
import baseCalendar from "../../common/base_calendar/calendar.vue";
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


      // 日历组件的数据
      arr2: [],
      arr: [{
        date: "2018/8/1",
        className: "mark1"
      }, {
        date: "2018/8/13",
        className: "mark2"
      }],
    };
  },
  components: {
    checkBox,
    baseCalendar
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
    },
    // 日历组件
    initData(data) { //初始化数据 获取班级课程列表
      var startTime = new Date(data.startTiem.split('/')[0], data.startTiem.split('/')[1] - 1, data.startTiem.split('/')[2]).getTime();
      var endTime = new Date(data.endTime.split('/')[0], data.endTime.split('/')[1] - 1, data.endTime.split('/')[2]).getTime();
    },
    clickDay(data) {
      this.showMonthBtn = true;
      this.$emit('clickDay', data)
      console.log("选中了", data); //选中某天
    },
    clickToday(data) {
      // this.showMonthBtn = true;
      console.log("跳到了本月今天", data); //跳到了本月
      // 拉取今天课程
      // 更新课程列表
    },
    changeDate(data) {
      this.nowMonth = parseInt(data.split('/')[1]) - 1;
      var myDate = new Date();
      var fristDay = (new Date(myDate.getFullYear(), parseInt(this.nowMonth), 1)).getTime(); //月日历中第一天
      var lastDay = (new Date(myDate.getFullYear(), parseInt(this.nowMonth + 1), 0)).getTime(); //月日历中最后一天
      this.$emit('changeMonth', {
        startTime: fristDay,
        endTime: lastDay
      })
      console.log("左右点击切换月份", data); //左右点击切换月份
    },
  }
};
