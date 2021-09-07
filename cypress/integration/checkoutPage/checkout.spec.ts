import cypress from 'cypress';

describe('Home Tests', () => {
  it('should return true when header component is shown', () => {
    cy.visit('/checkout');

    cy.contains('Carrinho').should('to.have.length', 1);
  });

  it('should be able to go to cart when new products was added', () => {
    cy.visit('/');

    cy.get('[data-cy=buttonTest]').click({ multiple: true });

    cy.get('[data-cy=ToHaveLength] a').click();

    cy.url().should('include', '/checkout');
  });

  it('should have books in table after added then in home', () => {
    cy.visit('/');

    cy.get('[data-cy=buttonTest]').click({ multiple: true });

    cy.get('[data-cy=ToHaveLength] a').click();

    cy.get('[data-cy=tableRowTest]').should('not.have.length', 0);
  });

  it('should remove books of cart', () => {
    cy.visit('/');

    cy.get('[data-cy=buttonTest]:first').click();

    cy.get('[data-cy=ToHaveLength] a').click();

    cy.get('[data-cy=removeBookTest]').click();

    cy.get('[data-cy=tableRowTest]').should('to.have.length', 0);
  });
});
