// before(function(){
//    cy.visit('https://collaborative-learning.concord.org/branch/master/?devMode=true');
// });

describe('Test student login', function() { //should we test for SSO?
    it('will login', function() {
        console.log('Student logs in as x')
        //verify login lightbox comes up
    });
    it('will verify user name is in header', function(){
        cy.get('.header > .user > .name').should('contain','Developer');
    });
});

describe('Check header area for correctness', function(){
    // it('will verify if teacher name is correct',function(){
    //
    // });
    it('will verify if class name is correct', function(){
        cy.get('.header > .info > div > .class').should('contain','Class'+'');
    });
    it('will verify if group name is present', function(){
        cy.get('.header > .group > div > .name').should('contain','Group'+'');
    });
    it('will verify group members is correct', function(){
        cy.get('.header > .group > div > .members').should('contain','Members'+'');
    });
});

describe('Test student join a group', function(){
    console.log("student will join group")
    //should be presented with a select a group popup
});

describe('Test student leave a group', function(){
    console.log("student will leave the group")
    //should be presented with a select a group popup
});

describe('Test student join a different group', function(){
    console.log("student will join a different group")
    //verify the different group name
});

describe('Test student logout', function(){
    console.log("student will log out")
});
