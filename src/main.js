import './style/css/main.css'
import './assets/sass/index.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import Cookies from 'Cookies'
import animated from  'animate.css'
import ElementUi from 'element-ui'
import Echarts from 'echarts'
import VueQuillEditor from 'vue-quill-editor'
import Editor from 'wangeditor'
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap.js'
import $ from 'jquery'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import store from './store/index.js';



import 'wangeditor/release/wangEditor.min.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
  

Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': false, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})


Vue.prototype.echarts = Echarts
Vue.prototype.Cookies = Cookies
Vue.use(ElementUi)
Vue.use(animated)
Vue.use(Echarts)
Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
