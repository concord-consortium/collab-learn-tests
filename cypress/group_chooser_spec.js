before(function(){
    //load site with Class 10, and student=10
    });
describe('Test student join a group', function(){
    console.log("student will join group");
    it('will verify Join Group Dialog comes up with welcome message to correct student', function(){
        cy.get('[data-test="group-join-title"').should('contain','Join Group');
        cy.get('[data-test="welcome-text"]').should('contain','Student');
    });
    it('will create a group', function(){
        //select a group 10 from the dropdown
        cy.get('[data-test="create-group-button"]').click();
    });
    it('will verify student is an specified group', function(){
        cy.get('[data-test="header-group-number"]').should('contain', "Group 10");
        cy.get('[data-test="header-user-name"]').should('contain', "Student 10");
    });
    it('will verify created group is no longer available as a choice in Join Group dialog dropdown', function(){
            //in a new tab/window (tab 2), load site with Class 10, and student=11
            //open dropdown and verify that group 10 is not listed in the dropdown
    });
    it('will have another student joining an existing group', function(){
            //in tab 2, verify that group square exists, student11 is in the group
        cy.get('.groups > .group-list').click();
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