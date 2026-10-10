/// <reference types="cypress" />

describe("Login - usabilidade das mensagens de erro", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("exibe mensagem de erro com estilo de erro ao enviar usuário e senha em branco", () => {
  
    cy.get("#username").clear().should("have.value", "");
    cy.get("#password").clear().should("have.value", "");

    
    cy.contains("button", "Login").click();

    
    cy.get("#flash")
      .should("be.visible")
      .and("contain.text", "Your username is invalid!");

    cy.get("#flash").should("have.class", "error");
  });

  it("(extra) o balão de erro é renderizado com fundo vermelho", () => {
    cy.contains("button", "Login").click();

    cy.get("#flash.error")
      .should("be.visible")
      .and("have.css", "background-color")
      .and("match", /^rgb\(198, 15, 19\)$/);
  });
});
