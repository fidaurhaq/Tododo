<template>
  <section class="sectionNoPaddingTop">
    <div class="container">
      <TodoList />
    </div>
  </section>
</template>

<script>
import TodoList from "@/components/todoList/TodoList.vue";

export default {
  name: "HomeScreen",
  components: { TodoList }
};
</script>
