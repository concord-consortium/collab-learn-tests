describe('Test student join a group', function(){
    let student1 = '20',
        student2 = '21',
        student3 = '22',
        student4 = '23',
        fakeClass = '15',
        fakeOffering = '3',
        problem = '2.2',
        group='20';

    function setup(student){
        cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass='+fakeClass+'&fakeUser=student:'+student+'&fakeOffering='+fakeOffering+'&problem='+problem);
    }

    it('Student 1 will join and will verify Join Group Dialog comes up with welcome message to correct student', function(){
        setup(student1);
        cy.get('.app > .join > .join-title').should('contain','Join Group');
        cy.get('.app > .join > .join-content > .welcome').should('contain','Student ' +  student1);
    });

    it('will create a group', function(){
        //select a group 20 from the dropdown
        cy.get('select').select('Group ' + group);
        cy.get('[value="Create Group"]').click();
    });
    it('will verify student is an specified group', function(){
        cy.get('.header > .group > .name').should('contain','Group '+group);
        cy.get('.header > .user > .name').should('contain','Student '+student1);
        cy.get('.header > .group > .members > .member').should('contain','S'+student1);

    });
    it('will verify created group is no longer available as a choice in Join Group dialog dropdown', function(){
        setup(student2);
        cy.get('.app > .join > .join-title').should('contain','Join Group');
        cy.get('.app > .join > .join-content > .welcome').should('contain','Student ' +  student2);
        cy.get('select > option').should('not.contain','Group '+group);
    });
    it('will have another student joining an existing group', function(){
            //Student2 will join the same group
        cy.get('.groups > .group-list').click();
    });
    it('will verify second student is in existing group', function(){
        cy.get('.header > .group > .name').should('contain','Group '+group);
        cy.get('.header > .user > .name').should('contain','Student '+student2);
        cy.get('.header > .group > .members > .member').should('contain','S'+student1).and('contain','S'+student2);
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