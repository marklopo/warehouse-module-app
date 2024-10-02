////<reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/login/");
  });
  it("contains title and correct url", () => {
    cy.contains("Your partner in buissnes");
    cy.url().should("include", "login");
  });

  it("should login to Admin Dashboard as Admin and get all Users", () => {
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
    cy.get("#password").type("admin");
    cy.get("#password").should("have.value", "admin");
    cy.get("#button").click();
    cy.url().should("include", "/dash/admindash");
    cy.contains("All equipment").click();
    cy.contains(" Get Equipment ").click();
    cy.url().should("include", "/dash/equipment");
  });
});