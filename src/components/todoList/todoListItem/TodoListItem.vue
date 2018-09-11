<template>
    <div class="box">
       <strong>{{item.label}}</strong>
       <button class="is-pulled-right" v-on:click="changeStatus(item.id,!item.doneStatus)">{{item.doneStatus ?"Move to Doing":"Move to Done"}}</button>
       <button class="is-pulled-right" v-if="!item.doneStatus" v-on:click="deleteTodo(item.id)">
          Del
       </button>
    </div>
</template>

<script>
import {
  UPDATE_TODO_MUTATION,
  DELETE_TODO_MUTATION,
  ALL_TODOES_QUERY
} from "@/constants/graphql";

export default {
  name: "ListItem",
  props: {
    item: Object
  },
  methods: {
    changeStatus(id, doneStatus) {
      this.$apollo
        .mutate({
          mutation: UPDATE_TODO_MUTATION,
          variables: {
            id: id,
            doneStatus: doneStatus
          },
          key: id
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteTodo(id) {
      this.$apollo
        .mutate({
          mutation: DELETE_TODO_MUTATION,
          variables: {
            id: id
          },
          key: id,
          update: (store, { data: { deleteTodo } }) => {
            const { allTodoes } = store.readQuery({
              query: ALL_TODOES_QUERY
            });
            store.writeQuery({
              query: ALL_TODOES_QUERY,
              data: { allTodoes: allTodoes.filter(e => e.id !== id) }
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
.box {
  width: 90%;
  margin: 10px auto 10px;
  text-align: left;
}
</style>
