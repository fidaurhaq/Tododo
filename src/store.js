import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      { id: 0, label: "Make a vue project", status: true },
      { id: 0, label: "Do some badass things in vue", status: false },
      { id: 0, label: "World domination", status: false }
    ]
  },
  mutations: {
    changeStatus(state, label) {
      state.todoList.map(element => {
        element.label === label ? (element.status = !element.status) : null;
      });
    }
  },
  actions: {}
});
