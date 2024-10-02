////<reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/login/");
  });
  it("contains title and correct url", () => {
    cy.contains("Your partner in buissnes");
    cy.url().should("include", "login");
  });

  it("should login to Admin Dashboard as User", () => {
    cy.get("#username").type("user1");
    cy.get("#username").should("have.value", "user1");
    cy.get("#password").type("user1");
    cy.get("#password").should("have.value", "user1");
    cy.get("#button").click();

    cy.url().should("include", "/userdash/user");
  });
});
