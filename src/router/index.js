import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: resolve => require(['@/components/home'], resolve),
    // vue 项目bootstrap和animated测试
    children: [{
        path: 'HelloWorld',
        name: 'HelloWorld',
        component: resolve => require(['@/components/HelloWorld'], resolve),
      },
      // json字符串只获取值
      {
        path: 'practice_one',
        name: 'practice_one',
        component: resolve => require(['@/components/practice_one'], resolve),
      },
      // 全屏和退出全屏
      {
        path: 'fullCreeen',
        name: 'fullCreeen',
        component: resolve => require(['@/components/fullCreeen'], resolve),
      },
      // vue项目使用地图
      {
        path: 'vueMap',
        name: 'vueMap',
        component: resolve => require(['@/components/vueMap/vueMap.vue'], resolve),
      },
       // vue项目使用地图,获取经纬度
       {
        path: 'getMap',
        name: 'getMap',
        component: resolve => require(['@/components/getMap/getMap.vue'], resolve),
      },
      // vue项目的dialog和table集合
      {
        path: 'vueTable',
        name: 'vueTable',
        component: resolve => require(['@/components/vueTable/vueTable.vue'], resolve),
      },
      // vue项目中的日历组件
      {
        path: 'eleCalendar',
        name: 'eleCalendar',
        component: resolve => require(['@/components/eleCalendar/eleCalendar.vue'], resolve),
      },
      // vue 项目的form表单eleForm
      {
        path: 'eleForm',
        name: 'eleForm',
        component: resolve => require(['@/components/eleForm/eleForm.vue'], resolve),
      },
      // 动态添加
      {
        path: 'activeAdd',
        name: 'activeAdd',
        component: resolve => require(['@/components/activeAdd/activeAdd.vue'], resolve),
      },
      // vue tabs切换，组件封装 tabSwitch
      {
        path: 'tabSwitch',
        name: 'tabSwitch',
        component: resolve => require(['@/components/tabSwitch/tabSwitch.vue'], resolve),
      },
    ]
  }]
})
