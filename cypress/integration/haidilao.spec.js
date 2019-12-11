/// <reference types="Cypress" />

const name = 'ch';
const phone = '+60124'; //eg: 0125787879
const pax = '4';
const store ='4929' // sunwayPyramid=4929, Pavilion=7613, 1utama=7264, gurney=9394
const noOfRetry = '1';

context('visit', () => {
  describe('Verified visit', () => {
    before(() => {
      cy.visit(`https://lineup.ap.gosnappy.io/lineup/?storeId=${store}&force=true&fbclid=IwAR1X6HHeQ5LciK4zBxUg6fY_8fvSX_-uNh3ncImrT1o14Dhx2UoczQN1Rzw`);
    });
    it('fill in', () => {
      Cypress.currentTest.retries(noOfRetry);
      cy.visit(`https://lineup.ap.gosnappy.io/lineup/?storeId=${store}&force=true&fbclid=IwAR1X6HHeQ5LciK4zBxUg6fY_8fvSX_-uNh3ncImrT1o14Dhx2UoczQN1Rzw`);
      cy.server();
      cy.route('POST', 'https://lineup.ap.gosnappy.io/v1/la/lineup').as('lineup');

      cy.get('#name')
        .type(name)
      cy.get('#mobile')
        .type(phone)
      cy.get('.snappy-picker-selector > .ng-valid')
        .select(`Party of ${pax}`)
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
