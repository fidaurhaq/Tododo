<template>
  <div id="app">
    <Header />
    <NavBar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 6px;
  box-sizing: border-box;
  border: 26px solid #42b983;
  border-color: #42b983 transparent #42b983 transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

.sectionNoPaddingTop {
  @extend .section;
  padding-top: 0px;
}
</style>
