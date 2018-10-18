import Workspace from './elements/Workspace.js';
import LeftNav from './elements/LeftNav';
import RightNav from './elements/RightNav';
import BottomNav from './elements/BottomNav';

context('Test the overall workspace', function(){
    let leftnav = new LeftNav,
        rightnav = new RightNav,
        bottomnav = new BottomNav,
        workspace = new Workspace;


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
            cy.get('.left-nav > .tabs > .tab:first').click({force:true}); //left nav expand area should be visible
            cy.get('.left-nav.expanded').should('be.visible');
            cy.get('.left-nav > .tabs > .tab:first').click({force:true}); //left nav expand area should not be visible
            cy.get('.left-nav.expanded').should('not.be.visible');

            cy.get('#rightNavTabMy\\ Work').click(); //my work expand area should be visible
            cy.get('.right-nav>.tabs.expanded').should('be.visible');
            cy.get('#rightNavTabMy\\ Work').click(); //my work expand area should not be visible
            cy.get('.right-nav>.tabs.expanded').should('not.be.visible');

            cy.get('#learningLogTab').click(); //learning log expand area should be visible
            cy.get('.bottom-nav.expanded').should('be.visible');
            cy.get('#learningLogTab').click(); //learning log expand area should not be visible
            cy.get('.bottom-nav.expanded').should('not.be.visible');
        });

        it('will verify that left nav area is closes when other tabs are opened', function(){ //should this be tab closes when no longer in that area? my work and left nav
            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=5&fakeUser=student:1&fakeOffering=1&qaGroup=1&problem=1.1');
            cy.get('.left-nav > .tabs > .tab:first').click(); //left nav expand area should be visible
            cy.get('.left-nav.expanded').should('be.visible');
            cy.get('.right-nav>.tabs.expanded').should('not.be.visible');
            cy.get('.bottom-nav.expanded').should('not.be.visible');
            cy.get('#rightNavTabMy\\ Work').click(); //my work expand area should be visible
            cy.get('.left-nav.expanded').should('not.be.visible');
            cy.get('.right-nav>.tabs.expanded').should('be.visible');
            cy.get('.bottom-nav.expanded').should('not.be.visible');
            cy.get('#learningLogTab').click(); //learning log expand area should be visible
            cy.get('.left-nav.expanded').should('not.be.visible');
            cy.get('.right-nav>.tabs.expanded').should('be.visible');
            cy.get('.bottom-nav.expanded').should('be.visible');
            //close all tabs to clear workspace for next test
            cy.get('#learningLogTab').click(); //learning log expand area should be visible
            cy.get('#rightNavTabMy\\ Work').click(); //my work expand area should be visible
        });

        it('will verify that right nav tabs are still visible and clickable when Learning Log is expanded', function(){
            cy.get('#learningLogTab').click(); //learning log expand area should be visible
            cy.get('.bottom-nav.expanded').should('be.visible');
            cy.get('.right-nav > .tabs > .tab').each(($tab,index, $list) => {
                cy.wrap($tab).click();//click on tab (check to see if this is the first time the tab is clicked, because the second click to the tab will close the expanded area
                cy.get('.right-nav>.tabs.expanded').should('be.visible');
            })
        });

        it('will verify canvases do not persist between problems', function(){
            let problem1='1.1',
                problem2='2.1';

            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=4&fakeUser=student:3&fakeOffering=1&qaGroup=1&problem='+problem1);
            let tab1 ='#leftNavTab0';
            cy.get(tab1).invoke('text').then((text)=>{
                cy.get(tab1).click({force:true});
                cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click({force:true});
                cy.get('.document > .titlebar > .title').should('contain',text);
                cy.get('.single-workspace > .document > .toolbar > .tool.text').click({force: true});
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().type('This is the '+text+ ' in Problem '+problem1);
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().should('contain', 'Problem '+problem1);
            });
            cy.wait(3000);
            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=4&fakeUser=student:3&fakeOffering=1&qaGroup=1&problem='+problem2);
            // cy.wait(1000);
            cy.get(tab1).invoke('text').then((text)=>{
                cy.get(tab1).click({force:true});
                cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click({force:true});
                cy.get('.document > .titlebar > .title').should('contain',text);
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').should('not.exist');
            });
            cy.wait(1000);
            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass=4&fakeUser=student:3&fakeOffering=1&qaGroup=1&problem='+problem1);
            // cy.wait(1000);
            cy.get(tab1).invoke('text').then((text)=>{
                cy.get(tab1).click({force:true});
                cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click({force:true});
                cy.get('.document > .titlebar > .title').should('contain',text);
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().should('contain', 'Problem '+problem1);
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().click();
                cy.get('.single-workspace > .document > .toolbar > .tool.delete').click();//clean up
            });
        })

    });
});