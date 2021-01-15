// This file contains the end-to-end tests for Sprint 2.

describe('Sprint 2', () => {
    beforeEach(() => {
        cy.visit('/sprint2')
    })
})

// Alan
describe('Query for city,state weather', () => {
    it('Should have a textbox and show [weather] when enter is pressed', () => {
        cy.get('div')
            .should('have.class', 'search-box');
    });
});

// Ralph
describe('Search funny in bar', () => {
    it('Should present funny as a choice in the search box', () => {
        cy.get('div')
            .should('have.class', 'v-selectmenu');
    });
});