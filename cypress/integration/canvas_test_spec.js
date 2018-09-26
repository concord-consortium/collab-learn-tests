
before(function(){
    cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass=2&demoUser=student:1&demoOffering=4&problem=1.1');
    cy.get('#leftNavTab0').click();
    cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
});

context('Test Canvas', function(){

    context('test canvas tools', function(){

       describe('test header elements', function(){
           it('verifies header title appears correctly', function(){
                cy.get('.workspace > .titlebar > .title').should('contain','Introduction');
           });

           it('verifies views button changes when clicked and shows the correct corresponding workspace view', function(){
               //1-up view has 4-up button visible and 1-up canvas
               cy.get('.workspace > .titlebar > .actions > .icon-up1').should('be.visible');
               cy.get('.canvas-area > .canvas').should('be.visible');
               cy.get('.canvas-container.north-east').should('not.be.visible');
               cy.get('.workspace > .titlebar > .actions > .icon-up1').click();
               //4-up view is visible and 1-up button is visible
               cy.get('.workspace > .titlebar > .actions > .icon-up').should('be.visible');
               cy.get('.canvas-area > .four-up >.canvas-container.north-east').should('be.visible');
               cy.get('.canvas-area > .four-up >.canvas-container.north-west').should('be.visible');
               cy.get('.canvas-area > .four-up >.canvas-container.south-east').should('be.visible');
               cy.get('.canvas-area > .four-up >.canvas-container.south-west').should('be.visible');
               cy.get('.canvas-area > .canvas').should('not.be.visible');
               //can get back to 1 up view from 4 up
               cy.get('.workspace > .titlebar > .actions > .icon-up').click();
               cy.get('.canvas-area > .canvas').should('be.visible');
               cy.get('.workspace > .titlebar > .actions > .icon-up1').should('be.visible');

               cy.get('.canvas-container.north-east').should('not.be.visible');
           });

           it('verify share button', function(){
               cy.get('.workspace > .titlebar > .actions > .icon-share').should('be.visible');
               cy.get('.workspace > .titlebar > .actions > .icon-unshare').should('not.be.visible');
               cy.get('.workspace > .titlebar > .actions > .icon-share').click();
               cy.get('.workspace > .titlebar > .actions > .icon-share').should('not.be.visible');
               cy.get('.workspace > .titlebar > .actions > .icon-unshare').should('be.visible');
               cy.get('.workspace > .titlebar > .actions > .icon-unshare').click();
               cy.get('.workspace > .titlebar > .actions > .icon-share').should('be.visible');
               cy.get('.workspace > .titlebar > .actions > .icon-unshare').should('not.be.visible');
           });
       }) ;

       describe('test footer elements', function(){
           it('verify supports comes up correctly', function(){
               cy.get('.statusbar > .supports > .supports-list > span').each(($support, index, $list)=>{
                   let label=$support.text();
                   cy.log('Support is' + $support.text());
                   cy.wrap($support).click();
                   cy.get('.visible-supports > .supports-list > div > span').should('contain', label);
               });
           });

            it('verify 2 up button, and correct corresponding view comes up', function(){

            });
       });
    });

    context('test the tool palette', function(){
    //This should test the tools in the tool shelf
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

                // cy.get('.canvas-area > .canvas > .document-content > .tool-tile.selected').should('have.class','selected');
                // cy.get('.single-workspace >.workspace > .toolbar > .tool.delete').click({force:true});

            });
            it('clicks the same text field and allows user to edit text', function(){
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().focus().click();
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('Adding more text to see if it gets added.');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('contain', 'added');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('Adding more text to delete');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('contain', 'delete');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('not.contain', 'delete');
            });
        });

        describe('test the graph tool', function(){
            it('clicks the graph tool and enters four points', function(){

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

    context('save and restore of canvas', function(){
        describe('verify that canvas is saved', function(){
            it('will close and reopen the canvas and verify it looks the same', function() {
                //open the my work tab, click a different canvas, verify canvas is shown, open the my work tab, click the introduction canvas, verify intro canvas is showing
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
            });
        });

        describe('verify that if user opens same canvas from on left-nav tab, saved canvas opens', function() {

        });

        describe('verify that if user leaves a canvas in four-four up view, restore is also in four up view', function(){

        });
    });


    context('delete elements from canvas', function(){
        it('will delete elements from canvas', function(){
            // //Delete elements in the canvas
            cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().focus().click();
            cy.get('.canvas-area > .canvas > .document-content > .tool-tile.selected').should('have.class','selected');
            cy.get('.single-workspace >.workspace > .toolbar > .tool.delete').click({force:true});
            cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
            cy.get('.canvas-area > .canvas > .document-content > .tool-tile.selected').should('have.class','selected');
            cy.get('.single-workspace >.workspace > .toolbar > .tool.delete').click({force:true});
        });
    });

});