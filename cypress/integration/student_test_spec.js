var student = '9',
    classroom = '5',
    offering = '4',
    problemSet = '1.1';

before(function(){
   cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass='+classroom+'&demoUser=student:'+student+'&demoOffering='+offering+'&problem='+problemSet);
   //  cy.visit('http://localhost:8080/?appMode=demo&demoClass=6&demoUser=student:1&demoOffering=1&problem=1.1');
});

describe('Check header area for correctness', function(){
    // it('will verify if teacher name is correct',function(){
    //
    // });
    it('will verify if class name is correct', function(){
        cy.get('.header > .info > div> .class').should('contain',''+'Class '+classroom);
    });
    it('will verify if group name is present', function(){
        cy.get('.header > .group > .name').should('contain','Group'+' ');
    });
    it('will verify group members is correct', function(){
        cy.get('.header > .group > .members > .member').should('contain','S'+student);
    });
    it('will verify student name is correct', function(){
        cy.get('.header > .user > .name').should('contain','Student '+student);
    });
});