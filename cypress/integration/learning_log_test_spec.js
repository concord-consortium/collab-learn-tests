import LearningLog from './elements/LearningLog';
import BottomNav from './elements/BottomNav';
import RightNav from './elements/RightNav';
import LeftNav from './elements/LeftNav';
import Canvas from './elements/Canvas';

context('Test bottom tabs', function(){
    let learningLog = new LearningLog,
        bottomNav = new BottomNav,
        rightNav = new RightNav,
        leftNav = new LeftNav,
        canvas = new Canvas;

    describe('verify bottom tabs open to correct content and right-nav tabs is still clickable', function(){

        it('will verify correct tab opens to correct content', function(){
            bottomNav.getBottomNavTabs().each(($tab,index,$list)=>{
                let tabName = $tab.text();  //get the tab label
                cy.wrap($tab).click({force:true}); //click on tab
                bottomNav.getBottomNavExpandedSpace().should('be.visible');
                rightNav.getRightNavTabs().each(($rightTab,rightIndex,$rightList)=>{ //click on right nav tabs
                    cy.wrap($rightTab).click({force:true});
                    rightNav.getRightNavExpandedSpace().should('be.visible');
                    cy.wrap($rightTab).click() //close right nav tab
                });
                bottomNav.getBottomNavTabs().should('contain',tabName).click();//closes the bottom nav tab
            });
        });
        it('will verify restore of already open canvas in workspace', function(){
            //     //Open Introduction tab
            //     //Open Introduction canvas
                let tab = 'Introduction';
                leftNav.openToWorkspace(tab);
                canvas.getCanvasTitle().should('contain',tab);
            //     //Add a text tool and text
                canvas.addTextTile();
                canvas.enterText('I will be in the LL_'+tab);
                canvas.getTextTile().last().should('contain', 'LL_'+tab);
            //     //Add a graph tool and a shape
                canvas.addGraphTile();
                canvas.getGraphTile().last().click();
                canvas.getGraphTile().last().click();
                canvas.getGraphPointText().last().should('contain', 'A' );
                //Open learning log
                learningLog.openLearningLogTab();
                learningLog.closeLearningLogTab();
                canvas.getCanvasTitle().should('be.visible').and('contain', tab);
        })
    });

    describe('Test create, save and restore a canvas',function(){
       it('create a new learning log', function(){
           let title='pool';
            learningLog.createLearningLog(title);
            learningLog.addLLTextTile('Hello into the Learning Log World');
       });

       it('verify restore of a created learning log', function(){
           let title = 'pool';
           learningLog.openLearningLogCanvasItem(title);
       });

       it('will rename a created learning log and verify restore of name and canvas', function(){
           let renameTitle = 'rename pool',
                title = 'pool';
           learningLog.selectSpecificLLCanvasTitle(title);
           learningLog.renameLearningLog(renameTitle);
           learningLog.getLLCanvasTitle().should('contain', renameTitle);
           learningLog.getLearningLogCanvasItemTitle().should('contain',renameTitle);
           learningLog.closeLearningLogTab();
       });

       it('will create multiple learning logs, verify thumbnails, and restore them', function(){
           var log1='deck',
                log2='slide',
                log3='lane';
           //create learning log canvases
           // deck should have graph tile
           learningLog.createLearningLog(log1);
           learningLog.getLLCanvasTitle().should('contain', log1);
           learningLog.addLLGraphTile();
           learningLog.closeLearningLogTab();
           // slide should have an image
           learningLog.createLearningLog(log2);
           learningLog.getLLCanvasTitle().should('contain', log2);
           learningLog.addLLImageTile();
           learningLog.closeLearningLogTab();
           // lane should be empty
           learningLog.createLearningLog(log3);
           learningLog.getLLCanvasTitle().should('contain', log3);
           //verify thumbnails
           learningLog.getAllLearningLogCanvasItems().should(($itemList)=>{expect($itemList).to.have.length(4)});
           learningLog.getLearningLogCanvasItemTitle().each(($log, index, $loglist)=>{
               let title = $log.text();
               cy.wrap($log).parent().parent().click();
               learningLog.getLLCanvasTitle().should('contain', title);
           })
           learningLog.closeLearningLogTab(); //close learning log
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
            let tab = 'What if';
            leftNav.openToWorkspace(tab);
            canvas.getCanvasTitle().should('contain',tab);
            canvas.publishCanvas();
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