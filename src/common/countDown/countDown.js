export default {
  data() {
    return {
      day: '00',
      hour: '00',
      min: '00',
      sec: '00'
    }
  },
  props: {
    endTime: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.countdowm(this.endTime)
  },
  methods: {
    countdowm(timestamp) {
      let self = this;
      let timer = setInterval(function () {
        let nowTime = new Date();
        let endTime = new Date(timestamp * 1000);
        let t = endTime.getTime() - nowTime.getTime();
        if (t > 0) {
          let day = Math.floor(t / 86400000);
          let hour = Math.floor((t / 3600000) % 24);
          let min = Math.floor((t / 60000) % 60);
          let sec = Math.floor((t / 1000) % 60);
          day = day < 10 ? "0" + day : day;
          hour = hour < 10 ? "0" + hour : hour;
          min = min < 10 ? "0" + min : min;
          sec = sec < 10 ? "0" + sec : sec;
          self.day = day;
          self.hour = hour;
          self.min = min;
          self.sec = sec;
        } else {
          clearInterval(timer);
          self.day = '00';
          self.hour = '00';
          self.min = '00';
          self.sec = '00';
        }
      }, 1000);
    }
  }
}
