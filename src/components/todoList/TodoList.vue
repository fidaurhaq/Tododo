<template>
  <div>
    <div class="columns box">
      <div class="column">
        <h3><strong>Doing</strong></h3>
        <div v-for="todoItem in todoList" v-if="todoItem.status===true" v-bind:key="todoItem.id"> 
          <TodoListItem v-bind:item="todoItem" v-bind:onChangeStatus="changeStatus"/>
        </div>
      </div>
      <div class="column">
        <h3><strong>Done</strong></h3>
        <div v-for="todoItem in todoList" v-if="todoItem.status!==true" v-bind:key="todoItem.id"> 
          <TodoListItem v-bind:item="todoItem" v-bind:onChangeStatus="changeStatus"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoListItem from "./todoListItem/TodoListItem.vue";

export default {
  name: "NavBar",
  components: {
    TodoListItem
  },
  methods: {
    changeStatus: function(label) {
      this.$store.commit("changeStatus", label);
    }
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  }
};
</script>
