////<reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/login/");
  });
  it("contains title and correct url", () => {
    cy.contains("Your partner in buissnes");
    cy.url().should("include", "login");
  });

  it("should login to Admin Dashboard as Admin and add new User", () => {
    cy.get("#username").type("a");
    cy.get("#username").should("have.value", "a");
    cy.get("#password").type("a");
    cy.get("#password").should("have.value", "a");
    cy.get("#button").click();
    cy.get("#button").click();
    cy.get("#button").click();
    cy.url().should("include", "/dash/admindash");
    cy.contains("All users").click();
    cy.contains(" Add user ").click();
    cy.url().should("include", "/dash/add-user");
    // cy.get("#ename").type("a");
    // cy.get("#ename").should("have.value", "a");
  });
});
