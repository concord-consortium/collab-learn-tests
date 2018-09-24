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
       }) ;
    });
    context('test the views', function(){
        describe('test the 1-up view', function(){
            it('will enter text into the canvas', function(){

            });

        });

        describe('test the 4-up view', function(){
            it('will verify that 4-up view is up on button click', function(){

            });
            it('will verify that the 4-up button changes to 1-up button', function(){

            });
            it("will move horizontal splitter vertically and verify canvas size change", function () {

            });
            it('will move vertical splitter horizantally and verify canvas size change', function(){

            });
            it('will move the center handle horizontally and vertically and verify canvas size change', function (){

            });
            it('will verify editing own canvas is still possible in 4-up view', function(){

            });
            it('will verify editing is not allowed in other group members\' canvas', function(){

            });
            it('will copy text from one canvas to own canvas', function(){

            });
            it('will verify that view changes back to 1-up view',function(){

            });

        });
        describe('test the 2-up view', function(){

        });
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