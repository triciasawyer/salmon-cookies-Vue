<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sales">Sales</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <header>
      <h1>Contact</h1>
    </header>

    <main>
      <img src="" alt="This is a fish" width="100px" />
    </main>

    <footer></footer>
  </div>
</template>


<script>
export default {
  name: "ContactComponent",
};
</script>
