<script setup>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

</script>
<template>
<Header/>
<nav class='nav'>
  <router-link to="/">Home</router-link>
  <router-link to="/sales">Sales</router-link>
  <router-link to="/contact">Contact</router-link>
</nav>

<main>
<router-view></router-view>
</main>

<Footer/>
</template>

<script>
export default {
  name: "App",
};
</script>


<style>
@import './styles/main.scss';
</style>

