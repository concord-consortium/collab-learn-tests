before(function(){
    cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=dev');
    //need to have 4 students in a group
});

context('Test Canvas', function(){
    // This should test the 1-up and the 4-up views)
    context('test the overall canvas', function(){
       describe('test header elements', function(){
           it('verifies header title appears correctly', function(){
                cy.get('.workspace > .titlebar > .title').should('contain','Workspace Name');
           });
           it('verifies views button changes the current workspace view to the corresponding one', function(){
               cy.get('.workspace > .titlebar > .actions > span').should('contain','4-up');
               cy.get('.canvas-area > .canvas').should('be.visible');
               cy.get('.workspace > .titlebar > .actions > span').click();
               cy.get('.workspace > .titlebar > .actions > span').should('contain','1-up');
               cy.get('.canvas-area > .four-up').should('be.visible');
               cy.get('.workspace > .titlebar > .actions > span').click();
               cy.get('.workspace > .titlebar > .actions > span').should('contain','4-up');
               cy.get('.canvas-area > .canvas').should('be.visible');
           });

           it('verify supports comes up correctly', function(){

           })
           it('verify share button', function(){
               
           });
       }) ;
    });


    //This should test the tools in the tool shelf
    context('test the canvas tool shelf', function(){
        describe('test the selection tool', function(){

        });
        describe('test the text tool', function(){

        });
        describe('test the graph tool', function(){

        })
    });

});