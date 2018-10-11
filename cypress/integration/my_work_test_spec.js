import Workspace from './elements/Workspace'
import RightNav from './elements/RightNav'

describe('Test right nav tabs', function(){

    let workspace = new Workspace();
    let rightNav = new RightNav();

    //This assumes there were canvases previously created from the left nav tabs
    it('will setup for tests', function(){
        workspace.openAndPublishCanvases();
    });
    describe('My Work tab tests', function(){
        it('verify that opened content is listed in My Work tab space', function(){ //still need to verify the titles match the titles from opened canvases
            cy.wait(1000);
            rightNav.openMyWorkTab();
            rightNav.getMyWorkAreaCanvasItem().each(($item,index,$list)=>{
                cy.log('Title is ' + $item.text());
            });
        });
        it('will open the correct canvas selected from the My Work list', function(){
            cy.get('#rightNavTabMy\\ Work.tab').click({force:true});
            cy.get('#rightNavTabMy\\ Work.tab').click({force:true});
            cy.get('.right-nav > .expanded-area.expanded > .contents > .my-work > .list > .list-item').each(($item,index,$list)=>{
                let title= $item.text().replace(/[^\x00-\x7F]/g, "");
                cy.wrap($item).click();
                cy.get('.single-workspace > .document > .titlebar > .title')
                    .then(($canvasTitle)=>{
                        let canvasTitle=$canvasTitle.text();
                        expect($canvasTitle.text()).to.contain(title);
                    });
                cy.get('#rightNavTabMy\\ Work.tab').click({force:true});
                cy.wait(1000);
            });
        });
    });

    describe('Class Work tab tests', function(){

        it('will open correct canvas from Class Work list', function(){ //this assumes there are published work
            cy.get('#rightNavTabClass\\ Work.tab').click({force:true});
            // cy.get('#rightNavTabClass\\ Work.tab').click({force:true});
            cy.get('.right-nav > .expanded-area.expanded > .contents > .class-work > .list > .list-item').each(($item,index,$list)=>{
                let title= $item.text().replace(/[^\x00-\x7F]/g, "").split('Group'),
                    group = title[1];
                expect(($item).text()).to.contain(group);
                cy.wrap($item).click();
                cy.get('.single-workspace > .document > .titlebar > .title')
                    .then(($canvasTitle)=>{
                        let canvasTitle=$canvasTitle.text();
                        expect($canvasTitle.text()).to.contain(title[0]);
                    });
                cy.get('#rightNavTabClass\\ Work.tab').click({force:true});
                cy.wait(1000);
            });
        });


    })
});
