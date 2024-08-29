<!-- @format -->

<template>
  <div id="app">
    <!-- You can add global elements here like headers, footers, etc. -->
    <header>
      <h1>Football Stats App</h1>
      <!-- Add navigation links if needed -->
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
      </nav>
    </header>

    <!-- Router view renders the current route's component -->
    <router-view />

    <footer>
      <!-- You can add footer content here -->
      <p>&copy; 2024 Football Stats App</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "App",
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
