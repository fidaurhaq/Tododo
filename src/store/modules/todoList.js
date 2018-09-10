//Initial State
const state = {
  todoList: []
};

// mutations
const mutations = {
  changeStatus(state, label) {
    state.todoList.map(element => {
      element.label === label ? (element.status = !element.status) : null;
    });
  },
  setTodoList(state, data) {
    state.todoList = data;
  }
};

// getters
const getters = {};

// actions
const actions = {
  getTodoList({ commit }) {
    fetch("http://rest.learncode.academy/api/vuetest/todolist")
      .then(response => response.json())
      .then(data => {
        commit("setTodoList", data);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
