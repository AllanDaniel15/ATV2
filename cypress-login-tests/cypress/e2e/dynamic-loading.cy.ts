/// <reference types="cypress" />

describe("Dynamic Loading - aguardar o loader desaparecer", () => {
  beforeEach(() => {
    cy.visit("/dynamic_loading/1");
  });

  it("clica em Start, espera o 'Loading...' sumir e valida o texto 'Hello World!'", () => {
    
    cy.get("#finish").should("not.be.visible");

    cy.contains("#start button", "Start").click();

    cy.get("#loading").should("be.visible");

   
    cy.get("#start").should("not.be.visible");

    
    cy.get("#loading", { timeout: 15000 }).should("not.be.visible");

    cy.get("#finish h4", { timeout: 15000 })
      .should("be.visible")
      .and("have.text", "Hello World!");
  });
});
