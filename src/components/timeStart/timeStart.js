export default {
  data() {
    return {
      timer: 0,
      si: '',
      isShareCount: false,
      isShowTimer: false,
      isShowBtn: true,
    }
  },
  methods: {
    // 比赛开始，计时开始
    startTimer() {
      let self = this;
      this.si = setInterval(function () {
        self.timer++;
      }, 1000);
    },
    // 比赛结束，停止计时
    stopTimer() {
      let self = this;
      clearInterval(self.si);
    },
    //显示倒数秒数
    showTime(countdown) {
      let self = this;
      self.isShareCount = true;
      self.isShowBtn = false;
      self.isShowFalseBtn = true;
      document.getElementById('showtimes').innerHTML = countdown;
      if (countdown == 0) {
        self.isShareCount = false;
        self.isShowTimer = true;
        self.isShowFalseBtn = false;
        document.getElementById('showtimes').innerHTML = "";
        // 计时器开始计时
        self.startTimer();
      } else {
        countdown -= 1;
        setTimeout(function () {
          self.showTime(countdown);
        }, 1000);
      }
    }
  }
}
