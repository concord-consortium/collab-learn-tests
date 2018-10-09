context('Test bottom tabs', function(){
    function addTextTile(){
        cy.get('.learning-log > .workspaces > .single-workspace > .document > .toolbar > .tool.text').click({force: true});
        cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().type('Hello World!');
        cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().should('contain', 'Hello World');
    }
    function addGraphTile(){
            cy.get('.learning-log > .workspaces > .single-workspace > .document > .toolbar > .tool.geometry').click({force: true});
            cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool').last().click();
            cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool').last().click();
            cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'A' );
            cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool').last().click(40,35, {force:true});
            cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'B' );
            cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool').last().click(240,70, {force:true});
            cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'C' );
            cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool').last().click(40,170, {force:true});
            cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'D' );
    }
    function addImageTile(){
        cy.get('.learning-log > .workspaces > .single-workspace > .document > .toolbar > .tool.image').click({force: true});

    }
    function publishCanvas(){
        cy.get('#leftNavTab2').click({force:true});
        cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
        cy.get('.document > .titlebar > .title').should('contain','What if');
        cy.get('.single-workspace > .document > .titlebar > .actions > .icon-publish').click();
        cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Published');
        cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
    }

    describe('verify bottom tabs open to correct content and right-nav tabs is still clickable', function(){

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
        it('will verify restore of already open canvas in workspace', function(){
            //     //Open Introduction tab
            //     //Open Introduction canvas
                cy.get('#leftNavTab0').click({force:true});
                cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
                cy.get('.document > .titlebar > .title').should('contain','Introduction');
            //     //Add a text tool and text
                cy.get('.single-workspace > .document > .toolbar > .tool.text').click({force: true});
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().type('I will be in the LL_Introduction');
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().should('contain', 'LL_Introduction');
            //     //Add a graph tool and a shape
                cy.get('.single-workspace > .document > .toolbar > .tool.geometry').click({force: true});
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool').last().click();
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool').last().click();
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'A' );
                //Open learning log
                cy.get('#learningLogTab').click();
                cy.get('.bottom-nav.expanded').should('be.visible');
                cy.get('#learningLogTab').click(); //close learning log
                cy.get('.document > .titlebar > .title').should('contain','Introduction').and('be.visible');
        })
    });

    describe('Test create, save and restore a canvas',function(){
       it('create a new learning log', function(){
           var title='pool';
            cy.get('#learningLogTab').click({force:true});//open Learning log
            cy.get('.bottom-nav.expanded').should('be.visible'); //verify learning log is expanded and create button will be accessible
            cy.get('.learning-log > .logs > button').should('be.visible').and('contain', 'Create').click();
            cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Create Learning Log');
            cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-input > input').type(title);
            cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
            cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .single-workspace > .document > .titlebar > .title').should('contain', title);
            cy.get('.learning-log > .logs > .list > .list-item > .info > .title').should('contain',title);
            addTextTile();
       });

       it('verify restore of a created learning log', function(){
            cy.get('.learning-log > .logs > .list > .list-item').first().click();

       });

       it('will rename a created learning log and verify restore of name and canvas', function(){
           var renameTitle = 'rename pool';
           cy.get('.learning-log > .logs > .list > .list-item > .info > [title=pool]').click();
           cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Renaming Learning Log');
           cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-input > input').clear().type(renameTitle);
           cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
           cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .single-workspace > .document > .titlebar > .title').should('contain', renameTitle);
           cy.get('.learning-log > .logs > .list > .list-item > .info > .title').should('contain',renameTitle);
       });

       it('will create multiple learning logs, verify thumbnails, and restore them', function(){
           var log1='deck',
                log2='slide',
                log3='lane';
           //create learning log canvas
           // deck should have graph tile
           cy.get('.bottom-nav.expanded').should('be.visible'); //verify learning log is expanded and create button will be accessible
           cy.get('.learning-log > .logs > button').should('be.visible').and('contain', 'Create').click();
           cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Create Learning Log');
           cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-input > input').type(log1);
           cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
           cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .single-workspace > .document > .titlebar > .title').should('contain', log1);
           addGraphTile();
           // slide should have an image
           cy.get('.bottom-nav.expanded').should('be.visible'); //verify learning log is expanded and create button will be accessible
           cy.get('.learning-log > .logs > button').should('be.visible').and('contain', 'Create').click();
           cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Create Learning Log');
           cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-input > input').type(log2);
           cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
           cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .single-workspace > .document > .titlebar > .title').should('contain', log2);
            addImageTile();
           // lane should be empty
           cy.get('.bottom-nav.expanded').should('be.visible'); //verify learning log is expanded and create button will be accessible
           cy.get('.learning-log > .logs > button').should('be.visible').and('contain', 'Create').click();
           cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Create Learning Log');
           cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-input > input').type(log3);
           cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
           cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .single-workspace > .document > .titlebar > .title').should('contain', log3);
           //verify thumbnails
           cy.get('.learning-log > .logs > .list > .list-item').should(($itemList)=>{expect($itemList).to.have.length(4)});
           cy.get('.learning-log > .logs > .list > .list-item > .info > .title').each(($log, index, $loglist)=>{
               let title = $log.text();
               cy.wrap($log).parent().parent().click();
               cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .single-workspace > .document > .titlebar > .title').should('contain', title);
           })
           cy.get('#learningLogTab').click(); //close learning log
       })

    });

    describe('Test learning log canvases with other canvases', function(){
        let title = 'LL_Intro',
            myWorkTitle = 'Introduction',
            classWorkTitle = 'What if';
        it('create a canvas and switch to 2up view', function(){
            //click on create button
            //send a LL_Intro
            //verify canvas is created with title LL_Introduction
            cy.get('#learningLogTab').click({force:true});//open learning log
            cy.get('.bottom-nav.expanded').should('be.visible'); //verify learning log is expanded and create button will be accessible
            cy.get('.learning-log > .logs > button').should('be.visible').and('contain', 'Create').click();
            cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Create Learning Log');
            cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-input > input').type(title);
            cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
            cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .single-workspace > .document > .titlebar > .title').should('contain', title);
            cy.get('.learning-log > .logs > .list > .list-item > .info > .title').should('contain',title);
            //click on 2up button verify left and righthand canvas exist
            cy.get('.workspaces > .single-workspace > .document > .statusbar > .actions > .icon-up2').should('be.visible').click();
            cy.get('.learning-log > .workspaces > .right-workspace').should('be.visible');
            cy.get('.learning-log > .workspaces > .left-workspace > .document').should('be.visible');
        });
        it('open My Work canvas in learning log 2up view', function(){
            //open My Work tab
            cy.get('#rightNavTabMy\\ Work').should('be.visible').click({force:true});
            //Select first canvas
            cy.get('.right-nav > .expanded-area.expanded > .contents > .my-work > .list > .list-item > .info').contains(myWorkTitle);
            cy.get('.right-nav > .expanded-area.expanded > .contents > .my-work > .list > .list-item').first().click();
            //verify 2 up view is showing
            cy.get('.workspaces > .right-workspace > .document').should('be.visible');
            //Verify LL_Introduction is on the left and Introduction is on the right
            cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .left-workspace > .document > .titlebar > .title').should('contain', title);
            cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .right-workspace > .document > .titlebar > .title').should('contain', myWorkTitle);
            cy.get('#learningLogTab').click(); //close learning log
        });
        it('open Class Work canvas in learning log 2up view', function(){
            publishCanvas();
            cy.get('#learningLogTab').click({force:true});//open learning log
            cy.get('#rightNavTabClass\\ Work').should('be.visible').click({force:true});
            //Select first canvas
            cy.get('.right-nav > .expanded-area.expanded > .contents > .class-work > .list > .list-item > .info').contains(classWorkTitle);
            cy.get('.right-nav > .expanded-area.expanded > .contents > .class-work > .list > .list-item').first().click();
            //verify 2 up view is showing
            cy.get('.workspaces > .right-workspace > .document').should('be.visible');
            //Verify LL_Introduction is on the left and Introduction is on the right
            cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .left-workspace > .document > .titlebar > .title').should('contain', title);
            cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .workspaces > .right-workspace > .document > .titlebar > .title').should('contain', classWorkTitle);
        });

        //TODO: add test when drag and drop
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