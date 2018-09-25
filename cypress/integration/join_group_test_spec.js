// before(function(){
//     cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass=5&demoUser=student:19&demoOffering=4&problem=1.1');
// });

describe('Test student join a group', function(){
    console.log("student will join group");
    it('will verify Join Group Dialog comes up with no groups created', function(){
        cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass=5&demoUser=student:19&demoOffering=4&problem=1.1');
        cy.get('.join-title').should('contain', 'Join Group')
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