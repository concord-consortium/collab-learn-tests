describe('Test student login', function() { //should we test for SSO?
    it('will login', function() {
        //verify login lightbox comes up
    });
    it('will verify user name is in header', function(){
        cy.get('.user > .name').should('include','');
    });
});

describe('Check header area for correctness', function(){
    it('will verify if teacher name is correct',function(){

    });
    it('will verify if class name is correct', function(){

    });
    it('will verify if group name is present', function(){

    });
    it('will verify group members is correct', function(){

    });
});

describe('Test student join a group', function(){

});

describe('Test student leave a group', function(){

});

describe('Test student join a different group', function(){

});

describe('Test student logout', function(){

});
