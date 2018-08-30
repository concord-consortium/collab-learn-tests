describe('Test Problem', function(){
    it('will open the problem', function(){
        cy.visit('https://collaborative-learning.concord.org/branch/master/?devMode=true')
    });

    it('verify Problem title presence and correctness', function(){
        cy.get('.problem').should('eq','Sample Problem')
    });

    it('')
});