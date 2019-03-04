import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: resolve => require(['@/components/home'], resolve),
    children: [{
      path: 'HelloWorld',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve),
    }]
  }]
})
