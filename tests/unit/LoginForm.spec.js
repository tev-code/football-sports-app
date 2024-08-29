/** @format */

// tests/unit/LoginForm.spec.js
import { shallowMount } from "@vue/test-utils";
import LoginForm from "@/components/LoginForm.vue";

describe("LoginForm.vue", () => {
  it("calls loginWithGoogle when Google login button is clicked", async () => {
    const loginWithGoogle = jest.fn();
    const wrapper = shallowMount(LoginForm, {
      methods: { loginWithGoogle },
    });

    await wrapper.find("button").trigger("click");
    expect(loginWithGoogle).toHaveBeenCalled();
  });

  it("calls loginWithTwitter when Twitter login button is clicked", async () => {
    const loginWithTwitter = jest.fn();
    const wrapper = shallowMount(LoginForm, {
      methods: { loginWithTwitter },
    });

    const buttons = wrapper.findAll("button");
    await buttons.at(1).trigger("click");
    expect(loginWithTwitter).toHaveBeenCalled();
  });

  it("calls loginWithInstagram when Instagram login button is clicked", async () => {
    const loginWithInstagram = jest.fn();
    const wrapper = shallowMount(LoginForm, {
      methods: { loginWithInstagram },
    });

    const buttons = wrapper.findAll("button");
    await buttons.at(2).trigger("click");
    expect(loginWithInstagram).toHaveBeenCalled();
  });
});
