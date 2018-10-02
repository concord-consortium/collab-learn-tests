function setup(){

}

context('Test bottom tabs', function(){

    describe('verify bottom tabs open to correct content and right-nav tabs is still clickable', function(){
        before(()=>{
            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&qaClear=all&fakeClass=1&fakeUser=student:1&fakeOffering=4&problem=1.1&qaGroup=1');
            cy.get('span').should('contain','QA Cleared: OK');
            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=1&fakeUser=student:1&fakeOffering=4&problem=1.1&qaGroup=1');
        });

        it('will verify correct tab opens to correct content', function(){
            cy.get('.bottom-nav > .tabs > .tab').each(($tab,index,$list)=>{
                let tabName = $tab.text();  //get the tab label
                cy.wrap($tab).click({force:true}); //click on tab
                cy.get('.bottom-nav.expanded').should('be.visible');
                cy.get('.right-nav > .tabs > .tab').each(($rightTab,rightIndex,$rightList)=>{ //click on right nav tabs
                    cy.wrap($rightTab).click({force:true});
                    cy.get('.right-nav > .tabs.expanded').should('be.visible');
                    cy.wrap($rightTab).click() //close right nav tab
                });
                cy.get('.bottom-nav > .tabs > .tab').should('contain',tabName).click();//closes the bottom nav tab
            });
        });
        it.only('will verify restore of already open canvas in workspace', function(){
            //     //Open Introduction tab
            //     //Open Introduction canvas
                cy.get('#leftNavTab0').click({force:true});
                cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
                cy.get('.workspace > .titlebar > .title').should('contain','Introduction');
            //     //Add a text tool and text
                cy.get('.single-workspace > .workspace > .toolbar > .tool.text').click({force: true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('I will be in the LL_Introduction');
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('contain', 'LL_Introduction');
            //     //Add a graph tool and a shape
                cy.get('.single-workspace > .workspace > .toolbar > .tool.geometry').click({force: true});
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
                cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'A' );
                //Open learning log
                cy.get('#learningLogTab').click();
                cy.get('.bottom-nav.expanded').should('be.visible');
                cy.get('#learningLogTab').click(); //close learning log
                cy.get('.workspace > .titlebar > .title').should('contain','Introduction').and('be.visible');


        })
    });

    describe('Test create, save and restore a canvas',function(){
       // it('will setup for later tests', function(){
       //     //Open Introduction tab
       //     //Open Introduction canvas
       //     cy.get('#leftNavTab0').click({force:true});
       //     cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
       //     cy.get('.workspace > .titlebar > .title').should('contain','Introduction');
       //     //Add a text tool and text
       //     cy.get('.single-workspace > .workspace > .toolbar > .tool.text').click({force: true});
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().type('I will be in the LL_Introduction');
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .text-tool').last().should('contain', 'LL_Introduction');
       //     //Add a graph tool and a shape
       //     cy.get('.single-workspace > .workspace > .toolbar > .tool.geometry').click({force: true});
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'A' );
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(40,35, {force:true});
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'B' );
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(240,70, {force:true});
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'C' );
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(40,170, {force:true});
       //     cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'D' );
       //     //Open Introduction tab
       //     cy.get('#leftNavTab0').click();
       //     //Drag image from tab to canvas
       //     cy.get('.left-nav.expanded > div.expanded-area.expanded > .left-nav-panel > .section > .canvas > .document-content > .tool-tile > .image-tool > img').trigger('mousedown',{which:1}).trigger('mousemove',{clientX: 1660, clientY: 475}).trigger('mouseup',{force:true});
       //     cy.get('#leftNavTab0').click(); //close tab
       // });

       it('create a new learning log', function(){
           var title='new learning log';
            // cy.get('#learningLogTab').click({force:true});//open Learning log
            cy.get('.bottom-nav.expanded').should('be.visible'); //verify learning log is expanded and create button will be accessible
           cy.get('.learning-log > .logs > button').should('be.visible').and('contain', 'Create');
            cy.get('.learning-log > .logs > button').should('contain','Create').click();
            cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Create Learning Log');
            cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-input > input').type(title);
            cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
            cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .single-workspace > .workspace > .titlebar > .title').should('contain', title);
            cy.get('.learning-log > .logs > .list > .list-item > .info > .title').should('contain',title);
       });
       it('verify restore of a created learning log', function(){

       });


    });

    describe('Test learning log canvases with other canvases', function(){
        it('create a canvas', function(){
            cy.log('need to write this test');
            expect(4).to.equal(3);
            //open learning log tab
            //click on create button
            //send a LL_Introduction
            //verify canvas is created with title LL_Introduction
        });
        it('open My Work canvas while in learning log canvas', function(){
            cy.log('need to write this test');
            expect(4).to.equal(3);
            //open learning log
            //open LL_Introduction
            //open My Work tab
            //Select Introduction canvas
            //verify 2 up view is showing
            //Verify LL_Introduction is on the left and Introduction is on the right
        });

        it('verify that text tool, graph tool and image can be transferred from My work canvas to Learning Log canvas', function(){
            // Drag text field from Introduction to LL_Introduction
            //Drag graph tool from introduction to LL_Introduction
            //Drag image from introduction to LL_Introduction
            //verify text field with same content is in LL_Introduction
            //Verify graph tool has the same content in LL_Introduction
            //Verify image from Introduction is in LL_Introduction
        });

    });

});