import { selectByTestId } from '../helpers/selectByTestId';

describe('Navigation', () => {
  it('should open main page', () => {
    cy.visit('/');
    cy.get(selectByTestId('mainPage')).should('exist');
  });
  it('should navigate to the catalog page', () => {
    cy.visit('/');

    cy.get('a[href*="catalog"]').click();

    cy.url().should('include', '/catalog');

    cy.get('h1').contains('catalog');
  });
  it('unknown url will lead to not found page', () => {
    cy.visit('/wwjrifjkljjsldf');
    cy.get(selectByTestId('notFoundPage')).should('exist');
  });
});
