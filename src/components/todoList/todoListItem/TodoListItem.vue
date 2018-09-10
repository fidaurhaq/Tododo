<template>
    <div class="box">
       <strong>{{item.label}}</strong>
       <button class="is-pulled-right" v-on:click="onChangeStatus()">{{item.doneStatus ?"Move to Doing":"Move to Done"}}</button>
    </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: Object,
    onChangeStatus: Function
  }
};
</script>

<style scoped>
.box {
  width: 70%;
  margin: 10px auto 10px;
  text-align: left;
}
</style>
