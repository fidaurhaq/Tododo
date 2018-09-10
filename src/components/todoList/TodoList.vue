<template>
  <div>
    <div class="lds-hourglass" v-if="loading===1"/>
    <div class="columns box" v-if="loading===0">
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
  apollo: {
    allTodoes: {
      query: ALL_TODOES_QUERY
    }
  }
};
</script>
