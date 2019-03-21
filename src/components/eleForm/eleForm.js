export default {
  data() {
    return {
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
        holder1: '请输入名字',
        holder2: '请输入活动区域',
        holder3: '请输入活动形式',
        num: 10
      }
    }
  },
  methods: {
    submitForm(form) {
      
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    },
  }
}
