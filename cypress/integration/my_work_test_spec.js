// before(function(){
//     cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=dev');
// });

describe('Test My Work tabs', function(){
    it('will verify correct tab opens to correct content', function(){
        cy.get('.left-nav > .tabs > .tab').each(function(tab){
            cy.log('Tab is' + tab)
        });

    });

    it('will verify that opened content is listed in My Work tab space', function(){

    });
    it('will open the correct canvas selected from the My Work list', function(){

    });

});