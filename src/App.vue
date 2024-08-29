<!-- @format -->

<template>
  <div id="app">
    <!-- Header with conditional navigation -->
    <header>
      <h1>Football Stats App</h1>
      <!-- Conditionally render navigation links based on the current route -->
      <nav v-if="!isLoginPage">
        <router-link to="/home">Home</router-link>
        <router-link to="/leagues">Leagues</router-link>
      </nav>
    </header>

    <!-- Router view renders the current route's component -->
    <router-view />

    <footer v-if="!isLoginPage">
      <!-- You can add footer content here -->
      <p>&copy; 2024 Football Stats App</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "App",
    computed: {
      // Check if the current route is the login page
      isLoginPage() {
        return this.$route.name === "Login";
      },
    },
  };
</script>

<style>
  /* Global styles or layout styles */
  #app {
    font-family: Arial, sans-serif;
    text-align: center;
    color: #333;
  }

  header {
    background-color: #f8f9fa;
    padding: 1rem;
  }

  nav a {
    margin: 0 1rem;
    text-decoration: none;
    color: #007bff;
  }

  footer {
    background-color: #f8f9fa;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
