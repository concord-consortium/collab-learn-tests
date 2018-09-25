before(function(){
   cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass=5&demoUser=student:9&demoOffering=4&problem=1.1');
   //  cy.visit('http://localhost:8080/?appMode=demo&demoClass=6&demoUser=student:1&demoOffering=1&problem=1.1');

});
// Students do not have to be part of the group, but can join a group at any point. Once a student joins a group, they cannot leave the group

// Students are logged in through portal, need to verify that auth is transferred from portal to CLUE
describe('Test student header', function() { //should we test for SSO?
    // it('will login', function() {
    //     console.log('Student logs in as x')
    //     //verify login lightbox comes up
    // });
    // it('will verify user name is in header', function(){
    //     cy.get('.header > .user > .name').should('contain','Student');
    // });
});

describe('Check header area for correctness', function(){
    // it('will verify if teacher name is correct',function(){
    //
    // });
    it('will verify if class name is correct', function(){
        cy.get('.header > .info > div> .class').should('contain',''+'Class 5');
    });
    it('will verify if group name is present', function(){
        cy.get('.header > .group > .name').should('contain','Group'+'');
    });
    it('will verify group members is correct', function(){
        cy.get('.header > .group > .members > .member').should('contain','S9');
    });
    it('will verify student name is correct', function(){
        cy.get('.header > .user > .name').should('contain','Student 9');
    });
});

describe('Test student join a group', function(){
    console.log("student will join group")
    //should be presented with a select a group popup
    //verify that correct group name comes up in header
});

describe('Test student leave a group', function(){
    console.log("student will leave the group")
    //should be presented with a select a group popup
    //verify that group name reflects you are no longer in a group
});

describe('Test student join a different group', function(){
    console.log("student will join a different group")
    //verify the different group name
});


//Verify that student is logged out of problem session when they log out of portal or session times out.
describe('Test student logout', function(){
    console.log("student will log out")
});
