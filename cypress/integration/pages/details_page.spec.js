/// <reference types="cypress" />

context('Details event Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('test Game 1 details', () => {
    cy.wait(1500);
    cy.get('#main > section > article:nth-child(6)').click();
    cy.wait(1500);
    cy.get('#main > div > div > div > div.Challengers_details > h3').should('be.visible')
  });
});
