<!-- @format -->

<template>
  <div id="app" :class="theme">
    <header>
      <h1>Football Stats App</h1>
      <nav v-if="!isLoginPage">
        <router-link to="/home">Home</router-link>
        <router-link to="/leagues">Leagues</router-link>
      </nav>
      <button @click="toggleTheme">Toggle Theme</button>
    </header>

    <router-view />

    <footer v-if="!isLoginPage">
      <p>&copy; 2024 Football Stats App</p>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        theme: "light-theme", // Default theme
      };
    },
    computed: {
      isLoginPage() {
        return this.$route.name === "login";
      },
    },
    methods: {
      toggleTheme() {
        this.theme =
          this.theme === "light-theme" ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", this.theme);
      },
    },
    mounted() {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        this.theme = savedTheme;
      }
    },
  };
</script>

<style lang="scss">
  @import "./assets/styles/main"; // Import the main SCSS file that handles all themes
</style>
