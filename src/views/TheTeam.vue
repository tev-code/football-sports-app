<!-- @format -->

<template>
  <div>
    <h1>Team Stats</h1>
    <LoadingSpinner v-if="loading" />
    <div v-else>
      <h2>{{ team.name }} Stats</h2>
      <img :src="team.logo" alt="Team Logo" />
      <div>
        <h3>Away Game Stats</h3>
        <p>Wins: {{ team.awayWins }}%</p>
        <p>Losses: {{ team.awayLosses }}%</p>
        <p>Possession: {{ team.possession }}%</p>
        <p>Total Shots: {{ team.totalShots }}</p>
        <p>Goals Conceded: {{ team.goalsConceded }}</p>
      </div>
      <ChartComponent :chartData="chartData" />
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import ChartComponent from "../components/ChartComponent.vue";
  import LoadingSpinner from "../components/LoadingSpinner.vue";

  export default {
    components: { ChartComponent, LoadingSpinner },
    data() {
      return {
        team: null,
        loading: true,
      };
    },
    computed: {
      chartData() {
        return {
          labels: ["Wins", "Losses", "Possession", "Shots", "Goals Conceded"],
          datasets: [
            {
              data: [
                this.team.awayWins || 0,
                this.team.awayLosses || 0,
                this.team.possession || 0,
                this.team.totalShots || 0,
                this.team.goalsConceded || 0,
              ],
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
              ],
            },
          ],
        };
      },
    },
    async created() {
      try {
        // Correct the URL structure by removing any extra slashes
        const response = await axios.get(
          `/api/v3/football/teams/${this.$route.params.id}`,
          {
            params: {
              api_token: import.meta.env.VITE_SPORTMONKS_API_KEY,
            },
          }
        );
        this.team = response.data.data; // Adjust this based on actual response structure
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        this.loading = false;
      }
    },
  };
</script>

<style scoped>
  /* Add your styles here */
</style>
