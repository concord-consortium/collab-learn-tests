import Header from './elements/Header.js'

let qaClass = 10,
    qaOffering = 10,
    qaGroup = 10,
    problem = 2.3,
    studentArr=[15,16,17,18];
let teacher = 10;

function setupGroup(){
    let i=0;

    for (i=0;i<studentArr.length;i++) {
        cy.wait(5000);
        cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&qaGroup='+qaGroup+'&fakeClass='+qaClass+'&fakeUser=student:'+studentArr[i]+'&fakeOffering='+qaOffering+'&problem='+problem);
        cy.get('#leftNavTab3').click();
        cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
        cy.get('.single-workspace > .document > .toolbar > .tool.text').click({force: true});
        cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().type('This is to test the 4-up view of S'+studentArr[i]);
        cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().should('contain', '4-up').and('contain','S'+studentArr[i]);
        cy.get('.single-workspace > .document > .titlebar > .actions > .icon-share').click();//all students will share their canvas
        cy.wait(1000);
    }
    //verify Group num and there are 4 students in the group
    cy.get('.app > .group-view > .header > .group > .name').should('contain','Group '+qaGroup);
    cy.get('.app > .group-view > .header > .group > .members > .member').each(($member,index, $list)=>{
        expect(['S15','S16','S17','S18']).to.include($member.text());
    });
}

context('Teacher workspace',function(){ //does not have My Work tab and has Teacher in user name
    describe('Check header area for correctness', function(){

        const workspace = new Header();
        it('set up group and will go to a teacher view of the site', function(){
            setupGroup();
            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass='+classroom+'&fakeUser=teacher:'+teacher+'&fakeOffering='+offering+'&problem='+problem+'&qaGroup='+qaGroup);
        });
        it('will verify if class name is correct', function(){
            workspace.getClassName().should('contain',''+'Class '+classroom);
        });
        it('will verify if group name is present', function(){
            workspace.getGroupName().should('contain','Group'+' ');
        });
        it('will verify group members is correct', function(){
            workspace.getGroupMembers().each(($member,index, $list)=> {
                expect(['S15', 'S16', 'S17', 'S18']).to.include($member.text());
            });
        });
        it('will verify student name is correct', function(){
            workspace.getUserName().should('contain','Teacher '+teacher);
        });
    });

    describe('Check workspace comes up correctly', function(){
        it('will verify left nav comes up correctly', function(){

        });
        it('will verify right nav comes up correctly', function(){

        });
        it('will verify bottom nav comes up correctly', function(){

        });
    });

    describe('Check the student canvases restore correctly', function(){

    });
});

