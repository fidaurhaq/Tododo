import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomeScreen.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/createTodo",
      name: "createTodo",
      // route level code-splitting
      // this generates a separate chunk (createTodo.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "createTodo" */ "./views/CreateTodoScreen.vue")
    }
  ]
});
