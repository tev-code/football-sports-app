<!-- @format -->

<template>
  <div>
    <h2>Login</h2>
    <button @click="loginWithGoogle">Login with Google</button>
    <button @click="loginWithTwitter">Login with Twitter</button>
    <button @click="loginWithInstagram">Login with Instagram</button>
  </div>
</template>

<script>
  export default {
    methods: {
      loginWithGoogle() {
        console.log("Google login clicked");
        this.$router.push({ name: "Home" });
      },
      loginWithTwitter() {
        console.log("Twitter login clicked");
        this.$router.push({ name: "Home" });
      },
      loginWithInstagram() {
        console.log("Instagram login clicked");
        this.$router.push({ name: "Home" });
      },
    },
  };
</script>

<style scoped>
  /* Add your styles here */
</style>
