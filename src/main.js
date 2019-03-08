import './style/css/main.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Cookies from 'Cookies'
import './assets/sass/index.scss'
import animated from  'animate.css'
import ElementUi from 'element-ui'
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap.js'
import $ from 'jquery'


Vue.prototype.Cookies = Cookies
Vue.use(ElementUi)
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
