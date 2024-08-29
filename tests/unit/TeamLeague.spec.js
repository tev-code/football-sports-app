/** @format */

// tests/unit/TeamLeague.spec.js
import { shallowMount } from "@vue/test-utils";
import TeamLeague from "@/views/TeamLeague.vue";
import axios from "axios";
import flushPromises from "flush-promises";

jest.mock("axios");

describe("TeamLeague.vue", () => {
  it("displays a loading spinner while fetching data", () => {
    const wrapper = shallowMount(TeamLeague);
    expect(wrapper.findComponent({ name: "LoadingSpinner" }).exists()).toBe(
      true
    );
  });

  it("fetches leagues data on component creation", async () => {
    const leagues = [
      { id: 1, name: "Premier League", image_path: "premier-league.png" },
    ];
    axios.get.mockResolvedValue({ data: { data: leagues } });

    const wrapper = shallowMount(TeamLeague);
    await flushPromises();

    expect(wrapper.vm.leagues).toEqual(leagues);
    expect(wrapper.find("ul").exists()).toBe(true);
    expect(wrapper.find("li").text()).toContain("Premier League");
  });

  it("displays an error message if API call fails", async () => {
    axios.get.mockRejectedValue(new Error("API Error"));
    const wrapper = shallowMount(TeamLeague);
    await flushPromises();

    expect(wrapper.find("ul").exists()).toBe(false);
    expect(wrapper.text()).toContain("Error fetching leagues");
  });
});
