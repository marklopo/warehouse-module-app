////<reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/login/");
  });
  it("contains title and correct url", () => {
    cy.contains("Your partner in buissnes");
    cy.url().should("include", "login");
  });

  it("should login to Admin Dashboard as Admin and edit Equipment", () => {
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
    cy.get("#password").type("admin");
    cy.get("#password").should("have.value", "admin");
    cy.get("#button").click();

    cy.url().should("include", "/dash/admindash");
    cy.contains("All equipment", { timeout: 150000 }).click();
    cy.contains("Add equipment", { timeout: 150000 }).click();
    cy.url().should("include", "/dash/add-equipment");
    cy.get("#ename").type("test");
    cy.get("#ename").should("have.value", "test");
    cy.get("#reg").type("test");
    cy.get("#reg").should("have.value", "test");
    cy.get("#snumber").type("test");
    cy.get("#snumber").should("have.value", "test");
    cy.get("#model").type("test");
    cy.get("#model").should("have.value", "test");
    cy.get("#ok").click();
    cy.url().should("include", "/dash/admindash");
    cy.contains("All equipment").click();
    cy.contains(" Get Equipment ").click();
    cy.url().should("include", "/dash/equipment");
    cy.get("table", { timeout: 15000 }).contains("td", "test");
    cy.get("#edittesttest", { timeout: 15000 }).click();

    cy.get("#ename").should("have.value", "test");
    cy.get("#reg").type("EDITTEST");
    cy.get("#reg").should("have.value", "TESTEDITTEST");
    cy.get("#snumber").type("EDITTEST");
    cy.get("#snumber").should("have.value", "TESTEDITTEST");
    cy.get("#model").type("EDITTEST");
    cy.get("#model").should("have.value", "TESTEDITTEST");
    cy.get("#ename").type("EDITTEST");
    cy.get("#ename").should("have.value", "TESTEDITTEST");
    cy.get("#edit").click();

    cy.url().should("include", "/dash/equipment");
    cy.contains(" Get Equipment ").click();

    cy.get("table").contains("td", "TESTEDITTEST");
  });
});
