export default {
  data() {
    return {
      staffId: [-1],
      isContainAll: true,
      staffNmae: [],
      staff: [{
          'value': -1,
          'nameCn': '全部'
        },
        {
          'value': 1,
          'nameCn': '张三'
        },
        {
          'value': 2,
          'nameCn': '李四'
        },
        {
          'value': 3,
          'nameCn': '王五'
        },
        {
          'value': 4,
          'nameCn': '潇潇'
        },
        {
          'value': 5,
          'nameCn': '小美'
        },
        {
          'value': 6,
          'nameCn': '赵琴'
        },
        {
          'value': 7,
          'nameCn': '张玲'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    changeStaff() {
      // 定义一个变量，用来存储当前下拉框是否选中了全部
      if (this.isContainAll) {
        // 只有下拉框的值发生了变化才会进入此方法
        // 如果之前选中了全部，则变化后肯定不包含全部了
        this.isContainAll = false
        // 则删除第一个全部
        this.staffId.splice(0, 1)
      } else {
        // 如果之前没有选中全部
        // 判断此次是否选中了全部
        this.isContainAll = this.staffId.some(value => value === -1)
        // 如果此次选中了全部
        if (this.isContainAll) {
          // 则去除其他，只保留全部，默认value=-1 是全部
          this.staffId = [-1]
        } else {
          // 如果当前不包含全部，则判断是否其他的七个日期全选了
          if (this.staffId.length === this.staff.length - 1) {
            // 如果其他员工全选了，则也将当前置为全部
            this.staffId = [-1]
            this.isContainAll = true
          }
        }
      }
      // 当没有选中任何教练时，将当前置为全部
      if (this.staffId.length === 0) {
        this.staffId = [-1]
        this.isContainAll = true
      }
      //   // 如果选择全部
      if (this.isContainAll) {
        this.staffName = ['全部']
      } else {
        // 获得选中教练的姓名
        for (let i = 0; i < this.staffId.length; i++) {
          let obj = this.staff.find((item) => {
            return item.value === this.staffId[i]
          })
          this.$set(obj,i.toString(),obj.nameCn);
        }
      }
    }
  }
}
