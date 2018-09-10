<template>
  <section class="sectionNoPaddingTop">
    <div class="container">
      <CreateTodo />
    </div>
  </section>
</template>

<script>
import CreateTodo from "@/components/createTodo/CreateTodo.vue";

export default {
  name: "CreateTodoScreen",
  components: { CreateTodo }
};
</script>

