before(function(){
   // cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=dev');
    cy.visit('http://localhost:8080/?appMode=demo&demoClass=1&demoUser=student:5&demoOffering=1&problem=1.1');

});
// Students do not have to be part of the group, but can join a group at any point. Once a student joins a group, they cannot leave the group

// Students are logged in through portal, need to verify that auth is transferred from portal to CLUE
describe('Test student header', function() { //should we test for SSO?
    it('will login', function() {
        console.log('Student logs in as x')
        //verify login lightbox comes up
    });
    it('will verify user name is in header', function(){
        cy.get('.header > .user > .name').should('contain','Student');
    });
});

describe('Check header area for correctness', function(){
    // it('will verify if teacher name is correct',function(){
    //
    // });
    it('will verify if class name is correct', function(){
        cy.get('[data-test="header-class-name"]').should('contain',''+'Class');
    });
    it('will verify if group name is present', function(){
        cy.get('.header > .group > div > .name').should('contain','Group'+'');
    });
    it('will verify group members is correct', function(){
        cy.get('.header > .group > div > .members').should('contain','S1');
    });
});

describe('Test student join a group', function(){
    console.log("student will join group");
    it('will verify Join Group Dialog comes up', function(){

    });
    it('will create a group', function(){

    });
    it('will verify student is an specified group', function(){

    });
    it('will verify created group is no longer available as a choice in Join Group dialog dropdown', function(){

    });
    it('will have another student joining an existing group', function(){

    });
    it('will verify second student is in existing group', function(){

    });
    it('will create a new group when a student selects a different group', function(){

    });
    it('will verify no additional students can join group',function(){
        //need to have two more students join the first existing group
    });
    it('will verify a student can switch groups',function(){
       //have student leave first group and join second group
    });
    it('will verify new student can join group when one leaves it', function(){
      //have new student join the first group
    });
});

//Verify that student is logged out of problem session when they log out of portal or session times out.
describe('Test student logout', function(){
    console.log("student will log out");
    it('will verify that student is not logged on and not connected to group', function(){
        //verify that student icon is grayed out and says disconnected when hovered
    });
    it('will verify that student is still part of the group even though not currently logged on', function(){
        //have another student try to join the group and should be rejected
    });
});
