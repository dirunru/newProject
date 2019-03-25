import Clipboard from 'clipboard';
export default {
  data() {
    return {

    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {
    copy() {
      var clipboard = new Clipboard('.tag-read')
      clipboard.on('success', e => {
        console.log('复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
    }
  }
}
