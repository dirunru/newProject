export default {
  name: 'App',
  data() {
    return {
      content: `<p>hello world</p>`,
      editorOption: {
        theme:'snow'
      }
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  methods: {
    onEditorReady(editor) { // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    saveHtml: function (event) {
      alert(this.content);
    }
  }
}
