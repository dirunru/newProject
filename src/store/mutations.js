export default {
  selfName(state,name) {
    state.name = name;
  },
  selfAge(state, age) {
    state.age += 1;
  }
};
// 这个是改变状态的额方法