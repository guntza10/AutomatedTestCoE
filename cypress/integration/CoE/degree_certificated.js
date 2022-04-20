/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Test Degree Certificated", () => {
  it("Submit a degree certificate", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('button[class="btn tabee-red-white"]').click();
  });
});
