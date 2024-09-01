/** @format */

// cypress/component/LoginForm.spec.js
import { mount } from "@cypress/vue";
import LoginForm from "@/components/LoginForm.vue";

describe("LoginForm Component", () => {
  it("renders login buttons", () => {
    mount(LoginForm);
    cy.get("button").should("have.length", 3);
  });

  it("calls loginWithGoogle method when Google login button is clicked", () => {
    cy.spy(LoginForm.methods, "loginWithGoogle").as("loginWithGoogleSpy");
    mount(LoginForm);
    cy.get("button").first().click();
    cy.get("@loginWithGoogleSpy").should("have.been.called");
  });
});
