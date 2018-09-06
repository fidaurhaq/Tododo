//Initial State
const state = {
  todoList: [
    { id: 0, label: "Make a vue project", status: true },
    { id: 0, label: "Do some badass things in vue", status: false },
    { id: 0, label: "World domination", status: false }
  ]
};

// mutations
const mutations = {
  changeStatus(state, label) {
    state.todoList.map(element => {
      element.label === label ? (element.status = !element.status) : null;
    });
  }
};

// getters
const getters = {};

// actions
const actions = {
  changeStatus({ commit }, label) {
    commit("changeStatus", label);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
