// This file contains the end-to-end tests for Sprint 1.

describe('Sprint 1', () => {
    beforeEach(() => {
        cy.visit('/sprint0')
    })
})

// Tests to make sure voting is correct
describe('Voting System', () => {
    it('Should have an upvote button, a downvote button, and a vote count', () => {
        // Check the upvote button:
        cy.get('em')
            .should('have.class', 'glyphicon glyphicon-chevron-up');
        
        // Check the downvote button:
        cy.get('em')
            .should('have.class', 'label label-primary');
        
        // Check the vote count:
        cy.get('em')
            .should('have.class', 'glyphicon glyphicon-chevron-down');
    });
});
