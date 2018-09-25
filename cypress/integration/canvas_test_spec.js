before(function(){
    cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass=2&demoUser=student:1&demoOffering=4&problem=1.1');

    cy.get('#leftNavTab0').click();
    cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
    // cy.get('.left-nav > .tabs > .tab').each(($tab, index, $list)=>{
    //     let title = $tab.text();
    //     cy.wrap($tab).click();
    //     cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').should('contain', title).click();
    // });
});

context('Test Canvas', function(){
    // This should test the 1-up and the 4-up views)
    context('test the overall canvas', function(){
       describe('test header elements', function(){
           // it('verifies header title appears correctly', function(){
           //      cy.get('.workspace > .titlebar > .title').should('contain','Workspace Name');
           // });
           it('verifies views button changes the current workspace view to the corresponding one', function(){
               // cy.get('.workspace > .titlebar > .actions > span').should('contain','4-up').click();
               // cy.get('.canvas-area > .canvas').should('be.visible');
               // // cy.get('.workspace > .titlebar > .actions > span').click();
               // cy.get('.workspace > .titlebar > .actions > span').should('contain','1-up').click();
               // cy.get('.canvas-area > .four-up').should('be.visible');
               // // cy.get('.workspace > .titlebar > .actions > span').click();
               // cy.get('.workspace > .titlebar > .actions > span').should('contain','4-up');
               // cy.get('.canvas-area > .canvas').should('be.visible');
           });

           it('verify supports comes up correctly', function(){

           });
           it('verify share button', function(){
               
           });
       }) ;
    });


    //This should test the tools in the tool shelf
    context('test the canvas tool shelf', function(){
        describe('test the selection tool', function(){
            it('verify the selection tool becomes active when clicked', function() {
                cy.get('.single-workspace > .workspace > .toolbar > .tool.select').click()
                    .should('have.class','active');
            });
        });

        describe('test the text tool', function(){
            it('clicks the text tool and types Hello World', function(){

                cy.get('.single-workspace > .workspace > .toolbar > .tool.text').click({force: true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('Hello World!');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('contain', 'Hello World');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().focus().click();
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile.selected').should('have.class','selected');
                cy.get('.single-workspace >.workspace > .toolbar > .tool.delete').click({force:true});

            });
        });

        describe('test the graph tool', function(){

        });
        describe('text delete tool', function(){

        });
    });

});