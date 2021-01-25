describe('Index Page', () => {
    beforeEach(() => {
        //We want to first ensure that the Index page exists before checking the features
        cy.visit('/IndexPage')
    })
})

//Manasi
describe('personalized post', () => {
    it('Should have the option for multiple tags to be added per post', () => {
        cy.get('div')
            .should('post-tags.vue', 'posts.vue','tagsComponent');
    });
});


describe('Create Post', () => {
    // Make sure that all of the important elements are displaying correctly:
    it('Should have the option for multiple tags to be added per post', () => {
      // Check the post tags field:
      // This is the new feature where we can add multiple tags to a post
      // This should designate that this post belongs to x,y,z tags
      cy.get('posttags')
        .should('have.class', 'posttagsComponent');
      // Check the text field:
      cy.get('textarea')
        .should('have.class', 'form-control');

      // Check the submission button:
      cy.get('button')
        .should('have.class', 'btn')
        .and('have.attr', 'type');
    });