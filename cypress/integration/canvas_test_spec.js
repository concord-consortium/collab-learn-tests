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
                // cy.get('.canvas-area > .canvas > .document-content > .tool-tile.selected').should('have.class','selected');
                // cy.get('.single-workspace >.workspace > .toolbar > .tool.delete').click({force:true});

            });
        });

        describe('test the graph tool', function(){
            it('clicks the graph tool and enters four points', function(){

                cy.get('.single-workspace > .workspace > .toolbar > .tool.geometry').click({force: true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(40,35, {force:true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'A' );
                // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > svg > g > ellipse').last().trigger('mouseover',{force:true});
                // cy.wait(2000);
                // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > JXGinforbox').first().should('be.visible')
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(140,70, {force:true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'B' );
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(260,50, {force:true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'C' );
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'D' );
                // cy.get('.canvas-area > .canvas > .document-content > .tool-tile.selected').should('have.class','selected');
                // cy.get('.single-workspace >.workspace > .toolbar > .tool.delete').click({force:true});

            });

        describe('verify that canvas is saved', function(){
            it('will close and reopen the canvas and verify it looks the same', function() {
                //open the my work tab
                //click a different canvas
                //verify canvas is shown
                //open the my work tab
                //click the introduction canvas
                //verify intro canvas is showing
                cy.get('#rightNavTabMy\\ Work').click({force:true});
                cy.get('.list > .list-item[title*="Initial"]').click();
                cy.get('.single-workspace > .workspace > .titlebar > .title').should('contain', 'Initial');
                cy.get('#rightNavTabMy\\ Work').click({force:true});
                cy.get('.list > .list-item[title*="Introduction"]').click();
                cy.get('.single-workspace > .workspace > .titlebar > .title').should('contain', 'Introduction');

                //verify text element with Hello World in showing
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('contain', 'Hello World');
                //Verify the graph has 4 points in it
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').each(($point, index, $list)=>{}).then(($list)=>{
                    expect($list).to.have.length(4);
                });
                //Delete elements in the canvas
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().focus().click();
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile.selected').should('have.class','selected');
                cy.get('.single-workspace >.workspace > .toolbar > .tool.delete').click({force:true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile.selected').should('have.class','selected');
                cy.get('.single-workspace >.workspace > .toolbar > .tool.delete').click({force:true});
            });
        });
        });
    });

});