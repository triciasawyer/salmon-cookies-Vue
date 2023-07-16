<script setup>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
<div class="app-container">
    <div class="header-nav-wrapper">
  <Header />
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/sales">Sales</router-link>
    <router-link class="contact" to="/contact">Contact</router-link>
  </nav>
  </div>

  <main>
    <router-view></router-view>
  </main>

  <Footer />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>



<style lang="scss">
@import "../styles/app.scss";
</style>
