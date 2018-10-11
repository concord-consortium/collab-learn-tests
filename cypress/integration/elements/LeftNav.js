class LeftNav{
    getLeftNavTabs(){
        return cy.get('.left-nav > .tabs > .tab');
    }
    getOpenToWorkspaceButton(){
        return cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button');
    }
    openToWorkspace() {
        this.getOpenToWorkspaceButton().click();
    }
    getGroupMembers(){
        return cy.get('.header > .group > .members > .member')
    }
    getUserName(){
        return cy.get('.header > .user > .name')
    }
}
export default LeftNav;