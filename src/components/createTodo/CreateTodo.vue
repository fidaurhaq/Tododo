<template>
    <div class="box">
        <h4><strong>Create Todo</strong></h4>
        <br/><br/>
        <input type="text" v-model="label" placeholder="Describe what you gotta do">
        <button class="primary" @click="createTodo()"> Create</button>
        <br/><br/><br/>
    </div>
</template>

<script>
import { ALL_TODOES_QUERY, CREATE_TODO_MUTATION } from "@/constants/graphql";

export default {
  name: "CreateTodo",
  data() {
    return {
      label: "",
      status: null
    };
  },
  methods: {
    createTodo() {
      const { label, status } = this.$data;
      this.$apollo
        .mutate({
          mutation: CREATE_TODO_MUTATION,
          variables: {
            label,
            status
          },
          update: (store, { data: { createTodo } }) => {
            const data = store.readQuery({
              query: ALL_TODOES_QUERY
            });
            data.allTodoes.push(createTodo);
            store.writeQuery({ query: ALL_TODOES_QUERY, data });
          }
        })
        .then(data => {
          this.$router.push({ path: "/" });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
