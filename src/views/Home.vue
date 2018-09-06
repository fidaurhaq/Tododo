<template>
  <section class="section">
    <div class="container">
      <TodoList />
    </div>
  </section>
</template>

<script>
import TodoList from "@/components/todoList/TodoList.vue";

export default {
  name: "home",
  components: { TodoList }
};
</script>
