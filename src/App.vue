<template>
  <div id="app">
    <img class="logo" src="./assets/calc.png" @click="navigateToHome()" alt="Zmarta">
    <h1 class="text-center">Calculator</h1>
    <div class="randomWord">
      <p>Gör {{quotes[Math.floor(Math.random() * quotes.length)].message}} smartare</p>
    </div>
    <app-Navbar></app-Navbar>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";

export default {
  components: {
    appNavbar: Navbar
  },
  data() {
    return {
      quotes: [
        { message: "dina lån" },
        { message: "dina försäkringar" },
        { message: "dina abonnemang" },
        { message: "din el" },
        { message: "ditt sparande" },
        { message: "din ekonomi" },
        { message: "mig" }
      ]
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

h1 {
  font-size: 15vm;
}

.logo {
  width: 20%;
  height: auto;
}
</style>
