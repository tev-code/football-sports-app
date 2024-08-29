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
        team: {},
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
                this.team.awayWins,
                this.team.awayLosses,
                this.team.possession,
                this.team.totalShots,
                this.team.goalsConceded,
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
      const teamId = this.$route.params.id;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SPORTMONKS_API_URL}/teams/${teamId}`,
          {
            params: { api_key: import.meta.env.VITE_SPORTMONKS_API_KEY },
          }
        );
        this.team = response.data.data;
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
