<!-- @format -->

<template>
  <div>
    <h1>Leagues</h1>
    <LoadingSpinner v-if="loading" />
    <ul v-else>
      <li v-for="league in leagues" :key="league.id">
        <img :src="league.image_path" :alt="league.name" />
        <h2>{{ league.name }}</h2>
        <router-link :to="{ name: 'Team', params: { id: league.id } }">
          View Teams
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";
  import LoadingSpinner from "../components/LoadingSpinner.vue";

  export default {
    components: { LoadingSpinner },
    data() {
      return {
        leagues: [],
        loading: true,
      };
    },
    async created() {
      try {
        // Use the proxy by starting the path with '/api'
        const response = await axios.get("/api/v3/football/fixtures", {
          params: {
            api_token: import.meta.env.VITE_SPORTMONKS_API_KEY,
          },
        });
        this.leagues = response.data.data; // Adjust this based on actual response structure
      } catch (error) {
        console.error("Error fetching leagues:", error);
      } finally {
        this.loading = false;
      }
    },
  };
</script>

<style scoped>
  /* Add your styles here */
</style>
