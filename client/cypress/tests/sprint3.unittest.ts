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

//kenny
describe('weather box', () => {
    it('Should be a box containing all the weather stuff for the city, state from user db', () => {
        cy.get('div')
            .should('have.class','weather-box');
    });
});