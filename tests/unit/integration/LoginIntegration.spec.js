/** @format */

// tests/integration/LoginIntegration.spec.js
import { mount } from "@vue/test-utils";
import LoginForm from "@/components/LoginForm.vue";
import { vi } from "vitest";

vi.mock("@/api/auth", () => ({
  login: vi.fn(() => Promise.resolve({ success: true })),
}));

describe("LoginForm Integration", () => {
  it("logs in successfully and redirects to home", async () => {
    const wrapper = mount(LoginForm);

    await wrapper.find('input[name="username"]').setValue("testuser");
    await wrapper.find('input[name="password"]').setValue("password123");
    await wrapper.find("button").trigger("click");

    // Assuming your component uses Vue Router for navigation
    expect(wrapper.vm.$route.path).toBe("/home");
  });
});
