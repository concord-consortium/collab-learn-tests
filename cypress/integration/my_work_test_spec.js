// before(function(){
//     cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=dev');
// });

describe('Test footer', function(){
    it('will verify correct tab opens to correct content', function(){
        cy.get('.left-nav > .tabs > .tab').each(function(tab){
            cy.log('Tab is' + tab)
        });

    });

});