import './style/css/main.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Cookies from 'Cookies'


Vue.prototype.Cookies = Cookies

import animated from  'animate.css'
Vue.use(animated)

import $ from 'jquery'

import ElementUi from 'element-ui'
Vue.use(ElementUi)

import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
