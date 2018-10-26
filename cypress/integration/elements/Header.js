class Header{
    getClassName(){
        return cy.get('.header > .info > div> .class');
    }
    getGroupName(){
        return cy.get('.header > .group > .name');
    }
    getGroupMembers(){
        return cy.get('.header > .group > .members > .row > .member')
    }
    getUserName(){
        return cy.get('.header > .user > .name')
    }
}
export default Header;