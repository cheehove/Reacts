/// <reference types="Cypress" />

context('visit', () => {
  describe('Verified visit', () => {
    before(() => {
      cy.visit('https://lineup.ap.gosnappy.io/lineup/?storeId=4929&force=true&fbclid=IwAR1X6HHeQ5LciK4zBxUg6fY_8fvSX_-uNh3ncImrT1o14Dhx2UoczQN1Rzw');
    });
    it('fill in', () => {
      Cypress.currentTest.retries(10);
      cy.visit('https://lineup.ap.gosnappy.io/lineup/?storeId=4929&force=true&fbclid=IwAR1X6HHeQ5LciK4zBxUg6fY_8fvSX_-uNh3ncImrT1o14Dhx2UoczQN1Rzw');
      cy.server();
      cy.route('POST', 'https://lineup.ap.gosnappy.io/v1/la/lineup').as('lineup');

      cy.get('#name')
        .type('chee hove')
        .should('have.value', 'your name');
      cy.get('#mobile')
        .type('0124649561')
        .should('have.value', '012xxxxxx');
      cy.get('.snappy-picker-selector > .ng-valid')
        .select('Party of 2')
        .should('have.value', '2');
      cy.get('.mat-button-wrapper')
        .click();
      cy.wait('@lineup');
      cy.get('@lineup').then(function (xhr) {
        if (xhr.status === 200) {
          console.log(xhr);
          console.log(xhr.response.body);
        }
        expect(xhr.status).to.eq(200)
      });
    });
  });
});
