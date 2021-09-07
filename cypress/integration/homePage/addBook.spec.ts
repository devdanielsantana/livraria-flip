import cypress from 'cypress';

describe('Home Tests', () => {
  it('should return true when header component is shown', () => {
    cy.visit('/');

    cy.contains('Livraria Flip').should('to.have.length', 1);
  });

  it('should add a new book', () => {
    cy.visit('/');

    cy.get('[data-cy=buttonTest]').click({ multiple: true });

    cy.get('[data-cy=ToHaveLength] span').should('to.have.length', 1);
  });
});
