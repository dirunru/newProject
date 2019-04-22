import avatarCutter from '../avatar-cutter/avatar-cutter.vue'
export default {
  data() {
    return {
      active: 0,
      steps: [{
        title: "添加课程"
      }, {
        title: "添加班级"
      }, {
        title: "上课时间"
      }],
      showCutter: false,
      imgSrc:'http://www.luckly-mjw.cn/baseSource/picture-avatar-03.png'
    }
  },
  created() {

  },
  mounted() {},
  components: {
    avatarCutter
  },
  methods: {
    next() {
      this.showCutter = true;
      if (this.active++ > 2) this.active = 0;
    },
    prev() {
      if (this.active-- < 0) this.active = 2;
    },
    uploadAvatar(src) {
      this.imgSrc = src;
      this.showCutter = false
    }
  }
}
