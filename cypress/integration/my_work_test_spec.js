import Workspace from './elements/Workspace'
import RightNav from './elements/RightNav'
import Canvas from './elements/Canvas'

describe('Test right nav tabs', function(){

    let workspace = new Workspace();
    let rightNav = new RightNav();
    let canvas = new Canvas();

    //This assumes there were canvases previously created from the left nav tabs
    it('will setup for tests', function(){
        workspace.openAndPublishCanvases();
    });
    describe('My Work tab tests', function(){
        it('verify that opened content is listed in My Work tab space', function(){ //still need to verify the titles match the titles from opened canvases
            cy.wait(1000);
            rightNav.openMyWorkTab();
            rightNav.getAllMyWorkAreaCanvasItems().each(($item,index,$list)=>{
                cy.log('Title is ' + $item.text());
            });
            rightNav.closeMyWorkTab();
        });
        it('will open the correct canvas selected from the My Work list', function(){
            rightNav.openMyWorkTab();
            rightNav.getAllMyWorkAreaCanvasItems().each(($item,index,$list)=>{
                let title= $item.text().replace(/[^\x00-\x7F]/g, "");
                cy.wrap($item).click();
                canvas.getCanvasTitle()
                    .then(($canvasTitle)=>{
                        let canvasTitle=$canvasTitle.text();
                        expect($canvasTitle.text()).to.contain(title);
                    });
                rightNav.openMyWorkTab();
                cy.wait(1000);
            });
            rightNav.closeMyWorkTab(); // clean up
        });
    });

    describe('Class Work tab tests', function(){

        it('will open correct canvas from Class Work list', function(){ //this assumes there are published work
            rightNav.openClassWorkTab();
            rightNav.getClassWorkAreaCanvasItem().each(($item,index,$list)=>{
                let title= $item.text().replace(/[^\x00-\x7F]/g, "").split('Group'),
                    group = title[1];
                expect(($item).text()).to.contain(group);
                cy.wrap($item).click();
                canvas.getCanvasTitle()
                    .then(($canvasTitle)=>{
                        let canvasTitle=$canvasTitle.text();
                        expect($canvasTitle.text()).to.contain(title[0]);
                    });
                rightNav.openClassWorkTab();
                cy.wait(1000);
            });
            rightNav.closeClassWorkTab(); //clean up
        });
    })
});
