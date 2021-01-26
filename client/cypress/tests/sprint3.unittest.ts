describe('Sprint 3', () => {
    beforeEach(() => {
        cy.visit('/sprint3')
    })
})

//ralph
describe('google button', () => {
    it('Should have a button for google login', () => {
        cy.get('div')
            .should('have.class', 'page page--about','googleLoginComponent');
    });
});