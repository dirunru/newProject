export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [],
        email: '23@qq.com'
      },
      addLabel: {
        name: ''
      },
      dialogAdd: false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let obj = {}
          this.dynamicValidateForm.domains.filter((i, idx) => {
            obj[`mountingExtends${(idx != 0 ? idx + 1 : '')}`] = i;
          })
          console.log('组成的数据', obj)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    newAdd() {
      this.addLabel.name = ''
    },
    addItemOK() {
      this.dynamicValidateForm.domains.push({
        label: this.addLabel.name,
        value: ''
      })
      this.dialogAdd = false
    }
  }
}
