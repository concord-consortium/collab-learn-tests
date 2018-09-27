before(function(){
    cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass=2&demoUser=student:1&demoOffering=4&problem=1.1');
});

context('Test Graph Tool', function(){
   describe('user can interact with points on a graph', function(){
       it('verify user can add points to the graph', function(){
       //set up canvas
       cy.get('#leftNavTab2').click();
       cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
       cy.get('.workspace > .titlebar > .title').should('contain',' if');

       //add graph tool onto canvas and adds points
       cy.get('.single-workspace > .workspace > .toolbar > .tool.geometry').click({force: true});
       cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
       cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(40,35, {force:true});
       cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'A' );
       cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(140,70, {force:true});
       cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'B' );
       cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(260,50, {force:true});
       cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'C' );
       cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
       cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'D' );
       });
   });
});