before(function(){
    //clear firebase start with fresh set of students and groups
    });
describe('Test student join a group', function(){
    console.log("student will join group");
    it('will verify Join Group Dialog comes up with welcome message to correct student', function(){
        cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass=15&demoUser=student:17&demoOffering=4&problem=1.1');
        cy.get('.join-title').should('contain', 'Join Group');
        cy.get('.welcome').should('contain','Student 17');
    });
    it('will create a group', function(){
        //select a group 10 from the dropdown
        cy.get('select').select('Group 16');
        cy.get('.join > .join-content > .create-group > div > .button').should('have.value', 'Create Group').click();
    });
    it('will verify student is an specified group', function(){
        cy.get('.header > .group > .name').should('contain', "Group 16");
        cy.get('.header > .group > .members > .member').should('contain', "Student 17").and('has.class', 'connected');
    });
    it('will verify created group is no longer available as a choice in Join Group dialog dropdown', function(){
            //in a new tab/window (tab 2), load site with Class 15, and student=27
        cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass=15&demoUser=student:27&demoOffering=4&problem=1.1');
            //verify Join group dialog comes up
        cy.get('.join-title').should('contain', 'Join Group');
        //open dropdown and verify that group 10 is not listed in the dropdown
        cy.get('select > option').each(($option, index, $list)=>{
            let option =$option.valueOf();
            expect ($option).to.not.have.value('16');
        });
    });
    it('will have another student joining an existing group', function(){
            //verify that group square exists, student17 is in the group
        cy.get('.groups > .group-list > .group > .group-title').should('contain', 'Group 1');
        cy.get('.groups > .group-list > .group > .group-users > title').should('contain', 'Student 17');
        cy.get('.groups > .group-list > .group').click();
    });
    it('will verify second student is in existing group', function(){
        cy.log('need to write this test');

    });
    it('will create a new group when a student selects a different group', function(){
        cy.log('need to write this test');

    });
    it('will verify no additional students can join group',function(){
        //need to have two more students join the first existing group
        cy.log('need to write this test');

    });
    it('will verify a student can switch groups',function(){
        //have student leave first group and join second group
        cy.log('need to write this test');

    });
    it('will verify new student can join group when one leaves it', function(){
        //have new student join the first group
        cy.log('need to write this test');

    });
});