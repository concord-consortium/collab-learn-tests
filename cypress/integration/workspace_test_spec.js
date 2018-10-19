import Workspace from './elements/Workspace.js';
import LeftNav from './elements/LeftNav';
import BottomNav from './elements/BottomNav';
import RightNav from './elements/RightNav';
import Canvas from './elements/Canvas';


let leftNav = new LeftNav,
    bottomNav = new BottomNav,
    rightNav = new RightNav,
    canvas = new Canvas;


context('Test the overall workspace', function(){
    // describe('Test loading problem pages', function(){
    //     it('should load specified problems and tabs successfully', function(){
    //         const problems = [
    //             {
    //                 number:'1.1',
    //                 title:'Solving a Mystery',
    //                 subtitle: 'An Introduction to Similarity'
    //             },
    //             {
    //                 number:'1.2',
    //                 title:'Stretching a Figure',
    //                 subtitle:'Comparing Similar Figures'
    //             },
    //             {
    //                 number:'1.3',
    //                 title:'Scaling Up and Down',
    //                 subtitle:'Corresponding Sides and Angles'
    //             },
    //             {
    //                 number:'2.1',
    //                 title:'Drawing Wumps',
    //                 subtitle:'Making Similar Figures'
    //             },
    //             {
    //                 number:'2.2',
    //                 title:'Hats Off to the Wumps',
    //                 subtitle:'Changing a Figure\'s Size and Location'
    //             },
    //             {
    //                 number:'2.3',
    //                 title:'Mouthing Off and Nosing Around',
    //                 subtitle:'Scale Factors'
    //             },
    //             {
    //                 number:'3.1',
    //                 title: "Rep-Tile Quadrilaterals",
    //                 subtitle: "Forming Rep-Tiles with Similar Quadrilaterals and Triangles"
    //             },
    //             {
    //                 number:'3.2',
    //                 title: "Designing Under Constraints",
    //                 subtitle: "Scale Factors and Similar Shapes"
    //             },
    //             {
    //                 number:'3.3',
    //                 title: "Out of Reach",
    //                 subtitle: "Finding Lengths with Similar Triangles"
    //             }
    //         ];
    //         problems.forEach(function(problem){
    //             cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=5&fakeUser=student:9&fakeOffering=4&qaGroup=1&problem='+problem.number);
    //             // cy.visit('http://localhost:8080/?appMode=demo&demoClass=5&demoUser=student:1&demoOffering=1&problem='+problem.number);
    //                 cy.get('.problem').should('contain', problem.title+': '+problem.subtitle);
    //                 cy.screenshot(problem.title);
    //                 cy.get('.left-nav > .tabs > .tab').each(($tab,index, $list) => {
    //                     let tabTitle = $tab.text();//get the tab label
    //                     let probTitle = problem.title;
    //                     cy.wrap($tab).click();//click on tab (check to see if this is the first time the tab is clicked, because the second click to the tab will close the expanded area
    //                     cy.screenshot(probTitle + ' ' + tabTitle);
    //             })
    //         });
    //     });
    // });

    describe('Desktop functionalities', function(){
        it('will verify that clicking on tab closes the nav area', function(){
            leftNav.openLeftNavTab('Introduction'); //left nav expand area should be visible
            leftNav.getLeftNavExpandedSpace().should('be.visible');
            leftNav.closeLeftNavTab('Introduction'); //left nav expand area should not be visible
            leftNav.getLeftNavExpandedSpace().should('not.be.visible');

            rightNav.openMyWorkTab(); //my work expand area should be visible
            rightNav.getRightNavExpandedSpace().should('be.visible');
            rightNav.closeMyWorkTab(); //my work expand area should not be visible
            rightNav.getRightNavExpandedSpace().should('not.be.visible');

            bottomNav.openLearningLogTab(); //learning log expand area should be visible
            bottomNav.getBottomNavExpandedSpace().should('be.visible');
            bottomNav.closeLearningLogTab(); //learning log expand area should not be visible
            bottomNav.getBottomNavExpandedSpace().should('not.be.visible');
        });

        it('will verify that left nav area is closes when other tabs are opened', function(){ //should this be tab closes when no longer in that area? my work and left nav
            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=5&fakeUser=student:1&fakeOffering=1&qaGroup=1&problem=1.1');
            leftNav.openLeftNavTab('Introduction'); //left nav expand area should be visible
            leftNav.getLeftNavExpandedSpace().should('be.visible');
            rightNav.getRightNavExpandedSpace().should('not.be.visible');
            bottomNav.getBottomNavExpandedSpace().should('not.be.visible');
            rightNav.openMyWorkTab(); //my work expand area should be visible
            leftNav.getLeftNavExpandedSpace().should('not.be.visible');
            rightNav.getRightNavExpandedSpace().should('be.visible');
            bottomNav.getBottomNavExpandedSpace().should('not.be.visible');
            bottomNav.openLearningLogTab(); //learning log expand area should be visible
            leftNav.getLeftNavExpandedSpace().should('not.be.visible');
            rightNav.getRightNavExpandedSpace().should('be.visible');
            bottomNav.getBottomNavExpandedSpace().should('be.visible');
            //close all tabs to clear workspace for next test
            bottomNav.closeLearningLogTab(); //learning log expand area should be visible
            rightNav.closeMyWorkTab(); //my work expand area should be visible
        });

        it('will verify that right nav tabs are still visible and clickable when Learning Log is expanded', function(){
            bottomNav.openLearningLogTab(); //learning log expand area should be visible
            bottomNav.getBottomNavExpandedSpace().should('be.visible');
            rightNav.getRightNavTabs().each(($tab,index, $list) => {
                cy.wrap($tab).click();//click on tab (check to see if this is the first time the tab is clicked, because the second click to the tab will close the expanded area
                rightNav.getRightNavExpandedSpace().should('be.visible');
            })
        });

        it('will verify canvases do not persist between problems', function(){
            let problem1='1.1',
                problem2='2.1';
            let tab1 ='Introduction';

            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=4&fakeUser=student:3&fakeOffering=1&qaGroup=1&problem='+problem1);
            cy.wait(1000);

            leftNav.openLeftNavTab(tab1);
            leftNav.openToWorkspace();
            canvas.getCanvasTitle()
                .then(($titleLoc)=>{
                let title = $titleLoc.text().replace(/[^\x00-\x7F]/g, "");
                expect(title).to.contain(tab1);
            });//.text().replace(/[^\x00-\x7F]/g, "").should('contain',tab1);
            canvas.addTextTile();
            canvas.enterText('This is the '+tab1+ ' in Problem '+problem1);
            canvas.getTextTile().last().should('contain', 'Problem '+problem1);
            cy.wait(2000);

            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=4&fakeUser=student:3&fakeOffering=2&qaGroup=1&problem='+problem2);
            cy.wait(1000);
            leftNav.openLeftNavTab(tab1);
            leftNav.openToWorkspace();
            canvas.getCanvasTitle().should('contain',tab1);
            canvas.getTextTile().should('not.exist');
            cy.wait(2000);

            //Shows student as disconnected and will not load the intrduction canvas
            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=4&fakeUser=student:3&fakeOffering=1&qaGroup=1&problem='+problem1);
            cy.wait(1000);
            leftNav.openLeftNavTab(tab1);
            leftNav.openToWorkspace();
            cy.wait(1000);
            canvas.getCanvasTitle().should('contain',tab1);
            canvas.getTextTile().last().should('contain', 'Problem '+problem1);
            canvas.deleteTile('text')//clean up
        })

    });
});