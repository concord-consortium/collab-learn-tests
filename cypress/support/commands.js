// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import Header from '../integration/elements/Header.js';
import RightNav from '../integration/elements/RightNav';
import LeftNav from '../integration/elements/LeftNav';
import Canvas from '../integration/elements/Canvas';

Cypress.Commands.add("setupGroup", (group) => {
    const baseUrl = `${Cypress.config("baseUrl")}`;

    let qaClass = 10,
        qaOffering = 10,
        qaGroup = 10,
        problem = 2.3;
    let teacher = 10;
    // let group = ['33','44','55','66'];

    let header = new Header,
        rightNav = new RightNav,
        leftNav = new LeftNav,
        canvas = new Canvas;
    let i=0;

    for (i=0;i<group.length;i++) {
        cy.wait(5000);
        cy.visit(baseUrl+'?appMode=qa&qaGroup='+qaGroup+'&fakeClass='+qaClass+'&fakeUser=student:'+group[i]+'&fakeOffering='+qaOffering+'&problem='+problem);
        leftNav.openLeftNavTab('Now What')
            leftNav.openToWorkspace();
        canvas.addTextTile();
        canvas.enterText('This is to test the 4-up view of S'+group[i]);
        canvas.getTextTile().last().should('contain', '4-up').and('contain','S'+group[i]);
        canvas.shareCanvas();//all students will share their canvas
        cy.wait(1000);
    }
    //verify Group num and there are 4 students in the group
    header.getGroupName().should('contain','Group '+qaGroup);
    header.getGroupMembers().each(($member,index, $list)=>{
        expect(['S'+group[0],'S'+group[1],'S'+group[2],'S'+group[3]]).to.include($member.text());
    });
});
Cypress.Commands.add("uploadFile",(selector, filename, type="")=>{
    // cy.fixture(filename).as("image");

    return cy.get(selector).then(subject => {
        return cy.fixture(filename,'base64')
            .then(Cypress.Blob.base64StringToBlob)
        // From Cypress document: https://docs.cypress.io/api/utilities/blob.html#Examples
        // return Cypress.Blob.base64StringToBlob(cy.fixture(filename), "image/png")
            .then((blob) => {
            const el = subject[0]
            const nameSegments = filename.split('/')
            const name = nameSegments[nameSegments.length - 1]
            const testFile = new File([blob], name, { type });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(testFile);
            el.files = dataTransfer.files;
            return subject;
        })
    })
})
Cypress.Commands.add("clearQAData", (data)=>{ //clears data from Firebase (currently data='all' is the only one supported)
    const baseUrl = `${Cypress.config("baseUrl")}`;
    if (data=='all') {
        cy.visit(baseUrl + '?appMode=qa&qaClear=' + data + '&fakeClass=1&fakeUser=student:1');
        cy.wait(3000);
        cy.get('span').should('contain','QA Cleared: OK');
    }
})

