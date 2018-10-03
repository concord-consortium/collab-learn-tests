before(function(){
    cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=2&fakeUser=student:1&fakeOffering=4&qaGroup=1&problem=1.1');
});

context('Test Canvas', function(){

    context('test canvas tools', function(){

       describe('test header elements', function(){
           it('verifies header title appears correctly', function(){
               cy.get('#leftNavTab0').click({force:true});
               cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
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
           it('verify publish button', function(){
               cy.log('need to write this test');
               expect(4).to.equal(3);
           });
       }) ;

    describe('test the tool palette', function(){
    //This should test the tools in the tool shelf
            it('verify the selection tool becomes active when clicked', function() {
                cy.get('.single-workspace > .workspace > .toolbar > .tool.select').click()
                    .should('have.class','active');
            });

            it('clicks the text tool and types Hello World', function(){

                cy.get('.single-workspace > .workspace > .toolbar > .tool.text').click({force: true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('Hello World!');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('contain', 'Hello World');
            });
                // cy.get('.canvas-area > .canvas > .document-content > .tool-tile.selected').should('have.class','selected');
                // cy.get('.single-workspace >.workspace > .toolbar > .tool.delete').click({force:true});

            it('clicks the same text field and allows user to edit text', function(){
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().focus().click();
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('Adding more text to see if it gets added.');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('contain', 'added');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('Adding more text to delete');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('contain', 'delete');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('not.contain', 'delete');
            });

            it('clicks the graph tool and enters four points', function(){

                cy.get('.single-workspace > .workspace > .toolbar > .tool.geometry').click({force: true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(40,35, {force:true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'A' );
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(140,70, {force:true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'B' );
            });
             it('will test image tool', ()=>{
                 cy.get('.single-workspace > .workspace > .toolbar > .tool.image').click({force: true});
                 cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .image-tool').should('be.visible');
             });

           it('adds additional text, graph, and image onto canvas', function(){
               //figure out how to delete all the tools first before uncommenting this
               cy.log('need to write this test');
               expect(4).to.equal(3);
               // cy.get('.single-workspace > .workspace > .toolbar > .tool.text').click({force: true});
               // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('second text tool');
               // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('contain', 'second');
               // cy.get('.single-workspace > .workspace > .toolbar > .tool.geometry').click({force: true});
               // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
               // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(40,35, {force:true});
               // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'A' );
           });
    });

    context('save and restore of canvas', function(){
        describe('verify that canvas is saved', function(){
            it('will close and reopen the canvas and verify it looks the same', function() {
                //open the my work tab, click a different canvas, verify canvas is shown, open the my work tab, click the introduction canvas, verify intro canvas is showing
                cy.get('#leftNavTab1').click();
                cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
                cy.get('.workspace > .titlebar > .title').should('contain','Initial');
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
            it('will open section', ()=>{
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
        });

        describe('verify that if user leaves a canvas in four-four up view, restore is also in four up view', function(){
            it('verify restore of 4 up view', ()=>{
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
        });
    });

    describe('test footer elements', function(){ //moved this to after tool elements have been added to verify that elements still show when in 2-up view

            it('verify supports comes up correctly', function(){
                cy.get('.statusbar > .supports > .supports-list > span').each(($support, index, $list)=>{
                    let label=$support.text();
                    cy.log('Support is' + $support.text());
                    cy.wrap($support).click();
                    cy.get('.visible-supports > .supports-list > div > span').should('contain', label);
                });
            });

            it('verify 2 up button, and correct corresponding view comes up', function(){
                cy.get('.statusbar > .actions > .icon-up2').should('be.visible').click();
                cy.get('.right-workspace > .comparison-placeholder').should('be.visible');
                cy.get('.left-workspace > .workspace > .canvas-area > .canvas > .document-content').should('be.visible');
                cy.get('.single-workspace > .workspace > .canvas-area > .canvas > .document-content').should('not.be.visible');
                cy.get('.left-workspace > .workspace > .statusbar > .actions > .icon-up').should('be.visible').click();
                cy.get('.right-workspace > .comparison-placeholder').should('not.be.visible');
                cy.get('.left-workspace > .workspace > .canvas-area > .canvas > .document-content').should('not.be.visible');
                cy.get('.single-workspace > .workspace > .canvas-area > .canvas > .document-content').should('be.visible');
            });

            it('verify 2-up button is not visible when canvas is in 4-up view', function(){
                cy.get('.workspace > .titlebar > .actions > .icon-up1').should('be.visible');
                cy.get('.canvas-container.north-east').should('not.be.visible');
                cy.get('.statusbar > .actions > .icon-up2').should('be.visible');
                cy.get('.workspace > .titlebar > .actions > .icon-up1').click();
                cy.get('.statusbar > .actions > .icon-up2').should('not.be.visible');
                cy.get('.workspace > .titlebar > .actions > .icon-up').click();
                cy.get('.statusbar > .actions > .icon-up2').should('be.visible');
            });

            //add a test for when both views are the same section (Open an intro, put it into workspace, change to 2 up view, drag intro to 2nd space, open intro again, switching back to 1 up view disappears

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