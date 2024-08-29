/** @format */

// tests/unit/ChartComponent.spec.js
import { shallowMount } from "@vue/test-utils";
import ChartComponent from "@/components/ChartComponent.vue";
import { Pie } from "vue-chartjs";
import { describe, it, expect } from "vitest";

describe("ChartComponent.vue", () => {
  it("renders a Pie chart with the correct data", () => {
    const chartData = {
      labels: ["Wins", "Losses", "Possession", "Shots", "Goals Conceded"],
      datasets: [
        {
          data: [10, 5, 75, 20, 8],
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

    const wrapper = shallowMount(ChartComponent, {
      props: { chartData },
    });

    expect(wrapper.findComponent(Pie).exists()).toBe(true);
    expect(wrapper.props().chartData).toEqual(chartData);
  });
});
