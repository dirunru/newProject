import {
  mapState,
  mapMutations,
  mapGetters,
  mapActions
} from 'vuex'
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线 
  ['blockquote', 'code-block'], //引用，代码块 
  [{
    'header': 1
  }, {
    'header': 2
  }], // 标题，键值对的形式；1、2表示字体大小 
  [{
    'list': 'ordered'
  }, {
    'list': 'bullet'
  }], //列表
  [{
    'script': 'sub'
  }, {
    'script': 'super'
  }], // 上下标 
  [{
    'indent': '-1'
  }, {
    'indent': '+1'
  }], // 缩进 
  [{
    'direction': 'rtl'
  }], // 文本方向 
  [{
    'size': ['small', false, 'large', 'huge']
  }], // 字体大小 
  // [{
  //   'header': [1, 2, 3, 4, 5, 6, false]
  // }], //几级标题 
  [{
    'color': []
  }, {
    'background': []
  }], // 字体颜色，字体背景颜色 
  [{
    'font': []
  }], //字体 
  [{
    'align': []
  }], //对齐方式 
  ['clean'], //清除字体样式 
  ['image', 'video'] //上传图片、上传视频 
];

export default {
  name: 'App',
  data() {
    return {
      content: '',
      editorOption: {
        theme: 'snow',
        placeholder: "请输入课程详情",
        modules: {
          toolbar:toolbarOptions
        }
      }
    }
  },
  computed: {
    ...mapState(['name', 'age', 'other']),
    ...mapGetters(['other']),
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  methods: {
    ...mapMutations(['selfName', 'selfAge']), //改变的方法
    onEditorReady(editor) { // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    saveHtml: function (event) {
      // alert(this.content);
    }
  }
}
