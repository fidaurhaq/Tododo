<template>
  <div>
    <div class="columns box">
      <div class="column">
        <h3><strong>Doing</strong></h3>
        <div v-for="todoItem in allTodoes" v-if="todoItem.doneStatus!==true" v-bind:key="todoItem.id"> 
          <TodoListItem v-bind:item="todoItem"/>
        </div>
      </div>
      <div class="column">
        <h3><strong>Done</strong></h3>
        <div v-for="todoItem in allTodoes" v-if="todoItem.doneStatus===true" v-bind:key="todoItem.id"> 
          <TodoListItem v-bind:item="todoItem"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapState, mapActions } from "vuex";
import TodoListItem from "./todoListItem/TodoListItem.vue";
import { ALL_TODOES_QUERY } from "@/constants/graphql";

export default {
  name: "TodoList",
  components: {
    TodoListItem
  },
  data() {
    return {
      allTodoes: [],
      loading: 0
    };
  },
  // methods: mapActions("TodoList", ["changeStatus"]),
  // computed: mapState({
  //   todoList: state => state.TodoList.todoList
  // }),
  // mounted() {
  //   this.$store.dispatch("TodoList/getTodoList");
  // },
  apollo: {
    allTodoes: {
      query: ALL_TODOES_QUERY
    }
  }
};
</script>
