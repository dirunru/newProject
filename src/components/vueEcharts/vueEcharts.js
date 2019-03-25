import itemEcharts from "./itemEcharts/itemEcharts.vue"
export default {
  data() {
    return {
      notAccess: false,
      ChartLineGraph2: null,
      option: {
        title: {
          text: '全年产量趋势图',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
          left: 'center',
          data: ['本年', '上年'],
          bottom: 0
        },
        xAxis: {
          type: 'category',
          name: 'x',
          splitLine: {
            show: false
          },
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        grid: {
          left: '1%',
          right: '2%',
          bottom: '8%',
          containLabel: true
        },
        yAxis: {
          type: 'category',
          name: 'y',
          splitLine: {
            show: true
          },
          data: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']
        },
        series: [{
            name: '本年',
            type: 'line',
            data: [0.8, 0.98, 0.96, 0.27, 0.81, 0.47, 0.74, 0.23, .69, 0.25, 0.36, 0.56]
          },
          {
            name: '上年',
            type: 'line',
            data: [1, 0.2, 0.4, 0.8, 0.16, 0.32, 0.64, 1.28, 5.6, 0.25, 0.63, 0.65, 0.12]
          },
        ]
      },
      option2: {
        title: {
          text: '全年设备产量对比图',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        xAxis: {
          type: 'category',
          data: ['检品机1', '检品机2', '检品机3', '检品机4', '检品机5', '检品机6', '检品机7']
        },
        yAxis: {
          type: 'value'
        },
        legend: {
          left: 'center',
          data: ['本年', '上年'],
          bottom: 0
        },
        grid: {
          left: '1%',
          right: '2%',
          bottom: '8%',
          containLabel: true
        },
        series: [{
            name: '本年',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 30,
          },
          {
            name: '上年',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 30,
          }
        ]
      },
      option3: {
        title: {
          text: '饼状图',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data: [{
              value: 235,
              name: '视频广告'
            },
            {
              value: 274,
              name: '联盟广告'
            },
            {
              value: 310,
              name: '邮件营销'
            },
            {
              value: 335,
              name: '直接访问'
            },
            {
              value: 400,
              name: '搜索引擎'
            }
          ]
        }]
      },
      option4: {
        title: {
          text: "在Vue中使用echarts",
          left: "center"
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            return [params.name] + '<br/>项目数量 : ' + [params.data]
          }
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    };
  },

  components: {
    itemEcharts
  },

  computed: {},

  created() {

  },

  mounted() {

  },
  methods: {

  }
}
