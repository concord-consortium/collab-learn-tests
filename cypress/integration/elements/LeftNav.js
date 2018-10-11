class LeftNav{
    getLeftNavTabs(){
        return cy.get('.left-nav > .tabs > .tab');
    }
    getOpenToWorkspaceButton(){
        return cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button');
    }
    openToWorkspace() {
        this.getOpenToWorkspaceButton().click({force:true});
    }
}
export default LeftNav;