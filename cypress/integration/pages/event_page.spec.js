/// <reference types="cypress" />

context('Events Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  const expectedCount = 10;
  it('render cards in dom', () => {
    cy.wait(1500);
    cy.get('#main > section')
      .get('article')
      .should('have.length', expectedCount);
  });
});
