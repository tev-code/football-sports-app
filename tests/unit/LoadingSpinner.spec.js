/** @format */

import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

describe("LoadingSpinner.vue", () => {
  it("renders a loading spinner", () => {
    const wrapper = shallowMount(LoadingSpinner);
    expect(wrapper.classes()).toContain("spinner");
  });
});
