export default{
    activeName(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        context.commit('selfName');
    },
    activeAge(context){
        context.commit('selfAge');
    },
}

// 进行异步操作的时候用