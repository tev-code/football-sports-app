<!-- @format -->

<template>
  <div>
    <h1>Team Stats</h1>
    <LoadingSpinner v-if="loading" />
    <div v-else>
      <h2>{{ teamName }} Stats</h2>
      <img :src="teamLogo" alt="Team Logo" />

      <h3>Fixtures</h3>
      <ul>
        <li v-for="fixture in fixtures" :key="fixture.id">
          <h4>{{ fixture.name }}</h4>
          <p>
            <strong>Starting At:</strong>
            {{ fixture.starting_at }}
          </p>
          <p>
            <strong>Result:</strong>
            {{ fixture.result_info }}
          </p>

          <div v-if="fixture.league">
            <h5>League</h5>
            <img :src="fixture.league.image_path" :alt="fixture.league.name" />
            <p>{{ fixture.league.name }}</p>
          </div>

          <div v-if="fixture.participants">
            <h5>Participants</h5>
            <ul>
              <li
                v-for="participant in fixture.participants"
                :key="participant.id"
              >
                <img :src="participant.image_path" :alt="participant.name" />
                <p>
                  <strong>{{ participant.name }}</strong>
                  - {{ participant.meta.location }}
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <div v-if="stats">
        <h3>Away Game Stats</h3>
        <p>Wins: {{ stats.wins }}%</p>
        <p>Losses: {{ stats.losses }}%</p>
        <p>Possession: {{ stats.draws }}%</p>
        <p>Total Shots: {{ stats.totalShots }}</p>
        <p>Goals Conceded: {{ stats.goalsConceded }}</p>
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
        teamName: "", // Will be dynamically set based on API data
        teamLogo: "", // Will be dynamically set based on API data
        stats: {
          wins: 0,
          losses: 0,
          draws: 0,
          goalsConceded: 0,
          totalShots: 0,
        },
        loading: true,
        fixtures: [], // To store fetched fixture data
      };
    },
    computed: {
      chartData() {
        return {
          labels: ["Wins", "Losses", "Draws"],
          datasets: [
            {
              label: "Match Stats",
              data: [this.stats.wins, this.stats.losses, this.stats.draws],
              backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
            },
          ],
        };
      },
    },
    methods: {
      async fetchFixtures() {
        try {
          const baseUrl = import.meta.env.VITE_SPORTMONKS_BASE_URL;
          const apiToken = import.meta.env.VITE_SPORTMONKS_API_TOKEN;

          const response = await axios.get(`${baseUrl}/fixtures`, {
            params: {
              include: "league;participants.team",
              api_token: apiToken,
            },
          });

          this.fixtures = response.data.data;
          this.processFixtures();
        } catch (error) {
          console.error("Error fetching fixtures:", error);
          this.loading = false;
        }
      },
      processFixtures() {
        let wins = 0;
        let losses = 0;
        let draws = 0;
        let goalsConceded = 0;
        let totalShots = 0;

        this.fixtures.forEach((fixture) => {
          if (fixture.result_info.includes("won")) {
            wins++;
          } else if (fixture.result_info.includes("lost")) {
            losses++;
          } else if (fixture.result_info.includes("draw")) {
            draws++;
          }

          // Extract and set the team logo and name
          if (fixture.participants && fixture.participants.length > 0) {
            const team = fixture.participants.find(
              (p) => p.meta.location === "home"
            ); // Adjust this to get the correct team
            if (team) {
              this.teamName = team.name;
              this.teamLogo = team.image_path;
            }
          }

          // Add additional calculations for goalsConceded and totalShots if available
        });

        this.stats = {
          wins,
          losses,
          draws,
          goalsConceded,
          totalShots,
        };
        this.loading = false;
      },
    },
    mounted() {
      this.fetchFixtures();
    },
  };
</script>
