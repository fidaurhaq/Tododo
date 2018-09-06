import Vue from "vue";
import Vuex from "vuex";
import TodoList from "./modules/todoList";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    TodoList
  },
  strict: debug
});
