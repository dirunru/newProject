#从零搭建vue项目
npm install -g vue-cli
vue init webpack 项目名称
cd 项目名称
npm install
npm run dev

#安装依赖
1.sass
    npm install --save-dev sass-loader
    npm install --save-dev node-sass
2.less
    npm install less --save 
    npm install less-loader --save 
3.animate
    npm install animate.css --save 
    main中引入
    import animate from ‘animate.css’
    Vue.use(animate)
4.element-ui
    npm install element-ui --save 
    import Element from 'element-ui'
    Vue.use(Element);
5.echarts
    npm install echarts --save
    import echarts from 'echarts'
    Vue.use(echarts);
6.富文本
    npm install vue-quill-editor
    npm install quill
    main.js引入
    import VueQuillEditor from 'vue-quill-editor'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    Vue.use(VueQuillEditor)